import { useEffect, useState } from "react";
import JellyfishArtwork from "@/components/JellyfishArtwork";

const JELLIES = [
  { left: "5%", size: 30, opacity: 0.32, blur: 0.8, duration: "2300ms", delay: "70ms", drift: "-18px" },
  { left: "21%", size: 58, opacity: 0.44, blur: 0.2, duration: "2200ms", delay: "0ms", drift: "16px" },
  { left: "39%", size: 38, opacity: 0.28, blur: 1.4, duration: "2350ms", delay: "130ms", drift: "-12px" },
  { left: "57%", size: 86, opacity: 0.42, blur: 0, duration: "2250ms", delay: "40ms", drift: "20px" },
  { left: "76%", size: 48, opacity: 0.34, blur: 0.8, duration: "2300ms", delay: "100ms", drift: "-16px" },
  { left: "91%", size: 66, opacity: 0.25, blur: 1.5, duration: "2200ms", delay: "60ms", drift: "12px" },
];

const PARTICLES = [
  { left: "8%", bottom: "12%", size: 2, delay: "40ms" },
  { left: "18%", bottom: "26%", size: 3, delay: "180ms" },
  { left: "31%", bottom: "8%", size: 2, delay: "0ms" },
  { left: "45%", bottom: "19%", size: 2, delay: "240ms" },
  { left: "56%", bottom: "6%", size: 3, delay: "100ms" },
  { left: "67%", bottom: "24%", size: 2, delay: "60ms" },
  { left: "79%", bottom: "10%", size: 2, delay: "200ms" },
  { left: "92%", bottom: "18%", size: 3, delay: "120ms" },
];

const shouldShowIntro = () => {
  if (typeof window === "undefined") return false;

  try {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

const UnderwaterIntro = () => {
  const [visible, setVisible] = useState(shouldShowIntro);

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => window.clearTimeout(timeout);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="underwater-intro fixed inset-0 z-[100] overflow-hidden bg-background pointer-events-none" aria-hidden="true">
      <div className="underwater-intro-overlay absolute inset-0 bg-background" />

      {PARTICLES.map((particle, index) => (
        <span
          key={`particle-${index}`}
          className="jelly-particle underwater-intro-particle absolute rounded-full"
          style={{
            left: particle.left,
            bottom: particle.bottom,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {JELLIES.map((jelly, index) => (
        <div
          key={`jelly-${index}`}
          className="underwater-intro-rise absolute"
          style={{
            left: jelly.left,
            bottom: `-${Math.ceil(jelly.size * 1.7)}px`,
            animationDuration: jelly.duration,
            animationDelay: jelly.delay,
          }}
        >
          <div className="underwater-intro-drift" style={{ ["--intro-drift" as string]: jelly.drift }}>
            <div
              className="jelly-body"
              style={{
                ["--jelly-w" as string]: `${jelly.size}px`,
                ["--jelly-scale" as string]: "1",
                opacity: jelly.opacity,
                filter: jelly.blur ? `blur(${jelly.blur}px)` : undefined,
              }}
            >
              <JellyfishArtwork id={`intro-${index}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnderwaterIntro;