import { motion } from "framer-motion";

const items = [
  {
    title: "UX & Design Manager",
    meta: "Jan 2026 – Present",
    points: ["Leading UX across AI platforms", "Managing and mentoring designers", "Driving product vision and UX direction"],
  },
  {
    title: "Senior UI/UX Designer — Zipteams",
    meta: "Mar 2023 – Jan 2025",
    points: ["Founding designer", "Designed AI dashboards", "Built scalable design system"],
  },
  {
    title: "UI/UX Consultant — M2T",
    meta: "Oct 2025 – Dec 2025",
    points: ["Defined UX strategy", "Designed website and dashboard"],
  },
  {
    title: "UI Designer — Net Solutions",
    meta: "Apr 2025 – Sept 2025",
    points: ["Designed marketing assets", "Ensured visual consistency"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-border/60 ml-4 md:ml-8 space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="pl-8 relative"
          >
            {/* Dot */}
            <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background" />
            <p className="text-sm text-primary mb-1">{item.meta}</p>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <ul className="space-y-1">
              {item.points.map((pt) => (
                <li key={pt} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
