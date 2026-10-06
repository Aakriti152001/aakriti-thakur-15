import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, [role="button"], input[type="submit"], label, select, summary, [data-cursor="hover"], .cursor-pointer';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (any-pointer: fine)");
    const touchMq = window.matchMedia("(any-pointer: coarse)");
    const update = () => setEnabled(mq.matches && !touchMq.matches);
    update();
    mq.addEventListener("change", update);
    touchMq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      touchMq.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;
    document.documentElement.classList.add("custom-cursor-active");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let mx = -100, my = -100, x = -100, y = -100;
    let gx = -100, gy = -100;
    let target: Element | null = null;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        x = gx = mx; y = gy = my; visible = true;
        dot.classList.add("is-visible");
        glow.classList.add("is-visible");
      }
      const t = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
      if (t !== target) {
        target = t;
        dot.classList.toggle("is-hover", !!t);
        glow.classList.toggle("is-hover", !!t);
      }
    };
    const onLeave = () => {
      visible = false;
      target = null;
      dot.classList.remove("is-visible", "is-hover");
      glow.classList.remove("is-visible", "is-hover");
    };

    const loop = () => {
      let tx = mx, ty = my;
      if (target?.isConnected && !reducedMotion.matches) {
        const r = target.getBoundingClientRect();
        // gentle magnetic pull toward element center, capped to stay near pointer
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = Math.max(-6, Math.min(6, (cx - mx) * 0.15));
        const dy = Math.max(-6, Math.min(6, (cy - my) * 0.15));
        tx += dx; ty += dy;
      }
      const easing = reducedMotion.matches ? 1 : 0.35;
      x += (tx - x) * easing;
      y += (ty - y) * easing;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      gx += (mx - gx) * 0.16;
      gy += (my - gy) * 0.16;
      const dx = mx - gx, dy = my - gy;
      const stretch = Math.min(Math.hypot(dx, dy) / 450, 0.18);
      const angle = Math.atan2(dy, dx);
      glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${1 + stretch}, ${1 - stretch * 0.4})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={glowRef} aria-hidden="true" className="cursor-glow">
        <span className="cursor-glow-field" />
      </div>
      <div ref={dotRef} aria-hidden="true" className="custom-cursor">
        <span className="custom-cursor-dot" />
      </div>
    </>
  );
};

export default CustomCursor;
