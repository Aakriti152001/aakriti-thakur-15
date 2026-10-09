import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import orvaaCover from "@/assets/orvaa-cover.png.asset.json";
import orvaaSlide1 from "@/assets/orvaa-project/orvaa-slide-1.png.asset.json";
import orvaaSlide2 from "@/assets/orvaa-project/orvaa-slide-2.png.asset.json";
import orvaaSlide3 from "@/assets/orvaa-project/orvaa-slide-3.png.asset.json";
import orvaaSlide4 from "@/assets/orvaa-project/orvaa-slide-4.png.asset.json";
import orvaa5 from "@/assets/orvaa-project/img5.jpg";
import orvaa6 from "@/assets/orvaa-project/img6.jpg";
import orvaa7 from "@/assets/orvaa-project/img7.jpg";
import orvaa8 from "@/assets/orvaa-project/img8.jpg";
import orvaa9 from "@/assets/orvaa-project/img9.jpg";
import orvaa10 from "@/assets/orvaa-project/img10.jpg";
import orvaa11 from "@/assets/orvaa-project/img11.jpg";
import orvaa12 from "@/assets/orvaa-project/img12.jpg";
import orvaa13 from "@/assets/orvaa-project/img13.jpg";

const caseStudyImages = [
  orvaaSlide4.url,
  orvaa5,
  orvaa6,
  orvaa7,
  orvaa8,
  orvaa9,
  orvaa10,
  orvaa11,
  orvaa12,
  orvaa13,
];


const details = [
  { label: "My Role", value: "Product Designer" },
  { label: "Timeline", value: "4 months" },
  { label: "Platform", value: "Mobile Application" },
];

const ProjectOrvaa = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1076px] mx-auto px-6 py-12">
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
            Orvaa – AI-Powered Healthcare &amp; Wellness
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            An AI-powered platform connecting clinical care, wellness, and medical research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {details.map((d) => (
            <div key={d.label}>
              <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="text-foreground font-medium">{d.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border/30"
        >
          <img
            src={orvaaCover.url}
            alt="Orvaa project cover"
            className="w-full h-auto"
            loading="eager"
          />
        </motion.div>

        <div>
          <div className="overflow-hidden">
            <img
              src={orvaaSlide1.url}
              alt="Orvaa case study section 1"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={orvaaSlide2.url}
              alt="Orvaa case study section 2"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={orvaaSlide3.url}
              alt="Orvaa case study section 3"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          {caseStudyImages.map((src, i) => (
            <div
              key={src}
              className="overflow-hidden"
            >
              <img
                src={src}
                alt={`Orvaa case study section ${i + 4}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectOrvaa;
