"use client";

import { motion } from "framer-motion";
import { Dumbbell, Users, Shield, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "WORLD-CLASS EQUIPMENT",
      desc: "State-of-the-art machines and free weights to fuel every workout, from beginners to advanced athletes.",
      glowColor: "primary", // Gold glow
    },
    {
      icon: Users,
      title: "UNISEX GYM",
      desc: "Open to both men and women, providing a safe, comfortable, and empowering environment for everyone to reach their goals.",
      glowColor: "platinum", // Platinum glow
    },
    {
      icon: Shield,
      title: "EXPERT TRAINERS",
      desc: "Certified professionals who craft personalized programs and ensure safe, effective training every session.",
      glowColor: "primary", // Gold glow
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={20} />
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                ABOUT <span className="text-primary">US</span>
              </h2>
              <Sparkles className="text-zinc-400" size={20} />
            </div>
            <p className="text-muted-foreground text-lg font-body">
              Who We Are More than just a gym
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((item, i) => {
              const isPlatinum = item.glowColor === "platinum";
              const glowColorClass = isPlatinum
                ? "rgba(212, 212, 216, 0.4)"
                : "rgba(250, 204, 21, 0.4)";
              const glowColorHover = isPlatinum
                ? "rgba(212, 212, 216, 0.7)"
                : "rgba(250, 204, 21, 0.7)";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Pulsing glow ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${isPlatinum ? 'border-zinc-300' : 'border-primary'} pointer-events-none`}
                    animate={{
                      scale: [1, 1.1, 1.1],
                      opacity: [0.3, 0, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 1,
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.03,
                      boxShadow: `0 20px 50px ${glowColorHover}`,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-br from-card via-background to-card border-2 border-border rounded-2xl p-8 text-center overflow-hidden"
                    style={{
                      boxShadow: `0 10px 30px ${glowColorClass}`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-transparent ${isPlatinum ? 'via-white/5' : 'via-primary/5'} to-transparent`}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 2,
                      }}
                    />

                    {/* Icon container with glow */}
                    <motion.div
                      className={`relative w-20 h-20 ${isPlatinum ? 'bg-gradient-to-br from-zinc-700 to-zinc-800' : 'bg-gradient-to-br from-primary/20 to-primary/10'} rounded-full flex items-center justify-center mx-auto mb-6`}
                      animate={{
                        boxShadow: [
                          `0 0 20px ${glowColorClass}`,
                          `0 0 30px ${glowColorHover}`,
                          `0 0 20px ${glowColorClass}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <item.icon size={32} className={isPlatinum ? 'text-zinc-200' : 'text-primary'} />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`font-display font-bold text-xl text-foreground mb-3 group-hover:${isPlatinum ? 'text-zinc-200' : 'text-primary'} transition-colors relative z-10`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed relative z-10">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Description with animated reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl" />
            <p className="text-center text-foreground/90 font-body text-base md:text-lg leading-relaxed max-w-3xl mx-auto p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 relative z-10">
              Founded with a mission to make premium fitness accessible to everyone in Kolkata, BRS Gym has grown into a thriving community of <span className="text-primary font-bold">700+ dedicated members</span> across two locations. We believe fitness is not a luxury it's a <span className="text-primary font-bold">lifestyle</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
