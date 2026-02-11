"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BranchesSection from "@/components/BranchesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SocialProofSection />
        <BranchesSection />
        <AboutSection />
        <GallerySection />
        <Footer />
      </div>
    </>
  );
}
