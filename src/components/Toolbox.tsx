import { motion } from "framer-motion";

const tools = [
  "Figma", "Adobe Illustrator", "Lovable", "After Effects",
  "FigJam", "Canva", "Trello", "Hotjar", "Vercel",
];

const Toolbox = () => (
  <section className="py-6 px-4 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card py-6 px-8 overflow-hidden"
    >
      <h2 className="section-heading mb-6">TOOLBOX</h2>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="pill-tag"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Toolbox;
