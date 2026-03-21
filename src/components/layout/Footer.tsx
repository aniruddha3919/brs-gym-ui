"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, Facebook, Sparkles } from "lucide-react";
import Link from "next/link";
import { colors } from "@/lib/theme";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Reviews", href: "#social-proof" },
    { label: "Branches", href: "#branches" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "/contact" },
    
  ];

  return (
    <footer className="relative bg-gradient-to-b from-card to-black border-t border-border/50 py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Social Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Sparkles className={colors.primary} size={18} />
              <h3 className={`font-display font-bold text-2xl ${colors.primary}`}>BRS GYM</h3>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/brs_gym_official/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-muted-foreground hover:${colors.primary} transition-colors`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/brsgym"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex flex-wrap justify-center gap-4 my-6"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${colors.foreground}/70 hover:${colors.primary} transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Copyright & Credits - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground/60 font-body text-xs mb-1">
              © {new Date().getFullYear()} BRS Gym. All rights reserved.
            </p>
            <p className="text-white text-muted-foreground/40 font-body text-[10px] flex items-center justify-center md:justify-end gap-1">
              Developed & maintained by <a href="https://www.moofy.in" target="_blank" rel="noopener noreferrer" className={`${colors.primary}/80 hover:${colors.primary} font-bold transition-all duration-300`}>Moofy.in</a>
            </p>
          </motion.div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
