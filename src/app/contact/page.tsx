import { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { colors } from "@/lib/theme";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact – BRS Gym Kolkata",
    description:
        "Get in touch with BRS Gym. Best gym in Hatiara and Baguiati for world-class equipment, expert trainers and a vibrant fitness community.",
    keywords: [
        "BRS Gym",
        "best gym in Hatiara",
        "best gym in Baguiati",
        "contact",
    ],
};

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className={`${colors.background} min-h-screen py-16`}>
                <section className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl font-display font-bold text-center mb-8">
                        Contact Us
                    </h1>

                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                        <p className="text-lg text-foreground/90 mb-4">
                            We'd love to hear from you! Whether you have questions about our
                            offerings, want to know why we are the <span className="font-bold">best gym in Hatiara</span> and <span className="font-bold">best gym in Baguiati</span>, or need help with
                            membership, drop us a line using any of the options below.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1" />
                                <span>
                                    <strong>Address:</strong> 123 Fitness Avenue, Hatiara, Kolkata
                                    – 700157
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-primary mt-1" />
                                <span>
                                    <strong>Phone:</strong> <a href="tel:+919876543210" className="underline">+91 98765 43210</a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-primary mt-1" />
                                <span>
                                    <strong>Email:</strong>{' '}
                                    <a href="mailto:info@brsgym.com" className="underline">
                                        info@brsgym.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
