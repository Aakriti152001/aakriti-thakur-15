import { useEffect, useState } from "react";
import JellyfishArtwork from "@/components/JellyfishArtwork";

const INTRO_KEY = "aakriti-underwater-intro-seen";

const JELLIES = [
  { left: "7%", size: 34, opacity: 0.28, blur: 1.2, duration: "1550ms", delay: "80ms", drift: "-18px" },
  { left: "22%", size: 46, opacity: 0.4, blur: 0.4, duration: "1700ms", delay: "0ms", drift: "16px" },
  { left: "40%", size: 30, opacity: 0.24, blur: 1.8, duration: "1450ms", delay: "140ms", drift: "-12px" },
  { left: "58%", size: 48, opacity: 0.38, blur: 0, duration: "1750ms", delay: "40ms", drift: "20px" },
  { left: "77%", size: 36, opacity: 0.3, blur: 1.2, duration: "1500ms", delay: "110ms", drift: "-16px" },
  { left: "91%", size: 28, opacity: 0.22, blur: 2, duration: "1650ms", delay: "60ms", drift: "12px" },
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
    if (window.localStorage.getItem(INTRO_KEY) === "complete") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.localStorage.setItem(INTRO_KEY, "complete");
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

const UnderwaterIntro = () => {
  const [visible, setVisible] = useState(shouldShowIntro);

  useEffect(() => {
    if (!visible) return;

    const timeout = window.setTimeout(() => {
      try {
        window.localStorage.setItem(INTRO_KEY, "complete");
      } catch {
        // The intro still completes if browser storage is unavailable.
      }
      setVisible(false);
    }, 1850);

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
          className="underwater-intro-rise absolute bottom-[-24%]"
          style={{ left: jelly.left, animationDuration: jelly.duration, animationDelay: jelly.delay }}
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