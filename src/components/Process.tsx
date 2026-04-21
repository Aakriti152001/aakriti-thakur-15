import { motion } from "framer-motion";
import { Brain, ShieldAlert, Layers, Blocks } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Making AI Decisions Understandable",
    desc: "Designing outputs users can trust, question, and act on.",
  },
  {
    icon: ShieldAlert,
    title: "Designing for Failure First",
    desc: "Handling uncertainty, incorrect outputs, and edge-case scenarios.",
  },
  {
    icon: Layers,
    title: "Reducing Cognitive Load in Complex Flows",
    desc: "Turning multi-step, data-heavy workflows into clear actions.",
  },
  {
    icon: Blocks,
    title: "Building Systems That Scale",
    desc: "Creating reusable patterns and design systems for consistency and speed.",
  },
];

const Process = () => (
  <section className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">How it works</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          How I Design <span className="text-muted-foreground/50">AI Product</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-8 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default Process;
