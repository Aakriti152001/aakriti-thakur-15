import { motion } from "framer-motion";

const items = [
  {
    title: "General Manager – UX & Design",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Jan 2026 – Present",
    description:
      "Leading UX strategy across multiple AI platforms while mentoring the design team and establishing scalable design systems.",
    highlights: [
      "Drive end-to-end UX vision across products",
      "Mentor designers & run design critiques",
      "Build a unified design system at scale",
    ],
  },
  {
    title: "UI/UX Consultant",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Oct 2025 – Dec 2025",
    description:
      "Founded the design function from the ground up. Defined UX strategy for the M2T website and redesigned the AI Job Matcher dashboard.",
    highlights: [
      "Set up the design function from scratch",
      "Shipped M2T marketing site UX",
      "Redesigned AI Job Matcher dashboard",
    ],
  },
  {
    title: "UI Designer",
    company: "Net Solutions",
    meta: "Apr 2025 – Sept 2025",
    description:
      "Designed marketing and social media assets while ensuring visual consistency across the brand identity.",
    highlights: [
      "Crafted marketing & campaign visuals",
      "Owned social media design system",
      "Maintained brand consistency end-to-end",
    ],
  },
  {
    title: "Senior UI/UX Designer",
    company: "Zipteams",
    meta: "Mar 2023 – Jan 2025",
    description:
      "Founding designer — owned end-to-end design. Crafted AI-powered dashboards and built a scalable design system from scratch.",
    highlights: [
      "Founding designer, end-to-end ownership",
      "Designed AI-powered sales dashboards",
      "Built a scalable design system 0 → 1",
    ],
  },
];

// Zig-zag layout: alternating tilt + vertical offset (up/down/up/down)
// Full class names so Tailwind JIT picks them up.
const cardTransforms = [
  "md:-rotate-[7deg] md:-translate-y-6",   // up
  "md:rotate-[6deg] md:translate-y-8",     // down
  "md:-rotate-[5deg] md:-translate-y-8",   // up
  "md:rotate-[7deg] md:translate-y-6",     // down
];

const Experience = () => (
  <section id="experience" className="py-20 px-0 sm:px-6 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Work <span className="text-muted-foreground/50">Experience</span>
        </h2>
      </motion.div>

      {/* Mobile: stacked grid. Desktop: horizontal overlapping fan */}
      <div className="md:hidden grid gap-4 px-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title + item.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-5"
          >
            <p className="text-xs text-muted-foreground mb-2">{item.meta}</p>
            <h3 className="text-base font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              at <span className="text-foreground/80">{item.company}</span>
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground flex gap-2 leading-snug">
                <span className="text-primary leading-snug">•</span>
                <span className="flex-1">{item.description}</span>
              </li>
              {item.highlights.map((h) => (
                <li key={h} className="text-sm text-muted-foreground flex gap-2 leading-snug">
                  <span className="text-primary leading-snug">•</span>
                  <span className="flex-1">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:flex justify-center items-stretch px-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title + item.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            style={{ marginLeft: i === 0 ? 0 : "-1.5rem", zIndex: items.length - i }}
            className={`group relative w-[280px] flex flex-col p-6 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl transition-all duration-500 ease-out transform-gpu will-change-transform ${cardTransforms[i % cardTransforms.length]} hover:!rotate-0 hover:!translate-y-0 hover:scale-105 hover:border-primary/50 hover:shadow-[0_25px_70px_-15px_hsla(160,100%,50%,0.4)] hover:!z-30`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4 gap-3">
                <h3 className="text-sm font-bold text-primary leading-tight">
                  {item.company}
                </h3>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap pt-0.5">
                  {item.meta}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-3 leading-tight text-foreground min-h-[3.5rem]">
                {item.title}
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground/90 flex gap-2 leading-snug">
                  <span className="text-primary leading-snug">•</span>
                  <span className="flex-1">{item.description}</span>
                </li>
                {item.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground/90 flex gap-2 leading-snug">
                    <span className="text-primary leading-snug">•</span>
                    <span className="flex-1">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
