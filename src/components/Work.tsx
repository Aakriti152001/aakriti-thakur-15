import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/eab04f18-c9e5-47a5-b75f-c346c0d51007.png";
import project2 from "@/assets/project-ai-job-matcher.png";
import project3 from "@/assets/project-fundin-bharat.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/a8a6c40d-be96-47e3-981a-5071d925b8d5.png";
import project6 from "@/assets/b0cb4673-c0c3-4378-ae9d-2a69b5c2e91e.png";
import project7 from "@/assets/0b103e30-00d5-4bb8-b11a-d9398772db4a.png";
import project8 from "@/assets/e71695fa-9b0e-4e3b-9070-58a4c08d3ddb.png";

const projects = [
  {
    title: "Docbot - Mobile App Design",
    description: "End-to-end UX for a healthcare platform enabling remote care and real-time vitals monitoring.",
    image: project1,
    link: "/project/docbot",
  },
  {
    title: "Fundin Website Design",
    description: "Risk-free trading platform empowering growth without financial barriers",
    image: project3,
    link: "/project/fundin-bharat",
  },
  {
    title: "Fundin Dashboard Design",
    description: "Smart job matching dashboard pairing candidates with relevant opportunities using AI.",
    image: project2,
    link: "/product/fundin-bharat-dashboard",
  },
  {
    title: "GigPot Mobile App Design",
    description: "Data-rich SaaS dashboards designed for clarity, speed, and confident decision-making.",
    image: project4,
    link: "/product/gigpot",
  },
  {
    title: "CryptoLottery- Website Design",
    description: "A playful, trust-forward crypto lottery experience with transparent on-chain mechanics.",
    image: project5,
    link: "/product/crypto-lottery",
  },
  {
    title: "Universus- Dashboard Redesign",
    description: "Web app redesign that simplified complex analytics into actionable, focused insights.",
    image: project6,
    link: "/product/universus",
  },
];
const Work = () => {
  const navigate = useNavigate();
  return (
  <section id="work" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Recent Projects</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Recent <span className="text-muted-foreground/50">Designs</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-border/30 bg-card/40 flex flex-col transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/60"
            {...(p.link ? { onClick: () => navigate(p.link!) } : {})}
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={600}
              />
            </div>
            <div className="p-6 md:p-8 flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="w-11 h-11 shrink-0 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};
export default Work;
