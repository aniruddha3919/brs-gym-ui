"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Sparkles } from "lucide-react";

const OpeningHoursSection = () => {
    const schedule = [
        { day: "Monday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Tuesday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Wednesday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Thursday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Friday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Saturday", hours: "6:00 AM - 11:00 PM", status: "Open" },
        { day: "Sunday", hours: "Closed", status: "Holiday" },
    ];

    return (
        <section id="opening-hours" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-zinc-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="text-primary w-5 h-5" />
                        <span className="text-primary font-display font-medium uppercase tracking-[0.3em] text-xs sm:text-sm">Stay Consistent</span>
                        <Sparkles className="text-primary w-5 h-5" />
                    </div>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                        OPENING <span className="text-primary">HOURS</span>
                    </h2>
                    <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto italic">
                        "The only bad workout is the one that didn't happen." — Plan your session accordingly.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Main Hours Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Clock size={120} className="text-primary" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <Clock className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-foreground">Weekly Schedule</h3>
                                        
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {schedule.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2">
                                            <span className={`font-body font-medium ${item.day === "Sunday" ? "text-muted-foreground/50" : "text-foreground/90"}`}>
                                                {item.day}
                                            </span>
                                            <div className="flex items-center gap-3">
                                                <span className={`font-body text-sm ${item.day === "Sunday" ? "text-red-400" : "text-primary font-semibold"}`}>
                                                    {item.hours}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual/Status Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="bg-gradient-to-br from-primary/20 to-zinc-900 border border-primary/30 rounded-3xl p-8 relative overflow-hidden group">
                                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <Calendar size={180} />
                                </div>
                                <h4 className="text-primary font-display font-bold text-xl mb-4 italic">Pro Tip:</h4>
                                <p className="text-foreground/80 font-body text-lg leading-relaxed relative z-10">
                                    Early morning sessions (6 AM - 8 AM) are the best for focus and energy. Our peak hours are usually 6 PM - 9 PM.
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-border/50 rounded-3xl p-8 flex items-center gap-6 group hover:border-primary/50 transition-colors">
                                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-white/5">
                                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="text-foreground font-display font-bold text-xl">Operational Standard</h4>
                                    <p className="text-muted-foreground font-body text-sm">We maintain strict hygiene and equipment checks daily during non-peak hours.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpeningHoursSection;
