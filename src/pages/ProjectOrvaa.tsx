import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import orvaaCover from "@/assets/orvaa-cover.png.asset.json";
import orvaaSlide1 from "@/assets/orvaa-project/orvaa-slide-1.png.asset.json";
import orvaaSlide2 from "@/assets/orvaa-project/orvaa-slide-2.png.asset.json";
import orvaaSlide3 from "@/assets/orvaa-project/orvaa-slide-3.png.asset.json";
import orvaaSlide3b from "@/assets/orvaa-project/orvaa-slide-3-2.png.asset.json";
import orvaaSlide4 from "@/assets/orvaa-project/orvaa-slide-4.png.asset.json";
import orvaaSlide6 from "@/assets/orvaa-project/orvaa-slide-6.png.asset.json";
import orvaaSlide7 from "@/assets/orvaa-project/orvaa-slide-7.png.asset.json";
import orvaaSlide8 from "@/assets/orvaa-project/orvaa-slide-8.png.asset.json";
import orvaaSlide9 from "@/assets/orvaa-project/orvaa-slide-9.png.asset.json";
import orvaaSlide10 from "@/assets/orvaa-project/orvaa-slide-10.png.asset.json";
import orvaaSlide11 from "@/assets/orvaa-project/orvaa-slide-11.png.asset.json";
import orvaaSlide12 from "@/assets/orvaa-project/orvaa-slide-12.png.asset.json";
import orvaaSlide13 from "@/assets/orvaa-project/orvaa-slide-13.png.asset.json";
import orvaaSlide14 from "@/assets/orvaa-project/orvaa-slide-14.png.asset.json";
import orvaaSlide15 from "@/assets/orvaa-project/orvaa-slide-15.png.asset.json";
import orvaaSlide16 from "@/assets/orvaa-project/orvaa-slide-16.png.asset.json";
import orvaaSlide17 from "@/assets/orvaa-project/orvaa-slide-17.png.asset.json";
import orvaaSlide18 from "@/assets/orvaa-project/orvaa-slide-18.png.asset.json";
import orvaaSlide19 from "@/assets/orvaa-project/orvaa-slide-19.png.asset.json";
import orvaaSlide20 from "@/assets/orvaa-project/orvaa-slide-20.png.asset.json";
import orvaaSlide21 from "@/assets/orvaa-project/orvaa-slide-21.png.asset.json";
import orvaaSlide22 from "@/assets/orvaa-project/orvaa-slide-22.png.asset.json";
import orvaaSlide23 from "@/assets/orvaa-project/orvaa-slide-23.png.asset.json";
import orvaaSlide24 from "@/assets/orvaa-project/orvaa-slide-24.png.asset.json";
import orvaaSlide25 from "@/assets/orvaa-project/orvaa-slide-25.png.asset.json";

const caseStudyImages = [
  orvaaSlide4.url,
  orvaaSlide6.url,
  orvaaSlide7.url,
  orvaaSlide8.url,
  orvaaSlide9.url,
  orvaaSlide10.url,
  orvaaSlide11.url,
  orvaaSlide12.url,
  orvaaSlide13.url,
  orvaaSlide14.url,
  orvaaSlide15.url,
  orvaaSlide16.url,
  orvaaSlide17.url,
  orvaaSlide18.url,
  orvaaSlide19.url,
  orvaaSlide20.url,
  orvaaSlide21.url,
  orvaaSlide22.url,
  orvaaSlide23.url,
  orvaaSlide24.url,
  orvaaSlide25.url,
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
          <div className="overflow-hidden">
            <img
              src={orvaaSlide3b.url}
              alt="Orvaa case study section 4"
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
                alt={`Orvaa case study section ${i + 5}`}
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
