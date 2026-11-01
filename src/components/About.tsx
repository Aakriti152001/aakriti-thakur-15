import { motion, useInView, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import aboutPortraitAsset from "@/assets/about-portrait-2.png.asset.json";
const aboutPortraitImg = aboutPortraitAsset.url;

// One-shot hover tilt targets, defined once at module level (per AGENTS.md rule).
const PORTRAIT_REST = { rotate: 0 };
const PORTRAIT_TILT = { rotate: [0, -10, 9, -5, 0] };
const PORTRAIT_TILT_TRANSITION = { duration: 0.75, ease: "easeInOut" as const };

type Segment = { text: string; bold?: boolean };

const aboutParagraphs: Segment[][] = [
  [
    { text: "I\u2019m a " },
    { text: "product designer", bold: true },
    { text: " with " },
    { text: "5 years", bold: true },
    { text: " of experience, working across B2B SaaS and AI platform particularly in, healthcare, customer conversation, talent acquisition. I enjoy making complex things feel simple and intuitive for user exeperience." },
  ],
  [
    { text: "I\u2019m curious by nature\u2014I like understanding how things work, asking questions, and turning ideas into experiences that feel right." },
  ],
  [
    { text: "Away from the screen, you\u2019ll usually find me sketching, making something with my hands, or trekking\u00a0 that keep me\u00a0 creative." },
  ],
];

const aboutText = aboutParagraphs.map((p) => p.map((s) => s.text).join("")).join("");

const skills = [
  "Product Design", "UX Design", "UI Design", "Figma", "Branding", "Design Systems",
];

const experience: { company: string; year: string; role: string }[] = [];

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const fullText = aboutText;
  const [characterCount, setCharacterCount] = useState(0);
  const [portraitTilt, setPortraitTilt] = useState(false);
  const tiltPortrait = useCallback(() => {
    if (!reduceMotion) setPortraitTilt(true);
  }, [reduceMotion]);
  const resetPortraitTilt = useCallback(() => setPortraitTilt(false), []);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCharacterCount(fullText.length);
      return;
    }

    const timer = window.setInterval(() => {
      setCharacterCount((current) => {
        if (current >= fullText.length) {
          window.clearInterval(timer);
          return current;
        }
        return current + 1;
      });
    }, 12);

    return () => window.clearInterval(timer);
  }, [fullText.length, isInView, reduceMotion]);

  const isTyping = isInView && characterCount < fullText.length;

  const renderParagraphs = (visibleChars: number, withCaret = false) => {
    let remaining = visibleChars;
    const counts = aboutParagraphs.map((segments) =>
      segments.reduce((n, s) => n + s.text.length, 0)
    );
    let lastVisibleIndex = -1;
    let check = visibleChars;
    counts.forEach((len, idx) => {
      if (check > 0) lastVisibleIndex = idx;
      check -= len;
    });
    remaining = visibleChars;
    return aboutParagraphs.map((segments, pIndex) => {
      const paraLen = counts[pIndex];
      const shown = Math.min(Math.max(remaining, 0), paraLen);
      remaining -= paraLen;
      if (shown <= 0) return null;
      let used = 0;
      const showCaret = withCaret && pIndex === lastVisibleIndex;
      return (
        <p key={pIndex} className={pIndex === 0 ? undefined : "mt-11"}>
          {segments.map((seg, i) => {
            const start = used;
            used += seg.text.length;
            const slice = seg.text.slice(0, Math.max(0, shown - start));
            if (!slice) return null;
            return seg.bold ? (
              <span key={i} className="font-bold">
                {slice}
              </span>
            ) : (
              <span key={i} className="text-foreground/[0.72]">{slice}</span>
            );
          })}
          {showCaret && <span className="text-primary animate-pulse">|</span>}
        </p>
      );
    });
  };

  return (
  <section id="about" className="py-[76px] px-0">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          More <span className="text-muted-foreground/50">About Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-2 md:gap-3 items-stretch">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onPointerEnter={tiltPortrait}
          onPointerLeave={resetPortraitTilt}
          className="rounded-2xl overflow-hidden border border-border/30 relative aspect-square md:aspect-square md:h-full w-[calc(100%-100px)] bg-background"
        >
          <motion.img
            src={aboutPortraitImg}
            alt="Aakriti Thakur"
            className="absolute inset-0 w-full h-full object-contain object-center"
            loading="lazy"
            width={1254}
            height={1254}
            animate={portraitTilt ? PORTRAIT_TILT : PORTRAIT_REST}
            transition={portraitTilt ? PORTRAIT_TILT_TRANSITION : { duration: 0 }}
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >

          <div ref={textRef} className="glass-card px-4 py-5 sm:p-6 rounded-2xl">
            <div className="relative">
              <div aria-hidden="true" className="invisible leading-relaxed text-base tracking-[0.5px]">
                {renderParagraphs(fullText.length)}
              </div>
              <div className="absolute inset-0" aria-live="polite">
                <div className="text-foreground leading-relaxed text-base tracking-[0.5px]">
                  {renderParagraphs(characterCount, isTyping)}
                </div>
              </div>
            </div>
          </div>



          {/* Experience list */}
          <div className="space-y-3">
            {experience.map((e) => (
              <div key={e.company} className="flex items-center justify-between glass-card px-5 py-3 rounded-xl">
                <span className="text-sm font-medium">{e.company}</span>
                <span className="text-xs text-muted-foreground">{e.year}</span>
                <span className="text-xs text-muted-foreground">{e.role}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
