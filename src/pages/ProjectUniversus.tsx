import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "@/assets/universus-hero-1.png.asset.json";
import overviewImg from "@/assets/universus-overview.png.asset.json";
import challengesImg from "@/assets/universus-research-insights.png.asset.json";
import researchInsightsImg from "@/assets/universus-research-insights-1.webp.asset.json";
import img6 from "@/assets/universus-project/img6.jpg";
import img7 from "@/assets/universus-project/img7.jpg";
import img8 from "@/assets/universus-project/img8.jpg";

const details = [
  { label: "Client", value: "Universus" },
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "Customer Care" },
  { label: "Platform", value: "Web App" },
];

const galleryImages = [heroImg.url, overviewImg.url, challengesImg.url, researchInsightsImg.url, img6, img7, img8];

const ProjectUniversus = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Universus - Web App Redesign
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Customer Service Provider
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {details.map((d) => (
            <div key={d.label}>
              <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="text-foreground font-medium">{d.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col gap-5">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-border/30"
            >
              <img
                src={src}
                alt={`Universus project screenshot ${i + 1}`}
                className="w-full h-auto"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectUniversus;
