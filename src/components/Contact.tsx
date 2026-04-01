import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-16 px-4 pb-24">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Let's Connect</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Let's Grow <span className="text-muted-foreground/50">Together</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-hover p-8 rounded-2xl"
        >
          <h3 className="text-lg font-bold mb-2">UX & Product Design</h3>
          <p className="text-muted-foreground text-sm mb-4">
            End-to-end product design for SaaS platforms, AI dashboards, and web/mobile applications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card-hover p-8 rounded-2xl"
        >
          <h3 className="text-lg font-bold mb-2">Design Leadership</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Building design teams, defining UX strategy, and driving product vision across organizations.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-3 justify-center"
      >
        <a href="#work" className="border border-border rounded-full px-5 py-2.5 text-sm text-foreground hover:bg-secondary/80 transition-all">
          See All Projects
        </a>
        <a href="mailto:hello@aakritithakur.com" className="bg-foreground text-background rounded-full px-5 py-2.5 text-sm hover:bg-foreground/90 transition-all">
          Get Started Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
