import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google"; // Updated import
import "./globals.css";
import Providers from "./providers";
import { SplashCursor } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brsgym.in"),
  title: "BRS Gym | Best Gym in Hatiara & Noapara | Fitness Meets Results",
  description: "Join BRS Gym, the best gym in Hatiara, Noapara, Dashdrone, and Jyangra. Premium equipment, expert trainers, and a results-driven atmosphere for weight loss, bodybuilding, and fitness.",
  keywords: ["Best gym in Hatiara", "Gym in Hatiara", "Best gym in Noapara", "Best gym in Dashdrone", "Best gym in Jyangra", "Fitness center Hatiara", "BRS Gym Kolkata", "Unisex gym Hatiara", "Bodybuilding Hatiara", "Weight loss gym Hatiara", "BRS Gym website"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BRS Gym | Best Gym in Hatiara & Noapara",
    description: "Experience next-level training at the best gym in Hatiara. Transform your body with premium equipment and professional guidance.",
    url: "https://www.brsgym.in",
    siteName: "BRS Gym",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "BRS Gym Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRS Gym | Best Gym in Hatiara & Noapara",
    description: "Join BRS Gym, the best gym in Hatiara and Noapara. Premium equipment, expert trainers, and results-driven fitness.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FitnessCenter",
    "@id": "https://www.brsgym.in",
    "name": "BRS Gym",
    "description": "The best gym in Hatiara, Noapara, Dashdrone, and Jyangra offering premium fitness facilities, professional trainers, and specialized workout programs.",
    "url": "https://www.brsgym.in",
    "telephone": "+919748882498",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sulanggari, Hatiara, Arunachal",
      "addressLocality": "Kolkata",
      "postalCode": "700157",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.6105,
      "longitude": 88.4635
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "05:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "07:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/brsgym",
      "https://www.instagram.com/brs_gym_official/"
    ],
    "brand": {
      "@type": "Brand",
      "name": "BRS Gym"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${bebasNeue.variable} antialiased`}
      >
        <SplashCursor />
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
