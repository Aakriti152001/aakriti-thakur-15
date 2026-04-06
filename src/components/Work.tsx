import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import project1 from "@/assets/project-docbot.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "DOCBOT",
    image: project1,
    span: "md:col-span-1 md:row-span-2",
    aspectClass: "aspect-[3/4]",
    link: "/project/docbot",
  },
  {
    title: "AI Job Matcher",
    image: project2,
    span: "md:col-span-1",
    aspectClass: "aspect-[16/10]",
    link: "/product/fundin-bharat-dashboard",
  },
  {
    title: "Fundin Bharat",
    image: project3,
    span: "md:col-span-1",
    aspectClass: "aspect-[16/10]",
    link: "/project/fundin-bharat",
  },
  {
    title: "AI SaaS Dashboards",
    image: project4,
    span: "md:col-span-1",
    aspectClass: "aspect-[16/10]",
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
          <div className="flex gap-3">
            <a href="#work" className="border border-border rounded-full px-5 py-2.5 text-sm text-foreground hover:bg-secondary/80 transition-all duration-300">
              See All Projects
            </a>
            <a href="#contact" className="bg-foreground text-background rounded-full px-5 py-2.5 text-sm hover:bg-foreground/90 transition-all duration-300">
              Contact Now
            </a>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group cursor-pointer relative rounded-2xl overflow-hidden border border-border/30 ${p.span}`}
            {...(p.link ? { onClick: () => navigate(p.link!) } : {})}
          >
            <div className={`${p.aspectClass} w-full`}>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={960}
                height={720}
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50 group-hover:bg-primary group-hover:text-background transition-all duration-300">
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
