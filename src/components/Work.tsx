import { motion } from "framer-motion";

const projects = [
  { title: "M2T Website", description: "UX strategy and website design improving clarity and usability.", tag: "UX Strategy" },
  { title: "AI Job Matcher Dashboard", description: "Simplified workflows and enhanced user experience.", tag: "Dashboard UX" },
  { title: "AI SaaS Dashboards", description: "Turned complex analytics into actionable insights.", tag: "Data Visualization" },
  { title: "Fundin Bharat Platform", description: "FinTech dashboard and web experience focused on trust.", tag: "FinTech" },
];

const Work = () => (
  <section id="work" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading mb-12"
      >
        Featured Work
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8 flex flex-col gap-4"
          >
            <span className="pill-tag w-fit">{p.tag}</span>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
