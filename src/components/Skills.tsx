import { motion } from "framer-motion";

const skills = [
  "UX Strategy", "Product Design", "User Research", "Interaction Design",
  "Design Systems", "Figma", "Hotjar", "Google Analytics", "ChatGPT", "Gemini",
];

const Skills = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-10"
      >
        Skills & Tools
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="pill-tag"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
