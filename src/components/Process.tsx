import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Let's Get In Touch",
    desc: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.",
    step: "Step 1",
  },
  {
    num: "2",
    title: "Understand & Research",
    desc: "I'll dive deep into your users, business goals, and market to create designs grounded in real insights.",
    step: "Step 2",
  },
  {
    num: "3",
    title: "Design & Iterate",
    desc: "I'll craft wireframes, prototypes, and polished designs, iterating with your feedback until it's perfect.",
    step: "Step 3",
  },
  {
    num: "4",
    title: "Deliver & Support",
    desc: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support.",
    step: "Step 4",
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
          Process Is <span className="text-muted-foreground/50">Everything</span>
        </h2>
        <p className="text-muted-foreground mt-3">
          Simple, streamlined process is what gets you results.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8 rounded-2xl flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-foreground/20">{s.num}</span>
              <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">{s.step}</span>
            </div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Process;
