import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import rotationClip from "@/assets/micro-rotation-1.mov.asset.json";
import orderClip from "@/assets/micro-interactive-order-1.mp4.asset.json";
import coffeeClip from "@/assets/micro-coffee-shop-1.mp4.asset.json";
import keyboardClip from "@/assets/micro-3d-keyboard-1.mp4.asset.json";
import download3Clip from "@/assets/micro-download-3.mp4.asset.json";
import fruitJuiceClip1 from "@/assets/micro-fruit-juice-1.mp4.asset.json";
import dayNightClip from "@/assets/micro-day-night-1.mp4.asset.json";
import downloadClip from "@/assets/micro-download-1.mp4.asset.json";
import animatedCardClip from "@/assets/micro-animated-card-1.mp4.asset.json";
import interactiveMenuClip from "@/assets/micro-interactive-menu-1.mp4.asset.json";

interface MicroAnimation {
  video: string;
  landscape?: boolean;
  stretch?: boolean;
  aspect?: string;
  portrait?: boolean;
}

const animations: MicroAnimation[] = [
  { video: coffeeClip.url },
  { video: download3Clip.url },
  { video: orderClip.url },
  { video: fruitJuiceClip1.url, landscape: true },
  { video: downloadClip.url, landscape: true, aspect: "12/9" },
  { video: animatedCardClip.url, landscape: true, aspect: "10/9" },
  { video: interactiveMenuClip.url, portrait: true, aspect: "16/16" },
];


const MicroAnimations = () => {
  return (
    <section id="micro-animations" className="py-[76px] px-0 overflow-hidden">
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
          className="flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            "--row-pad": "max(32px, calc((100% - 1152px) / 2 + 32px))",
            paddingInline: "var(--row-pad)",
            scrollPaddingInline: "var(--row-pad)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          } as CSSProperties}
        >
          {animations.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative shrink-0 snap-start ${a.portrait ? "w-[calc((100vw-32px)*0.78)] sm:w-[calc((100vw-64px)/4.2)] md:w-[calc((100vw-96px)/4.15)]" : a.aspect || a.landscape ? "w-[calc((100vw-32px)*0.78)] sm:w-[calc((100vw-64px)/2.3)] md:w-[calc((100vw-96px)/2.25)]" : "w-[calc((100vw-32px)*0.78)] sm:w-[calc((100vw-64px)/4.2)] md:w-[calc((100vw-96px)/4.15)] aspect-[3/4]"} ${a.portrait || (!a.aspect && !a.landscape) ? "" : a.aspect ? "" : "aspect-video"} rounded-2xl overflow-hidden border border-border/30 bg-card/40 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10`}
              style={a.aspect ? { aspectRatio: a.aspect.replace("/", " / ") } : undefined}
            >
              {a.video ? (
                <video
                  src={a.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`w-full h-full ${a.stretch ? "object-fill" : a.landscape ? "object-contain" : "object-cover"}`}
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
