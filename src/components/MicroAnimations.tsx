import { motion } from "framer-motion";
import rotationClip from "@/assets/micro-rotation-1.mov.asset.json";
import orderClip from "@/assets/micro-interactive-order-1.mp4.asset.json";
import keyboardClip from "@/assets/micro-3d-keyboard-1.mp4.asset.json";
import fruitJuiceClip1 from "@/assets/micro-fruit-juice-1.mp4.asset.json";
import fruitJuiceClip2 from "@/assets/micro-fruit-juice-2.mp4.asset.json";

interface MicroAnimation {
  video: string;
  landscape?: boolean;
}

const animations: MicroAnimation[] = [
  { video: keyboardClip.url },
  { video: rotationClip.url },
  { video: orderClip.url },
  { video: fruitJuiceClip1.url, landscape: true },
  { video: fruitJuiceClip2.url, landscape: true },
  { video: "" },
];


const MicroAnimations = () => {
  return (
    <section id="micro-animations" className="py-16 px-0 overflow-hidden">
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
      </div>

      {/* Horizontal scroll row — extends full width, 4 cards visible + 5th peeking */}
      <div className="relative">
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth px-4 sm:px-6 md:px-[max(24px,calc((100vw-1152px)/2))] pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {animations.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative shrink-0 ${a.landscape ? "w-[calc((100vw-48px)/2.4)] sm:w-[calc((100vw-64px)/2.3)] md:w-[calc((100vw-96px)/2.25)] aspect-video" : "w-[calc((100vw-48px)/4.5)] sm:w-[calc((100vw-64px)/4.2)] md:w-[calc((100vw-96px)/4.15)] aspect-[3/4]"} rounded-2xl overflow-hidden border border-border/30 bg-card/40 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10`}
            >
              {a.video ? (
                <video
                  src={a.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full ${a.landscape ? "object-contain" : "object-cover"}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-muted-foreground/30 text-sm">
                    Clip coming soon
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAnimations;
