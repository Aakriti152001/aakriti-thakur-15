import { motion } from "framer-motion";

const items = [
  {
    title: "General Manager – UX & Design",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Jan 2026 – Present",
    points: [
      "Leading UX strategy across multiple AI platforms",
      "Managing and mentoring design team",
      "Establishing scalable design systems",
    ],
  },
  {
    title: "UI/UX Consultant",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Oct 2025 – Dec 2025",
    points: [
      "Founded design function from the ground up",
      "Defined UX strategy for M2T website",
      "Redesigned AI Job Matcher dashboard",
    ],
  },
  {
    title: "UI Designer",
    company: "Net Solutions",
    meta: "Apr 2025 – Sept 2025",
    points: [
      "Designed marketing and social media assets",
      "Ensured visual consistency across brand",
    ],
  },
  {
    title: "Senior UI/UX Designer",
    company: "Zipteams",
    meta: "Mar 2023 – Jan 2025",
    points: [
      "Founding designer, owned end-to-end design",
      "Designed AI-powered dashboards",
      "Built scalable design system",
    ],
  },
];

// Subtle scattered rotation per card, straightens on hover
const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
const offsets = ["md:-translate-y-2", "md:translate-y-3", "md:-translate-y-1", "md:translate-y-2"];

const Experience = () => (
  <section id="experience" className="py-16 px-0 sm:px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Career path</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Work <span className="text-muted-foreground/50">Experience</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:py-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title + item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative px-4 py-5 sm:p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 transition-all duration-500 ease-out transform-gpu will-change-transform ${rotations[i % rotations.length]} ${offsets[i % offsets.length]} hover:rotate-0 hover:translate-y-0 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_hsla(160,100%,50%,0.25)] hover:z-10`}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs text-muted-foreground">{item.meta}</p>
              <div>
                <h3 className="text-base font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  at <span className="text-foreground/80">{item.company}</span>
                </p>
                <ul className="space-y-1.5">
                  {item.points.map((pt) => (
                    <li key={pt} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
