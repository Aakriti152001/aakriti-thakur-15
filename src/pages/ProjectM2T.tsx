import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import slide1Asset from "@/assets/docbot-slide1.png.asset.json";
import slide2Asset from "@/assets/docbot-slide2.png.asset.json";
import slide3Asset from "@/assets/docbot-slide3.png.asset.json";
import img2 from "@/assets/m2t-project/img2.jpg";

import slide4Asset from "@/assets/docbot-slide4.png.asset.json";
import slide5Asset from "@/assets/docbot-slide5.png.asset.json";
import slide6Asset from "@/assets/docbot-slide6.png.asset.json";
import slide7Asset from "@/assets/docbot-slide7.png.asset.json";
import slide8Asset from "@/assets/docbot-slide8.png.asset.json";
import slide9Asset from "@/assets/docbot-slide9.png.asset.json";
import slide10Asset from "@/assets/docbot-slide10.png.asset.json";
import slide11Asset from "@/assets/docbot-slide11.png.asset.json";
import img5 from "@/assets/m2t-project/img5.jpg";
import img6 from "@/assets/m2t-project/img6.jpg";

import img9 from "@/assets/m2t-project/img9.jpg";
import img10 from "@/assets/m2t-project/img10.jpg";
import img11 from "@/assets/m2t-project/img11.jpg";
import img12 from "@/assets/m2t-project/img12.jpg";
import img13 from "@/assets/m2t-project/img13.jpg";
import img14 from "@/assets/m2t-project/img14.jpg";
import img15 from "@/assets/m2t-project/img15.jpg";
import img16 from "@/assets/m2t-project/img16.jpg";
import img17 from "@/assets/m2t-project/img17.jpg";
import img18 from "@/assets/m2t-project/img18.jpg";
import img19 from "@/assets/m2t-project/img19.jpg";
import img20 from "@/assets/m2t-project/img20.jpg";
import img21 from "@/assets/m2t-project/img21.jpg";
import img22 from "@/assets/m2t-project/img22.jpg";
import img23 from "@/assets/m2t-project/img23.jpg";
import img24 from "@/assets/m2t-project/img24.jpg";

const details = [
  { label: "App name / Client", value: "DOCBOT" },
  { label: "My Role", value: "UI/UX Designer" },
  { label: "Industry", value: "Healthcare" },
  { label: "Platform", value: "App design" },
];

const galleryImages = [
  slide1Asset.url, slide2Asset.url, slide3Asset.url, slide4Asset.url, slide5Asset.url, slide6Asset.url, slide7Asset.url, slide8Asset.url, slide9Asset.url, slide10Asset.url, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
  img20, img21, img22, img23, img24,
];

const ProjectM2T = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = galleryImages.length;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + total) % total;
      setDirection(next > index ? 1 : -1);
      setIndex(wrapped);
    },
    [index, total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Go Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </motion.button>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            DOCBOT- Mobile App Design
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Docbot is an innovative healthcare technology company that has developed a AI-powered
            wearable device for smart monitoring of vitals.
          </p>
        </motion.div>

        {/* Project Details Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {details.map((d) => (
            <div key={d.label}>
              <p className="text-sm text-muted-foreground mb-1">{d.label}</p>
              <p className="text-foreground font-medium">{d.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Image Slideshow */}
        <div className="relative">
          <div
            className="relative rounded-2xl overflow-hidden border border-border/30 bg-card/30 select-none"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Project screenshots"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
              <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.img
                  key={index}
                  src={galleryImages[index]}
                  alt={`DOCBOT project screenshot ${index + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                  className="absolute inset-0 w-full h-full object-contain bg-background"
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 hover:bg-background border border-border/50 backdrop-blur flex items-center justify-center text-foreground transition-all hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/70 hover:bg-background border border-border/50 backdrop-blur flex items-center justify-center text-foreground transition-all hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs bg-background/70 border border-border/50 backdrop-blur text-muted-foreground">
              {index + 1} / {total}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 w-full rounded-full bg-border/40 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={false}
              animate={{ width: `${((index + 1) / total) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Dots */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectM2T;
