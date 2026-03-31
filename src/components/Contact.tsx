import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-32">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto flex flex-col items-center gap-6"
      >
        <h2 className="section-heading">
          Let's build something{" "}
          <span className="gradient-text">impactful</span> together
        </h2>
        <p className="text-muted-foreground">
          Open to product, UX leadership, and design opportunities
        </p>
        <a href="mailto:hello@aakritithakur.com" className="gradient-btn mt-4">
          Get in Touch
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
