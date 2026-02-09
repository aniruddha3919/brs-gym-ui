"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BranchesSection from "@/components/BranchesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import TransitionSequence from "@/components/TransitionSequence";

export default function Home() {
  const [showRest, setShowRest] = useState(false);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SocialProofSection />

        <TransitionSequence onComplete={() => setShowRest(true)} />

        {showRest && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BranchesSection />
            <AboutSection />
            <GallerySection />
            <Footer />
          </motion.div>
        )}
      </div>
    </>
  );
}
