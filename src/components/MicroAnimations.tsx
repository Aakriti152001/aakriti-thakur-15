import { motion } from "framer-motion";

interface MicroAnimation {
  title: string;
  description: string;
  video: string;
}

const animations: MicroAnimation[] = [
  {
    title: "Magnetic Button",
    description: "A button that subtly pulls toward the cursor on hover.",
    video: "",
  },
  {
    title: "Ripple Effect",
    description: "Touch feedback that radiates outward from the tap point.",
    video: "",
  },
  {
    title: "Stagger Reveal",
    description: "List items fade and slide up in sequence on scroll.",
    video: "",
  },
];

const MicroAnimations = () => {
  return (
    <section id="micro-animations" className="py-16 px-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Cool <span className="text-muted-foreground/50">Micro-animations</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {animations.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-border/30 bg-card/40 flex flex-col transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:bg-card/60"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted/30 flex items-center justify-center">
                {a.video ? (
                  <video
                    src={a.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-muted-foreground/40 text-sm">
                    Clip coming soon
                  </span>
                )}
              </div>
              <div className="px-4 py-5 sm:p-6 md:p-8 flex flex-col gap-2 sm:gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  {a.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAnimations;
