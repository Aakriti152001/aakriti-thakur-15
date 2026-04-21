import { motion } from "framer-motion";

const tools = [
  { name: "Figma", url: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Adobe Illustrator", url: "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" },
  { name: "Adobe Photoshop", url: "https://www.vectorlogo.zone/logos/adobe_photoshop/adobe_photoshop-icon.svg" },
  { name: "Framer", url: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { name: "Spline", url: "https://avatars.githubusercontent.com/u/77478294?s=200&v=4" },
  { name: "Canva", url: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  { name: "Trello", url: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
  { name: "Notion", url: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" },
  { name: "Miro", url: "https://www.vectorlogo.zone/logos/miro/miro-icon.svg" },
  { name: "Hotjar", url: "https://www.vectorlogo.zone/logos/hotjar/hotjar-icon.svg" },
  { name: "Slack", url: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
  { name: "Lovable", url: "https://lovable.dev/favicon.ico" },
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
  <section className="py-12 px-4 overflow-hidden">
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
