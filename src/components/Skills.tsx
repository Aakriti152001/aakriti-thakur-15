import { motion } from "framer-motion";

const skills = [
  "Product Design", "User Research", "Wireframing", "Prototyping",
  "Design Systems", "Design Thinking", "Usability Testing",
  "Data Visualization", "User Flows", "UI/UX Design",
];

const SkillPill = ({ label }: { label: string }) => (
  <span className="pill-tag whitespace-nowrap flex items-center gap-2">
    {label}
    <span className="text-primary">✦</span>
  </span>
);

const Skills = () => (
  <section className="py-6 px-4 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card py-4 overflow-hidden"
    >
      <div className="marquee-track">
        {/* Duplicate skills for seamless loop */}
        {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
          <SkillPill key={`${s}-${i}`} label={s} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
