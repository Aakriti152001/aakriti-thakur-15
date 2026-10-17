import { motion } from "framer-motion";
import { Star } from "lucide-react";
import pratik from "@/assets/testimonials/pratik.png";
import ravi from "@/assets/testimonials/ravi.png.asset.json";
import shivam from "@/assets/testimonials/shivam.png.asset.json";
import prishiv from "@/assets/testimonials/prishiv.png.asset.json";

const testimonials = [
  {
    text: "Working with Aakriti has been a fantastic experience. She consistently delivered high-quality designs that aligned perfectly with our vision and brand.",
    name: "Pratik Baid",
    company: "Hustle Creatives",
    rating: 5,
    avatar: pratik,
  },
  {
    text: "I've been working with Aakriti across multiple projects. She has been a great communicator and diligent worker who takes efforts to understand requirements.",
    name: "Ravi Baid",
    company: "Alliance Infotech",
    rating: 4.8,
    avatar: ravi.url,
  },
  {
    text: "Collaborating with Aakriti was an excellent experience. Her professionalism and attention to clean, user-friendly design helped realise our app vision.",
    name: "Shivam Tiwari",
    company: "Cynayd Solutions",
    rating: 5,
    avatar: shivam.url,
  },
  {
    text: "A very good UI/UX designer with a strong eye for detail and a user-centric approach. Her creativity and precision result in intuitive designs.",
    name: "Prishiv",
    company: "Freelance Web Developer",
    rating: 5,
    avatar: prishiv.url,
  },
];

const noteStyles = [
  { rotate: -3, offset: "", card: "note-dark", company: "text-muted-foreground", tape: "tape-green", tapeLeft: "50%", tapeRotate: -4 },
  { rotate: -2, offset: "md:-mt-2", card: "note-green", company: "text-muted-foreground", tape: "tape-green", tapeLeft: "50%", tapeRotate: 3 },
  { rotate: -1.5, offset: "md:ml-10", card: "note-dark", company: "text-muted-foreground", tape: "tape-grey", tapeLeft: "32%", tapeRotate: 2 },
  { rotate: 2.5, offset: "", card: "note-teal", company: "text-muted-foreground", tape: "tape-green", tapeLeft: "50%", tapeRotate: 3 },
];

const Testimonials = () => (
  <section id="testimonials" className="py-[76px]">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Client <span className="text-muted-foreground/50">Stories</span>
          </h2>
          <div className="flex gap-3">
            <a href="#work" className="border border-border rounded-full px-5 py-2.5 text-sm text-foreground hover:bg-secondary/80 transition-all">
              See All Projects
            </a>
          </div>
        </div>
      </motion.div>


      {/* Testimonial cards — taped notes */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 pt-6">
        {testimonials.map((t, i) => {
          const s = noteStyles[i];
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
              whileHover={{ rotate: 0, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative ${s.offset}`}
            >
              <span className={`tape ${s.tape}`} style={{ left: s.tapeLeft, transform: `translateX(-50%) rotate(${s.tapeRotate}deg)` }} />
              <div className={`note-card ${s.card} px-6 pt-8 pb-10 sm:px-8`}>
                <div className="flex items-start gap-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 sm:w-20 sm:h-20 object-contain shrink-0" loading="lazy" />
                  <div className="flex-1 pt-3">
                    <p className="text-lg sm:text-xl font-bold">{t.name}</p>
                    <p className={`text-sm sm:text-base ${s.company}`}>{t.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="text-base font-medium">{t.rating}</span>
                  </div>
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed text-base sm:text-lg">“{t.text}”</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Testimonials;
