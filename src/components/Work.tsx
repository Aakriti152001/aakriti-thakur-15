import { motion } from "framer-motion";
import docbotImg from "@/assets/project-docbot.jpg";
import fundinImg from "@/assets/project-fundin.jpg";

const projects = [
  {
    title: "DOCBOT- Mobile App Design",
    description: "Docbot is an innovative healthcare technology company that has developed a AI-powered wearable device for smart monitoring of vitals.",
    image: docbotImg,
  },
  {
    title: "Fundin Bharat - Website Design",
    description: "Fundin Bharat empowers traders by removing financial barriers and providing a risk-free space to grow.",
    image: fundinImg,
  },
];

const Work = () => (
  <section id="work" className="py-6 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto glass-card p-8 md:p-10"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading">MY WORKS</h2>
        <span className="text-muted-foreground text-lg">+</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="rounded-xl overflow-hidden mb-4 border border-border/30">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-base font-bold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Work;
