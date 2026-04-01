import { motion } from "framer-motion";

const left = [
  { title: "Skilled Professional", desc: "Gain access to top-tier talent with years of experience, ensuring flawless execution.", positive: true },
  { title: "Future-Ready Designs", desc: "Crafting modern, scalable designs that grow with your business and stay ahead of trends.", positive: true },
  { title: "Client-Centric Collaboration", desc: "Your vision leads the way — I work closely with you to bring ideas to life with precision.", positive: true },
  { title: "Timely Project Tracking", desc: "Stay informed with regular progress updates and timely deliverables.", positive: true },
];

const right = [
  { title: "Amateur Designer", desc: "Lack of experience may result in design inconsistencies and overlooked details.", positive: false },
  { title: "Outdated Concepts", desc: "Stale designs that don't reflect current trends or your evolving brand narrative.", positive: false },
  { title: "Detached Communication", desc: "Lack of collaboration and poor feedback loops can result in misaligned outcomes.", positive: false },
  { title: "Unstructured Work", desc: "Inconsistent timelines and last-minute changes can compromise quality.", positive: false },
];

const WhyMe = () => (
  <section className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Why choose me</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Why me as <span className="text-muted-foreground/50">Design Partner</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-4">
          {left.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          {right.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl opacity-60"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                <h3 className="text-sm font-bold line-through">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyMe;
