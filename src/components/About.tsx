import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";

const skills = [
  "Product Design", "UX Design", "UI Design", "Figma", "Branding", "Design Systems",
];

const experience: { company: string; year: string; role: string }[] = [];

const About = () => (
  <section id="about" className="py-16 px-4">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-heading mb-3">Expert Designer</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Aakriti Thakur, <span className="text-muted-foreground/50">Your Designer</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg">
          Brief initial presentation of myself and my previous experiences.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border/30 aspect-[3/4] max-h-[500px]"
        >
          <img
            src={portraitImg}
            alt="Aakriti Thakur"
            className="w-full h-full object-cover"
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
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-sm text-muted-foreground">Available for work</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Hello I am Aakriti Thakur</h3>
            <p className="text-muted-foreground text-sm mb-4">
              UX Manager & Product Designer based in India.
            </p>
            <a href="#contact" className="text-sm text-primary hover:underline">
              Connect with me →
            </a>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm Aakriti Thakur, a dedicated Product Designer specializing in
              AI-powered SaaS platforms, dashboards, and web/mobile applications.
              I simplify complex workflows into intuitive experiences that drive
              business growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="pill-tag">{s}</span>
            ))}
          </div>

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
