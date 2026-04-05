"use client";

import { Navbar, Footer, LoadingScreen } from "@/components/layout";
import {
  HeroSection,
  SocialProofSection,
  BranchesSection,
  PricingSection,
  AboutSection,
  GallerySection,
  OpeningHoursSection,
} from "@/components/sections";
import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SocialProofSection />
        <BranchesSection />
        <PricingSection />
        <AboutSection />
        <GallerySection />
        <OpeningHoursSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
