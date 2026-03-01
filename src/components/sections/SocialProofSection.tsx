"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const videoPlaceholders = [
  {
    title: "Transformation 1",
    views: "Featured",
    youtubeId: "3GQV49cKbmY"
  },
  {
    title: "Transformation 2",
    views: "Featured",
    youtubeId: "LLwxOWJOhzE"
  },
  {
    title: "Transformation 3",
    views: "Featured",
    youtubeId: "7IVEBoNSyAw"
  },
];

const reviews = [
  { name: "Amit D.", text: "Best gym in Kolkata! Trainers are amazing.", rating: 5 },
  { name: "Sneha R.", text: "Life-changing experience. Lost 15 kgs in 4 months!", rating: 5 },
  { name: "Rajesh K.", text: "Equipment quality is world-class. Highly recommend.", rating: 5 },
  { name: "Priyanka M.", text: "Clean, well-maintained, and great community.", rating: 5 },
  { name: "Sourav G.", text: "The trainers push you to be your best. Love it!", rating: 5 },
  { name: "Ankita S.", text: "Best investment I've made for my health.", rating: 5 },
  { name: "Debashis P.", text: "Premium gym at affordable prices. 5 stars!", rating: 5 },
  { name: "Ritika B.", text: "Amazing atmosphere and supportive staff.", rating: 5 },
  { name: "Arjun N.", text: "Great equipment, great trainers, great results.", rating: 5 },
  { name: "Meera T.", text: "Friendly environment. Perfect for beginners too.", rating: 5 },
];

const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Video Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground text-center mb-2">
            OUR <span className="text-primary">RESULTS</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 font-body">
            Past Few years we transaform severel members from 0 to FIT
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoPlaceholders.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-3"
              >
                <div className="relative aspect-[9/16] w-full bg-black rounded-2xl overflow-hidden border border-border/50 shadow-xl group">
                  {/* Clipping Container for YouTube UI */}
                  <div className="absolute inset-0 scale-[1.3] pointer-events-none">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`}
                      className="w-full h-full border-0 transform translate-y-[-5%]"
                      allow="autoplay; encrypted-media"
                    />
                  </div>

                  {/* Overlay to catch clicks if needed or just to darken */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="text-center px-2">
                  <p className="text-foreground font-body font-semibold text-sm">{video.title}</p>
                  <p className="text-primary text-[10px] uppercase tracking-widest font-display">{video.views}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Reviews Scroller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display font-bold text-4xl text-foreground text-center mb-8">
            WHAT OUR <span className="text-primary">MEMBERS</span> SAY
          </h3>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-left w-max">
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 mx-2 bg-card border border-border rounded-sm p-4"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={12} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 text-sm font-body mb-2">"{review.text}"</p>
                  <p className="text-muted-foreground text-xs font-body font-semibold">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
