import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import slide1Asset from "@/assets/docbot-slide1.png.asset.json";
import slide2Asset from "@/assets/docbot-slide2.png.asset.json";
import slide3Asset from "@/assets/docbot-slide3.png.asset.json";
import slide4Asset from "@/assets/docbot-slide4.png.asset.json";
import slide5Asset from "@/assets/docbot-slide5.png.asset.json";
import slide6Asset from "@/assets/docbot-slide6.png.asset.json";
import slide7Asset from "@/assets/docbot-slide7.png.asset.json";
import slide8Asset from "@/assets/docbot-slide8.png.asset.json";
import slide9Asset from "@/assets/docbot-slide9.png.asset.json";
import slide10Asset from "@/assets/docbot-slide10.png.asset.json";
import slide10bAsset from "@/assets/docbot-slide16.png.asset.json";
import slide10cAsset from "@/assets/docbot-slide17.png.asset.json";
import slide11Asset from "@/assets/docbot-slide11.png.asset.json";
import slide12Asset from "@/assets/docbot-slide12.png.asset.json";
import slide13Asset from "@/assets/docbot-slide13.png.asset.json";
import slide14Asset from "@/assets/docbot-slide14.png.asset.json";
import slide15Asset from "@/assets/docbot-slide15.png.asset.json";

const details = [
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "Healthcare" },
  { label: "Platform", value: "Mobile App design" },
];

const galleryImages = [
  slide1Asset.url, slide2Asset.url, slide3Asset.url, slide4Asset.url, slide5Asset.url, slide6Asset.url, slide7Asset.url, slide8Asset.url, slide9Asset.url, slide10Asset.url, slide10bAsset.url, slide10cAsset.url, slide11Asset.url, slide12Asset.url, slide13Asset.url, slide14Asset.url, slide15Asset.url,
];

const ProjectM2T = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-0 sm:px-6 py-12">
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
            Docbot is an innovative healthcare platform designed to make remote care more accessible for the people.
          </p>
        </motion.div>

        {/* Project Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-1 mb-12"
        >
          {details.map((d) => (
            <div key={d.label}>
              <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="text-foreground font-medium">{d.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vertical Slides — full width, no black side space */}
      <div className="w-full px-0 sm:px-6 pb-12">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full sm:w-auto">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden border border-border/30 bg-card/30"
            >
              <img
                src={src}
                alt={`DOCBOT project screenshot ${i + 1}`}
                className="block w-full h-auto object-cover"
                loading="lazy"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectM2T;
