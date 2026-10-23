import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import orvaaCover from "@/assets/orvaa-cover.png.asset.json";
import zipteamsCover from "@/assets/zipteams-cover.png.asset.json";
import docbotCover from "@/assets/docbot-cover.png.asset.json";
import universusCover from "@/assets/universus-cover.png.asset.json";
import project2 from "@/assets/project-ai-job-matcher.png";
import gigpotCover from "@/assets/project-4.png";
import chaihatiiCover from "@/assets/chaihatii-project/hero.jpg";
import unlockivyCover from "@/assets/unlockivy-project/hero.jpg";

const projects = [
  {
    title: "Orvaa – AI-Powered Healthcare & Wellness",
    description: "An AI-powered platform connecting clinical care, wellness, and medical research.",
    image: orvaaCover.url,
    link: "/product/orvaa",
  },
  {
    title: "Zipteams – AI-Powered Customer Communication Platform",
    description: "Simplifying call analytics and customer communication through intuitive dashboards and workflows.",
    image: zipteamsCover.url,
    link: "https://aicrm.zipteams.com/",
  },
  {
    title: "Universus – Customer Service Dashboard",
    description: "Redesigning customer service workflows for faster, efficient support operations",
    image: universusCover.url,
    link: "/product/universus",
  },
  {
    title: "GIGPOT- Crypto Mobile Application",
    description: "Secure, seamless crypto trading experience built for trust and clarity",
    image: gigpotCover,
    link: "/product/gigpot",
  },
  {
    title: "Docbot - Healthcare Mobile App",
    description: "End-to-end UX for a healthcare platform enabling remote care and real-time vitals monitoring.",
    image: docbotCover.url,
    link: "/project/docbot",
  },
  {
    title: "Fundin Bharat – Trading Dashboard",
    description: "Risk-free trading platform empowering growth without financial barriers",
    image: project2,
    link: "/product/fundin-bharat-dashboard",
    objectPosition: "center 35%",
  },
  {
    title: "Chai Hatti - Logo Design",
    description: "Brand identity and logo design for a tea shop serving signature teas and specialty drinks",
    image: chaihatiiCover,
    link: "/product/chaihatii",
  },
  {
    title: "Unlock Ivy - Logo Design",
    description: "Brand identity and logo design for an admissions consultancy offering scholarships and interview support",
    image: unlockivyCover,
    link: "/product/unlockivy",
  },
];
const Work = () => {
  const navigate = useNavigate();
  return (
  <section id="work" className="py-[76px] px-0">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-muted-foreground/50">Designs</span>
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
            className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-card/30 backdrop-blur-md flex flex-col transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/50"
            {...(p.link
              ? {
                  onClick: () =>
                    p.link!.startsWith("http")
                      ? window.open(p.link!, "_blank", "noopener,noreferrer")
                      : navigate(p.link!),
                }
              : {})}
          >
            <div className="aspect-[16/10] w-full overflow-hidden -mb-[40px]">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[calc(100%-40px)] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                  loading="lazy"
                  width={960}
                  height={600}
                />
              )}
            </div>
            <div className="px-4 py-5 sm:p-6 md:p-8 flex flex-col gap-2 sm:gap-3">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight flex-1 min-w-0">
                  {p.title}
                </h3>
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};
export default Work;
