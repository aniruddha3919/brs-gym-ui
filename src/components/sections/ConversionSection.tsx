"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ConversionSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message with form data
    const message = `Hi, I'm ${name}. My phone number is ${phone}. I'm interested in joining BRS Gym!`;
    window.open(`https://wa.me/919748882498?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-2">
            YOUR <span className="text-primary">JOURNEY</span> STARTS NOW
          </h2>
          <p className="text-muted-foreground font-body mb-2">
            Start your journey today — No excuses left
          </p>
          <p className="text-foreground/70 font-body text-sm mb-8">
            Drop your details and we'll get you started with a free trial session.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-sm px-4 py-3.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-card border border-border rounded-sm px-4 py-3.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-body font-bold text-base px-6 py-4 rounded-sm uppercase tracking-wider hover:brightness-110 transition-all hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2"
              >
                <Send size={18} /> Book Free Trial
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-primary/30 rounded-lg p-8"
            >
              <p className="text-primary font-display text-2xl mb-2">THANK YOU!</p>
              <p className="text-foreground/80 font-body text-sm">
                We'll reach out to you shortly. See you at the gym! 💪
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionSection;
