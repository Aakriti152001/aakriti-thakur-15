import { motion } from "framer-motion";
import illustratorIcon from "@/assets/tools/illustrator.svg";
import photoshopIcon from "@/assets/tools/photoshop.svg";
import framerIcon from "@/assets/tools/framer.jpg";
import miroIcon from "@/assets/tools/miro.svg";
import splineIcon from "@/assets/tools/spline.svg";

const tools = [
  { name: "Adobe Illustrator", url: illustratorIcon },
  { name: "Lovable", url: "https://lovable.dev/favicon.ico" },
  { name: "Spline", url: splineIcon },
  { name: "Trello", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { name: "Hotjar", url: "https://www.hotjar.com/favicon.ico" },
  { name: "Framer", url: framerIcon },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe Photoshop", url: photoshopIcon },
  { name: "Notion", url: "https://www.notion.so/images/favicon.ico" },
  { name: "Miro", url: miroIcon },
];

const ToolIcon = ({ name, url }: { name: string; url: string }) => (
  <div
    className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-card/60 border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:scale-110"
    title={name}
  >
    <img
      src={url}
      alt={name}
      className="w-8 h-8 md:w-10 md:h-10 object-contain"
      loading="lazy"
    />
  </div>
);

const Tools = () => (
  <section className="py-3 overflow-hidden">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-full border border-border/40 bg-card/40 backdrop-blur-xl py-5 px-4"
      >
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track gap-6 md:gap-8">
          {[...tools, ...tools, ...tools].map((t, i) => (
            <ToolIcon key={`${t.name}-${i}`} name={t.name} url={t.url} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Tools;
