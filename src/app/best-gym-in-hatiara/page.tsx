import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { colors } from "@/lib/theme";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Gym in Hatiara – BRS Gym",
    description:
        "Discover why BRS Gym is the best gym in Hatiara and Baguiati. Top equipment, expert trainers, and a community that motivates.",
    keywords: [
        "best gym in Hatiara",
        "best gym in Baguiati",
        "BRS Gym",
        "gyms in Kolkata",
    ],
};

export default function BestGymInHatiara() {
    return (
        <>
            <Navbar />
            <main className={`${colors.background} min-h-screen py-16`}>
                <section className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="font-display font-bold text-5xl">
                            Best Gym in Hatiara
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Welcome to&nbsp;
                            <span className="text-primary font-bold">BRS Gym</span>, the
                            premier fitness destination in Hatiara and Baguiati. With world
                            class equipment, certified trainers, and a vibrant community, we
                            lead the way in helping you achieve your goals.
                        </p>
                    </div>

                    <div className="space-y-8 text-foreground/90 font-body">
                        <p>
                            Located in the heart of Hatiara, our state-of-the-art facility is
                            designed for comfort and performance. Whether you are a beginner
                            or an experienced athlete, we have the tools and personnel to
                            support your journey. Our unmatched commitment to quality makes us
                            the <strong>best gym in Hatiara</strong>.
                        </p>
                        <p>
                            Why choose us?
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Modern cardio and strength training equipment</li>
                            <li>Experienced, friendly trainers available 24/7</li>
                            <li>Clean, spacious workout areas and locker rooms</li>
                            <li>Flexible membership plans to suit every budget</li>
                            <li>Regular workshops and fitness challenges</li>
                        </ul>
                        <p>
                            We also serve the Baguiati community, making us the best gym in
                            Baguiati as well. Visit us today and feel the difference.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}