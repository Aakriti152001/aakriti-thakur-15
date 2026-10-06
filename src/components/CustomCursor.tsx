import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, [role="button"], input[type="submit"], label, select, summary, [data-cursor="hover"], .cursor-pointer';

const CustomCursor = () => {
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
    const glow = glowRef.current;
    if (!glow) return;
    let mx = -100, my = -100;
    let gx = -100, gy = -100;
    let target: Element | null = null;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        gx = mx; gy = my; visible = true;
        glow.classList.add("is-visible");
      }
      const t = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
      if (t !== target) {
        target = t;
        glow.classList.toggle("is-hover", !!t);
      }
    };
    const onLeave = () => {
      visible = false;
      target = null;
      glow.classList.remove("is-visible", "is-hover");
    };

    const loop = () => {
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
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={glowRef} aria-hidden="true" className="cursor-glow">
        <span className="cursor-glow-field" />
      </div>
    </>
  );
};

export default CustomCursor;
