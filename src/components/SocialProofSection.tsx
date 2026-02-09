"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

const videoPlaceholders = [
  { title: "Rahul's 3-Month Transformation", views: "12K views" },
  { title: "Training Day at BRS Gym", views: "8.5K views" },
  { title: "Member Spotlight: Priya", views: "6.2K views" },
  { title: "Strength Training Results", views: "9.1K views" },
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
    <section id="social-proof" className="py-20 bg-background">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videoPlaceholders.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative aspect-[9/16] bg-card rounded-lg overflow-hidden group cursor-pointer border border-border"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-foreground text-xs font-body font-semibold line-clamp-2">{video.title}</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">{video.views}</p>
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
