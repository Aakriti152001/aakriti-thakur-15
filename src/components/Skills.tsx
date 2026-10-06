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
  <section className="pb-[28px] pt-0 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden py-4"
      >
        <div className="marquee-track">
          {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
            <SkillPill key={`${s}-${i}`} label={s} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
