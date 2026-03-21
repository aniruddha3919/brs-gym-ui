"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whatsappIcon from "../../assets/whatsappicon.png";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/919748882498"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[90] flex items-center justify-center p-0 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-transparent"
          aria-label="Contact us on WhatsApp"
        >
          <img 
            src={whatsappIcon.src} 
            alt="WhatsApp" 
            className="w-16 h-16 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_15px_rgba(37,211,102,0.5)]" 
          />
          
          {/* Animated pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#25D366]"
            animate={{
              scale: [1, 1.4, 1.4],
              opacity: [0.6, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
