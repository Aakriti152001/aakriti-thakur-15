import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import orvaaCover from "@/assets/orvaa-cover.png.asset.json";

const details = [
  { label: "My Role", value: "Product Designer" },
  { label: "Timeline", value: "In Progress" },
  { label: "Platform", value: "Web & Mobile" },
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
      </div>
    </div>
  );
};

export default ProjectOrvaa;
