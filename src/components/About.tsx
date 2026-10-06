import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutPortraitAsset from "@/assets/about-portrait.png.asset.json";
const aboutPortraitImg = aboutPortraitAsset.url;

type Segment = { text: string; bold?: boolean };

const aboutSegments: Segment[] = [
  { text: "A " },
  { text: "Product Designer", bold: true },
  { text: " with " },
  { text: "5 years", bold: true },
  {
    text: " of experience in AI-powered SaaS, dashboards, and web/mobile applications, focused on simplifying complex workflows and turning AI-driven insights into intuitive user experiences.\n\nCurrently, I lead UX & Design at Mantras2Transform, driving product direction, building scalable design systems for multiple AI products, and collaborating closely with development & marketing teams.",
  },
];

const aboutText = aboutSegments.map((s) => s.text).join("");

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

  const renderSegments = (visibleChars: number) => {
    let remaining = visibleChars;
    return aboutSegments.map((seg, i) => {
      const slice = seg.text.slice(0, Math.max(0, remaining));
      remaining -= seg.text.length;
      if (!slice) return null;
      return seg.bold ? (
        <span key={i} className="font-bold">
          {slice}
        </span>
      ) : (
        <span key={i} className="text-foreground/[0.84]">{slice}</span>
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
          className="rounded-2xl overflow-hidden border border-border/30 relative aspect-square md:aspect-square md:h-full w-[calc(100%-100px)] bg-background"
        >
          <img
            src={aboutPortraitImg}
            alt="Aakriti Thakur"
            className="absolute inset-0 w-full h-full object-contain object-center"
            loading="lazy"
            width={1254}
            height={1254}
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
              <div aria-hidden="true" className="invisible">
                <p className="leading-relaxed text-base whitespace-pre-line">
                  {renderSegments(fullText.length)}
                </p>
              </div>
              <div className="absolute inset-0" aria-live="polite">
                <p className="text-foreground leading-relaxed text-base whitespace-pre-line">
                  {renderSegments(characterCount)}
                  {isTyping && <span className="text-primary animate-pulse">|</span>}
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="self-start bg-foreground text-background rounded-full px-6 py-3 hover:bg-foreground/90 transition-all duration-300 text-sm font-medium"
          >
            Connect Now
          </a>


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
