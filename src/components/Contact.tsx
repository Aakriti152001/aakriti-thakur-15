import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-6 px-4 pb-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card p-8 md:p-10 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
        Let's build something{" "}
        <span className="gradient-text">impactful</span> together
      </h2>
      <p className="text-muted-foreground mb-6">
        Open to product, UX leadership, and design opportunities
      </p>
      <a href="mailto:hello@aakritithakur.com" className="gradient-btn inline-block">
        Get in Touch
      </a>
    </motion.div>
  </section>
);

export default Contact;
