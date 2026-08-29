import { motion } from "framer-motion";
import portraitAsset from "@/assets/portrait.jpg.asset.json";
const portraitImg = portraitAsset.url;

const skills = [
  "Product Design", "UX Design", "UI Design", "Figma", "Branding", "Design Systems",
];

const experience: { company: string; year: string; role: string }[] = [];

const About = () => (
  <section id="about" className="py-16 px-0">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          More <span className="text-muted-foreground/50">About Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border/30 relative aspect-[4/5] md:aspect-auto md:h-full"
        >
          <img
            src={portraitImg}
            alt="Aakriti Thakur"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            width={640}
            height={800}
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >

          <div className="glass-card px-4 py-5 sm:p-6 rounded-2xl">
            <p className="text-foreground text-base font-semibold mb-3 sm:text-xl">
              Hi, I'm Aakriti Thakur.<span className="ml-2">👋</span>
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              A Product Designer with 4+ years of experience in AI-powered SaaS, dashboards, and web/mobile applications, focused on simplifying complex workflows and turning AI-driven insights into intuitive user experiences.
              <br />
              <br />
              Currently, I lead UX & Design at Mantras2Transform, driving product direction, building scalable design systems for multiple AI products, and collaborating closely with development & marketing teams.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start bg-foreground text-background rounded-full px-6 py-3 hover:bg-foreground/90 transition-all duration-300 text-sm font-medium"
          >
            Connect Now
          </a>


          {/* Experience list */}
          <div className="space-y-3">
            {experience.map((e) => (
              <div key={e.company} className="flex items-center justify-between glass-card px-5 py-3 rounded-xl">
                <span className="text-sm font-medium">{e.company}</span>
                <span className="text-xs text-muted-foreground">{e.year}</span>
                <span className="text-xs text-muted-foreground">{e.role}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
