"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, IndianRupee } from "lucide-react";

const pricingData = [
  {
    branch: "Hatiara",
    glowColor: "platinum",
    registration: 500,
    personalTrainer: 2500,
    plans: [
      { duration: "1 Month", price: 1000, popular: false },
      { duration: "3 Months", price: 2700, popular: false },
      { duration: "6 Months", price: 4500, popular: true },
      { duration: "1 Year", price: 6500, popular: false },
    ],
  },
  {
    branch: "Nawpara",
    glowColor: "gold",
    registration: 500,
    personalTrainer: 2500,
    plans: [
      { duration: "1 Month", price: 1200, popular: false },
      { duration: "3 Months", price: 3000, popular: false },
      { duration: "6 Months", price: 5500, popular: true },
      { duration: "1 Year", price: 9000, popular: false },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="text-primary" size={20} />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              MEMBERSHIP <span className="text-primary">PLANS</span>
            </h2>
            <Sparkles className="text-zinc-400" size={20} />
          </motion.div>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the branch and plan that fits your fitness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingData.map((branch, i) => {
            const isPlatinum = branch.glowColor === "platinum";
            const glowColorClass = isPlatinum
              ? "rgba(212, 212, 216, 0.2)"
              : "rgba(250, 204, 21, 0.2)";
            const glowColorHover = isPlatinum
              ? "rgba(212, 212, 216, 0.4)"
              : "rgba(250, 204, 21, 0.4)";
            const borderColor = isPlatinum ? "border-zinc-300/30" : "border-primary/30";
            const titleColor = isPlatinum ? "text-zinc-200" : "text-primary";
            const badgeBg = isPlatinum ? "bg-zinc-800/50" : "bg-primary/10";
            const badgeText = isPlatinum ? "text-zinc-300" : "text-primary";

            return (
              <motion.div
                key={branch.branch}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{
                  y: -12,
                  boxShadow: `0 20px 50px ${glowColorHover}`,
                }}
                className={`relative bg-gradient-to-br from-card via-background to-card border-2 ${borderColor} rounded-2xl overflow-hidden flex flex-col transition-colors duration-300`}
                style={{
                  boxShadow: `0 10px 30px ${glowColorClass}`,
                }}
              >
                {/* Header */}
                <div className={`p-8 border-b ${isPlatinum ? 'border-zinc-800/50' : 'border-primary/20'} relative overflow-hidden`}>
                  {/* Subtle shimmer */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent ${isPlatinum ? 'via-white/5' : 'via-primary/5'} to-transparent`}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />
                  
                  <h3 className={`font-display font-bold text-3xl mb-2 ${titleColor} relative z-10 transition-colors`}>
                    {branch.branch} Branch
                  </h3>
                  <p className="text-muted-foreground font-body text-sm relative z-10">
                    Premium facilities and equipment
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    {branch.plans.map((plan, j) => (
                      <div 
                        key={j} 
                        className={`group flex items-center justify-between p-3 sm:p-4 rounded-xl border ${plan.popular ? (isPlatinum ? 'border-zinc-400/50 bg-zinc-800/30' : 'border-primary/50 bg-primary/5') : 'border-border bg-background/50 hover:bg-card'} transition-colors`}
                      >
                        <div className="flex flex-col">
                          <span className="font-display font-semibold text-base sm:text-lg text-foreground flex items-center flex-wrap gap-2">
                            {plan.duration}
                            {plan.popular && (
                              <span className={`flex-shrink-0 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-body ${badgeBg} ${badgeText}`}>
                                Most Popular
                              </span>
                            )}
                          </span>
                        </div>
                        <div className="text-right flex items-center flex-shrink-0 ml-2">
                          <IndianRupee size={16} className={`${plan.popular ? titleColor : 'text-muted-foreground group-hover:text-foreground transition-colors'} sm:w-[18px] sm:h-[18px]`} />
                          <span className={`font-display font-bold text-xl sm:text-2xl ${plan.popular ? titleColor : 'text-foreground'}`}>
                            {plan.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-auto pt-6 border-t ${isPlatinum ? 'border-zinc-800/50' : 'border-primary/20'} space-y-4`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-muted-foreground font-body text-sm px-1 sm:px-2">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className={`flex-shrink-0 ${titleColor}`} />
                        Registration Fee (One-time)
                      </span>
                      <span className="font-semibold text-foreground flex items-center self-start sm:self-auto ml-6 sm:ml-0">
                        <IndianRupee size={14} />{branch.registration} &nbsp;<span className="text-xs font-normal opacity-70">only</span>
                      </span>
                    </div>
                    
                    {/* Highlighted Personal Trainer Box */}
                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2 p-4 rounded-xl border ${isPlatinum ? 'border-zinc-400/40 bg-zinc-800/40' : 'border-primary/40 bg-primary/10'} relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
                      <div className="flex flex-col relative z-10">
                        <span className="font-display font-semibold text-base sm:text-lg text-foreground flex items-center flex-wrap gap-2">
                          Personal Trainer
                          <span className={`flex-shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-body ${badgeBg} ${badgeText} border ${isPlatinum ? 'border-zinc-600/50' : 'border-primary/30'}`}>
                            Add-on
                          </span>
                        </span>
                       
                      </div>
                      <div className="text-right flex items-center self-start sm:self-auto relative z-10 sm:ml-2">
                        <IndianRupee size={16} className={`${titleColor} sm:w-[18px] sm:h-[18px]`} />
                        <span className={`font-display font-bold text-xl sm:text-2xl ${titleColor}`}>
                          {branch.personalTrainer}
                        </span>
                        <span className="text-xs text-muted-foreground font-body ml-1 opacity-70">/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
