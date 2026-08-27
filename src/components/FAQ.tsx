import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What services do you offer?", a: "I specialize in product design, UX strategy, design systems, and AI dashboard design — creating modern, user-friendly experiences tailored to your needs." },
  { q: "How do I start working with you?", a: "Reach out through the contact form or email. We'll schedule a call to discuss your goals, timeline, and how I can help." },
  { q: "What design tools do you use?", a: "I primarily use Figma for design, along with Hotjar, Google Analytics, and various prototyping tools for research and testing." },
  { q: "How long does a project take?", a: "Timelines vary based on scope. A typical project takes 2-8 weeks from research to final delivery." },
  { q: "Do you provide revisions?", a: "Yes! I believe in iterative design. Each project includes multiple rounds of feedback and revisions." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-heading mb-3">FAQ Section</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Questions, <span className="text-muted-foreground/50">Answers</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Get quick answers to your most pressing questions.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-5 sm:p-5 text-left"
              >
                <span className="text-sm font-medium">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-5 sm:px-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
