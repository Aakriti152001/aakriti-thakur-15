import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImg from "@/assets/fundin-dashboard-project/hero.jpg";
import img2 from "@/assets/fundin-dashboard-project/img2.jpg";
import img3 from "@/assets/fundin-dashboard-project/img3.jpg";
import img4 from "@/assets/fundin-dashboard-project/img4.jpg";
import img5 from "@/assets/fundin-dashboard-project/img5.jpg";
import img6 from "@/assets/fundin-dashboard-project/img6.jpg";
import img7 from "@/assets/fundin-dashboard-project/img7.jpg";
import img8 from "@/assets/fundin-dashboard-project/img8.jpg";
import img9 from "@/assets/fundin-dashboard-project/img9.jpg";
import img10 from "@/assets/fundin-dashboard-project/img10.jpg";
import img11 from "@/assets/fundin-dashboard-project/img11.jpg";
import img12 from "@/assets/fundin-dashboard-project/img12.jpg";

const details = [
  { label: "App name / Client", value: "Fundin Bharat" },
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "FinTech" },
  { label: "Platform", value: "Dashboard" },
];

const sections = [
  { title: null, images: [heroImg, img2] },
  { title: "LOW-FIDELITY WIREFRAMES", images: [img3, img4, img5, img6, img7] },
  { title: "VISUAL DESIGNS", images: [img8, img9, img10, img11, img12] },
];

const ProjectFundinDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
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
            Fundin Bharat - Dashboard Design
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Fundin Bharat empowers traders by removing financial barriers and providing a risk-free space to grow.
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

        <div className="flex flex-col gap-10">
          {sections.map((section, si) => (
            <div key={si} className="flex flex-col gap-5">
              {section.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl font-bold tracking-tight"
                >
                  {section.title}
                </motion.h2>
              )}
              {section.images.map((src, i) => (
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
                    alt={`Fundin Bharat Dashboard screenshot ${si}-${i + 1}`}
                    className="w-full h-auto"
                    loading={si === 0 && i === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFundinDashboard;
