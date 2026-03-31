import { motion } from "framer-motion";

const items = [
  "Built and scaled design function",
  "Led UX across multiple AI products",
  "Improved usability and workflows",
  "Mentored team and improved delivery",
];

const Leadership = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-10"
      >
        Leadership & Impact
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex items-center gap-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            <p className="text-muted-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;
