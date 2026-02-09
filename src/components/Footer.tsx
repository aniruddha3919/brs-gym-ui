"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Facebook, Sparkles } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "Reviews", "Branches", "About", "Gallery", "Contact"];

  return (
    <footer className="relative bg-gradient-to-b from-card via-background to-black border-t border-border/50 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={20} />
              <h3 className="font-display font-bold text-3xl text-primary">BRS GYM</h3>
            </div>
            <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
              Build. Rise. Stronger.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/brs_gym_official/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300"
                aria-label="Instagram"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(250, 204, 21, 0.2)",
                    "0 0 20px rgba(250, 204, 21, 0.4)",
                    "0 0 10px rgba(250, 204, 21, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/brsgym"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-400/30 flex items-center justify-center text-zinc-200 hover:text-white hover:bg-zinc-600 transition-all duration-300"
                aria-label="Facebook"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(212, 212, 216, 0.2)",
                    "0 0 20px rgba(212, 212, 216, 0.4)",
                    "0 0 10px rgba(212, 212, 216, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Hatiara Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <h4 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              HATIARA BRANCH
            </h4>
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                Sulanggari, Hatiara, Arunachal, Kolkata 700157
              </p>
            </div>
            <a
              href="tel:+919748882498"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone size={16} className="text-primary group-hover:animate-pulse" />
              <span className="font-body text-xs">097488 82498</span>
            </a>
          </motion.div>

          {/* Noapara Branch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
          >
            <h4 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              NOAPARA BRANCH
            </h4>
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                Green Home Apartment, Noapara, Kolkata 700157
              </p>
            </div>
            <a
              href="tel:+919073274128"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone size={16} className="text-primary group-hover:animate-pulse" />
              <span className="font-body text-xs">090732 74128</span>
            </a>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-t border-border/30 pt-8"
        >
          {quickLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
              whileHover={{ y: -2, color: "#FACC15" }}
              className="text-muted-foreground hover:text-primary transition-colors font-body text-xs uppercase tracking-wider relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground/50 font-body text-xs">
            © {new Date().getFullYear()} BRS Gym. All rights reserved.
          </p>
          <p className="text-muted-foreground/40 font-body text-[10px] mt-2 flex items-center justify-center gap-1 text-white">
            Developed & maintained by <a href="https://www.moofy.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold transition-all duration-300">Moofy</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
