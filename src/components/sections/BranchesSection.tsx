"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Star, Wifi, Car, Accessibility, Users, MessageCircle, Navigation, Sparkles } from "lucide-react";

const branches = [
  {
    name: "BRS GYM (Hatiara)",
    address: "Sulanggari, Hatiara, Arunachal, Kolkata, West Bengal 700157",
    phone: "09748882498",
    phoneRaw: "9748882498",
    rating: 4.9,
    reviews: 246,
    features: [
      { icon: Accessibility, label: "Restroom" },
      { icon: Users, label: "Membership-based" },
      { icon: Car, label: "FREE Parking" },
    ],
    mapUrl: "https://maps.app.goo.gl/KEYYwwrokiiagS828",
    glowColor: "platinum", // Platinum glow for first card
  },
  {
    name: "BRS GYM Noapara",
    address: "Green Home Apartment, near Hatiara, Noapara, Sukanta Pally, Roypara, Kolkata, West Bengal 700157",
    phone: "09073274128",
    phoneRaw: "9073274128",
    rating: 4.9,
    reviews: 397,
    features: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Users, label: "Online classes" },
      { icon: Car, label: "Parking available" },
    ],
    mapUrl: "https://maps.app.goo.gl/82g2xEgcyu515pPc6",
    glowColor: "gold", // Gold glow for second card
  },
];

const BranchesSection = () => {
  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-card via-background to-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="text-primary" size={20} />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              CHOOSE YOUR <span className="text-primary">BRANCH</span>
            </h2>
            <Sparkles className="text-zinc-400" size={20} />
          </motion.div>
          <p className="text-muted-foreground font-body text-lg">
            Find the location nearest to you — Two premium spots in Kolkata
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, i) => {
            const isPlatinum = branch.glowColor === "platinum";
            const glowColorClass = isPlatinum
              ? "rgba(212, 212, 216, 0.3)" // Platinum/silver
              : "rgba(250, 204, 21, 0.3)"; // Gold
            const glowColorHover = isPlatinum
              ? "rgba(212, 212, 216, 0.6)"
              : "rgba(250, 204, 21, 0.6)";
            const borderColor = isPlatinum ? "border-zinc-300/40" : "border-primary/40";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative group"
              >
                {/* Pulsing glow ring */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 ${isPlatinum ? 'border-zinc-300' : 'border-primary'} pointer-events-none`}
                  animate={{
                    scale: [1, 1.05, 1.05],
                    opacity: [0.3, 0, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 1.5,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    boxShadow: `0 20px 60px ${glowColorHover}`,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative bg-gradient-to-br from-background via-card to-background border-2 ${borderColor} rounded-2xl p-8 flex flex-col overflow-hidden`}
                  style={{
                    boxShadow: `0 10px 40px ${glowColorClass}`,
                  }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent ${isPlatinum ? 'via-white/10' : 'via-primary/10'} to-transparent`}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />

                  {/* Header */}
                  <div className="mb-6 relative z-10">
                    <h3 className={`font-display font-bold text-2xl md:text-3xl text-foreground group-hover:${isPlatinum ? 'text-zinc-200' : 'text-primary'} transition-colors mb-2`}>
                      {branch.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">Premium Facility</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6 relative z-10">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          size={14}
                          className={isPlatinum ? "text-zinc-300 fill-zinc-300" : "text-yellow-500 fill-yellow-500"}
                        />
                      ))}
                    </div>
                    <span className="text-foreground font-body font-bold text-sm">{branch.rating}</span>
                    <span className="text-muted-foreground font-body text-xs">({branch.reviews} reviews)</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-4 relative z-10">
                    <MapPin size={18} className={`${isPlatinum ? 'text-zinc-400' : 'text-primary'} mt-0.5 flex-shrink-0`} />
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{branch.address}</p>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:+91${branch.phoneRaw}`}
                    className={`flex items-center gap-3 mb-6 text-foreground hover:${isPlatinum ? 'text-zinc-200' : 'text-primary'} transition-colors relative z-10`}
                  >
                    <Phone size={18} className={isPlatinum ? 'text-zinc-400' : 'text-primary'} />
                    <span className="font-body text-sm font-medium">{branch.phone}</span>
                  </a>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {branch.features.map((f, j) => (
                      <span
                        key={j}
                        className={`flex items-center gap-2 ${isPlatinum ? 'bg-zinc-800/50 text-zinc-200 border border-zinc-600/30' : 'bg-primary/10 text-primary border border-primary/30'} px-3 py-2 rounded-lg text-xs font-body font-medium`}
                      >
                        <f.icon size={14} />
                        {f.label}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto relative z-10">
                    <motion.a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`border-2 ${borderColor} text-foreground font-body text-sm px-6 py-4 rounded-lg uppercase tracking-wider text-center hover:${isPlatinum ? 'border-zinc-300 text-zinc-200' : 'border-primary text-primary'} transition flex items-center justify-center gap-3 w-full shadow-md`}
                    >
                      <Navigation size={18} /> Get Directions
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
