"use client";

import { Navbar, Footer, LoadingScreen } from "@/components/layout";
import {
  HeroSection,
  SocialProofSection,
  BranchesSection,
  AboutSection,
  GallerySection,
  OpeningHoursSection,
} from "@/components/sections";

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
        <OpeningHoursSection />
        <Footer />
      </div>
    </>
  );
}
