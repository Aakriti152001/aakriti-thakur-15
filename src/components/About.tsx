import { motion } from "framer-motion";

const bullets = [
  "Founding designer experience",
  "UX strategy & product thinking",
  "Design systems & scalability",
  "Cross-functional leadership",
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 md:p-14 max-w-3xl"
      >
        <h2 className="section-heading mb-6">About Me</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm a product-focused designer with 4+ years of experience in
          AI-powered SaaS platforms, dashboards, and web/mobile applications. I
          specialize in simplifying complex workflows into intuitive experiences.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
