import { motion } from "framer-motion";

const items = [
  {
    title: "General Manager– UX & Design",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Jan 2026 – Present",
    points: [
      "Leading UX strategy and product design across multiple AI platforms (M2T, Oorzaa Wellness, Mitraa, Khoj, JURI AI)",
      "Managing and mentoring a design team, improving design quality, consistency, and delivery speed",
      "Collaborating with leadership and product teams to define product vision, roadmap, and UX direction",
      "Establishing scalable design systems, improving design-to-development efficiency",
      "Driving usability improvements that enhance user engagement and task completion",
    ],
  },
  {
    title: "UI/UX Consultant",
    company: "Mantras2Transform Pvt. Ltd.",
    meta: "Oct 2025 – Dec 2025",
    points: [
      "As the founding designer, built the design function from the ground up and owned the end-to-end design vision",
      "Defined UX strategy and led the design of the M2T website to enhance product clarity and usability",
      "Redesigned the AI Job Matcher dashboard, simplifying complex workflows and significantly improving usability",
      "Partnered with stakeholders to translate business goals into scalable, user-centered solutions",
    ],
  },
  {
    title: "UI Designer – Full Time",
    company: "Net Solutions",
    meta: "Apr 2025 – Sept 2025",
    points: [
      "Designed UI assets for social media campaigns, improving brand visibility and engagement",
      "Collaborated with cross-functional teams to deliver engaging digital assets",
      "Maintained visual consistency across marketing and brand materials",
      "Created content aligned with brand identity and campaign goals",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-6 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card p-8 md:p-10"
    >
      <h2 className="section-heading mb-8">WORK EXPERIENCE</h2>

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="md:w-40 shrink-0">
              <p className="text-xs text-muted-foreground">{item.meta}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                at <span className="text-foreground/80">{item.company}</span>
              </p>
              <ul className="space-y-2">
                {item.points.map((pt) => (
                  <li key={pt} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
