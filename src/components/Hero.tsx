import { motion } from "framer-motion";
import portraitImg from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="pt-28 pb-0 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass-card p-8 md:p-10"
      >
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-border/50 shrink-0">
            <img
              src={portraitImg}
              alt="Aakriti Thakur"
              className="w-full h-full object-cover"
              width={112}
              height={112}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Aakriti Thakur | UX & Design
            </h1>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Product-focused designer with 4+ years in AI-powered SaaS, dashboards
              and web/mobile apps. Skilled at simplifying complex workflows into
              intuitive experiences, with strengths in UX strategy, research,
              interaction design and scalable design systems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
