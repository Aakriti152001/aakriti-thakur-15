import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import JellyfishField from "./JellyfishField";

const EMAIL = "aakritithakur930@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/aakriti-thakur-9b75071a9/";
const RESUME_URL = "/Aakriti_Thakur_Resume.pdf";

const Contact = () => {

  return (
    <section id="contact" className="relative isolate py-24 px-6 pb-32">
      <JellyfishField />
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight mb-6 md:text-6xl"
        >
          Let’s Build Something Impactful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          I'm always open to discussing product, AI, and design — or exploring new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            View LinkedIn
          </a>
          <a
            href={RESUME_URL}
            download="Aakriti_Thakur_Resume.pdf"
            className="inline-flex items-center gap-2 border border-border rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 transition-all"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
