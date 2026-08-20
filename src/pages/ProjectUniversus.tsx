import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "@/assets/universus-hero-1.png.asset.json";
import overviewImg from "@/assets/universus-overview.png.asset.json";
import challengesImg from "@/assets/universus-research-insights.png.asset.json";
import researchInsightsImg from "@/assets/universus-research-insights-1.webp.asset.json";
import researchInsights2Img from "@/assets/universus-research-insights-2.webp.asset.json";
import userJourneyImg from "@/assets/universus-user-journey.webp.asset.json";
import userFlowImg from "@/assets/universus-user-flow.webp.asset.json";
import wireframesImg from "@/assets/universus-wireframes.webp.asset.json";
import styleGuideImg from "@/assets/universus-style-guide.webp.asset.json";
import finalDesigns1Img from "@/assets/universus-final-designs-1.webp.asset.json";
import finalDesigns2Img from "@/assets/universus-final-designs-2.png.asset.json";
import finalDesigns3Img from "@/assets/universus-final-designs-3.webp.asset.json";
import finalDesigns4Img from "@/assets/universus-final-designs-4.webp.asset.json";
import finalDesigns5Img from "@/assets/universus-final-designs-5.png.asset.json";
import finalDesigns6Img from "@/assets/universus-final-designs-6.png.asset.json";
import finalDesigns7Img from "@/assets/universus-final-designs-7.png.asset.json";
import finalDesigns8Img from "@/assets/universus-final-designs-8.png.asset.json";

const details = [
  { label: "Client", value: "Universus" },
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "Customer Care" },
  { label: "Platform", value: "Web App" },
];

const galleryImages = [heroImg.url, overviewImg.url, challengesImg.url, researchInsightsImg.url, researchInsights2Img.url, userJourneyImg.url, userFlowImg.url, wireframesImg.url, styleGuideImg.url, finalDesigns1Img.url, finalDesigns2Img.url, finalDesigns3Img.url, finalDesigns4Img.url, finalDesigns5Img.url, finalDesigns6Img.url, finalDesigns7Img.url, finalDesigns8Img.url];

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
