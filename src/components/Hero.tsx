import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
const portraitImg = portraitAsset.url;

const MiniJelly = ({ side }: { side: "left" | "right" }) => {
  const id = `hero-jelly-${side}`;
  const isLeft = side === "left";
  return (
     <div
      aria-hidden="true"
      className="absolute top-0 bottom-0 pointer-events-none"
      style={{
        [isLeft ? "left" : "right"]: "-28px",
        width: "70px",
      }}
    >
      <div
        className="hero-jelly-float absolute left-0"
        style={{
          animationName: "hero-jelly-float",
          animationDuration: "14s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: isLeft ? "-3s" : "-8s",
        }}
      >
        <div
          className="jelly-drift"
          style={{
            animationDuration: "7s",
            animationDelay: isLeft ? "-1s" : "-4s",
            ["--jelly-drift-x" as string]: isLeft ? "8px" : "-8px",
            ["--jelly-tilt" as string]: isLeft ? "6deg" : "-6deg",
          }}
        >
          <div
            className="jelly-body"
            style={{
              ["--jelly-w" as string]: "70px",
              ["--jelly-scale" as string]: "1",
              opacity: 0.65,
            }}
          >
            <svg viewBox="0 0 120 200" className="w-full h-auto" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id={`bell-${id}`} cx="50%" cy="62%" r="62%">
                  <stop offset="0%" stopColor="hsl(84 90% 88%)" stopOpacity="1" />
                  <stop offset="38%" stopColor="hsl(80 70% 80%)" stopOpacity="0.42" />
                  <stop offset="78%" stopColor="hsl(110 55% 62%)" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="hsl(150 60% 40%)" stopOpacity="0.05" />
                </radialGradient>
                <radialGradient id={`core-${id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(72 100% 92%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(96 90% 70%)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={`tent-${id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(90 85% 82%)" stopOpacity="0.7" />
                  <stop offset="60%" stopColor="hsl(120 70% 62%)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="hsl(140 60% 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ellipse cx="60" cy="58" rx="52" ry="42" fill={`url(#core-${id})`} opacity="0.5" />
              <g className="jelly-tentacles" fill="none" stroke={`url(#tent-${id})`} strokeLinecap="round">
                <path d="M40 62 C34 96 46 122 36 168" strokeWidth="1.6" />
                <path d="M48 66 C44 104 56 130 48 182" strokeWidth="1.2" />
                <path d="M56 68 C56 108 62 138 58 190" strokeWidth="1.8" />
                <path d="M64 68 C68 106 60 140 70 186" strokeWidth="1.2" />
                <path d="M72 66 C78 100 70 128 80 176" strokeWidth="1.6" />
                <path d="M80 62 C88 94 78 118 90 162" strokeWidth="1.1" />
              </g>
              <path
                d="M8 62 C8 28 32 6 60 6 C88 6 112 28 112 62 C112 70 104 74 96 70 C88 66 84 74 76 74 C68 74 66 68 60 68 C54 68 52 74 44 74 C36 74 32 66 24 70 C16 74 8 70 8 62 Z"
                fill={`url(#bell-${id})`}
                stroke="hsl(86 95% 85%)"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <ellipse cx="60" cy="52" rx="16" ry="12" fill={`url(#core-${id})`} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const HERO_LINES = ["hello i'm,", "Aakriti", "Thakur"];

const Hero = () => {
  const [typed, setTyped] = useState<string[]>(["", "", ""]);
  const [activeLine, setActiveLine] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setTyped(HERO_LINES);
      setActiveLine(-1);
      setTypingDone(true);
      return;
    }
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });
    (async () => {
      await wait(400);
      for (let li = 0; li < HERO_LINES.length; li++) {
        if (cancelled) return;
        setActiveLine(li);
        for (let ci = 1; ci <= HERO_LINES[li].length; ci++) {
          if (cancelled) return;
          await wait(58);
          setTyped((prev) => prev.map((v, i) => (i === li ? HERO_LINES[li].slice(0, ci) : v)));
        }
        await wait(140);
      }
      if (cancelled) return;
      setActiveLine(-1);
      setTypingDone(true);
    })();
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <section className="min-h-[90vh] flex items-start md:items-center relative overflow-hidden pt-[112px] pb-[36px] md:pt-12">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 pt-[24px]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 w-fit text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-muted-foreground">Product Designer</span>
          </motion.div>

          <h1 className="text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] font-bold tracking-tight leading-[56.66px] sm:leading-[73.94px] md:leading-[82.1px]">
            <span className="sr-only">hello i'm, Aakriti Thakur</span>
            <span aria-hidden="true">
              <span className="relative inline-block text-[44px] sm:text-[60px] md:text-[72px]">
                <span className="invisible">hello i'm,</span>
                <span className="absolute left-0 top-0 whitespace-nowrap">
                  {typed[0]}
                  {activeLine === 0 && <span className="hero-caret" />}
                </span>
              </span>
              <br />
              <span className="relative inline-block">
                <span className="invisible">Aakriti</span>
                <span className="absolute left-0 top-0 whitespace-nowrap">
                  {typed[1]}
                  {activeLine === 1 && <span className="hero-caret" />}
                </span>
              </span>
              <br />
              <span className="relative inline-block text-muted-foreground/60">
                <span className="invisible">Thakur</span>
                <span className="absolute left-0 top-0 whitespace-nowrap">
                  {typed[2]}
                  {activeLine === 2 && <span className="hero-caret" />}
                </span>
              </span>
            </span>
            <span className={`inline-flex items-center ml-2 md:ml-3 align-middle gap-2 md:gap-3 transition-opacity duration-500 ${typingDone ? "opacity-100" : "opacity-0"}`}>
              <span className="text-3xl sm:text-4xl md:text-5xl wave-hand" role="img" aria-label="waving hand">👋</span>
              <a href="#about" aria-label="Go to More About Me section" className="inline-block">
                <ArrowUpRight className="inline-block w-7 h-7 md:w-10 md:h-10 text-muted-foreground/40 hover:text-foreground transition-colors cursor-pointer" />
              </a>
            </span>
          </h1>

          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Designing AI-powered products and data-driven experiences that turn complexity into clarity.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
            <a href="#work" className="border border-border rounded-full px-5 sm:px-6 py-3 text-foreground hover:bg-secondary/80 transition-all duration-300 text-sm font-medium">
              See All Projects
            </a>
            <a
              href="/Aakriti_Thakur_Resume.pdf"
              download="Aakriti_Thakur_Resume.pdf"
              className="bg-foreground text-background rounded-full px-5 sm:px-6 py-3 hover:bg-foreground/90 transition-all duration-300 text-sm font-medium"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative" style={{ perspective: "1200px" }}>
            {/* Decorative capsule outline behind image */}
            <div
              className="absolute -inset-5 rounded-[500px] border border-white/50 bg-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating jellyfish — left border */}
            <MiniJelly side="left" />
            {/* Floating jellyfish — right border */}
            <MiniJelly side="right" />

            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[334px] md:w-[270px] lg:w-[334px] aspect-[3/4] rounded-[500px] overflow-hidden border border-border/50 shadow-[var(--shadow-glow)]"
            >
              <img
                src={portraitImg}
                alt="Aakriti Thakur"
                className="w-full h-full object-cover"
                width={640}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
