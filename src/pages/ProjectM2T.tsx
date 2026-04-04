import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "@/assets/m2t-project/hero.jpg";
import img2 from "@/assets/m2t-project/img2.jpg";
import img3 from "@/assets/m2t-project/img3.jpg";
import img4 from "@/assets/m2t-project/img4.jpg";
import img5 from "@/assets/m2t-project/img5.jpg";
import img6 from "@/assets/m2t-project/img6.jpg";
import img7 from "@/assets/m2t-project/img7.jpg";
import img8 from "@/assets/m2t-project/img8.jpg";
import img9 from "@/assets/m2t-project/img9.jpg";
import img10 from "@/assets/m2t-project/img10.jpg";

const details = [
  { label: "App name / Client", value: "DOCBOT" },
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "Healthcare" },
  { label: "Platform", value: "App design" },
];

const galleryImages = [heroImg, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ProjectM2T = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Go Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </motion.button>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            DOCBOT- Mobile App Design
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Docbot is an innovative healthcare technology company that has developed a AI-powered
            wearable device for smart monitoring of vitals.
          </p>
        </motion.div>

        {/* Project Details Grid */}
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

        {/* Image Gallery */}
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
                alt={`DOCBOT project screenshot ${i + 1}`}
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

export default ProjectM2T;
