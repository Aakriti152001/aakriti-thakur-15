import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, [role="button"], input[type="submit"], label, select, summary, [data-cursor="hover"]';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    const dot = dotRef.current!;
    let mx = -100, my = -100, x = -100, y = -100;
    let target: Element | null = null;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) { x = mx; y = my; visible = true; dot.style.opacity = "1"; }
      const t = (e.target as Element)?.closest?.(INTERACTIVE) ?? null;
      if (t !== target) {
        target = t;
        dot.classList.toggle("is-hover", !!t);
      }
    };
    const onLeave = () => { visible = false; dot.style.opacity = "0"; };

    const loop = () => {
      let tx = mx, ty = my;
      if (target) {
        const r = target.getBoundingClientRect();
        // gentle magnetic pull toward element center, capped to stay near pointer
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = Math.max(-6, Math.min(6, (cx - mx) * 0.15));
        const dy = Math.max(-6, Math.min(6, (cy - my) * 0.15));
        tx += dx; ty += dy;
      }
      x += (tx - x) * 0.35;
      y += (ty - y) * 0.35;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={dotRef} aria-hidden className="custom-cursor" style={{ opacity: 0 }}>
      <span className="custom-cursor-dot" />
    </div>
  );
};

export default CustomCursor;
