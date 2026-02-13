"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const GallerySection = () => {
  // TODO: Add your image URLs here
  // Example format:
  // const galleryImages = [
  //   "https://your-image-url.com/image1.jpg",
  //   "https://your-image-url.com/image2.jpg",
  //   "https://your-image-url.com/image3.jpg",
  // ];

  const galleryImages = [
    "https://lh3.googleusercontent.com/d/147vSAGRWFTJLc-LW5es2LrkwaIIpGe6T",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXDyr3DHse1Cfh0oeKecy35ztUbf6ittJ7CHSQF2k23Zi5Wr4mW3mIJluNIhwBQ6CYgRe2A6ycmTfcNLkKSwF2r9ZSwRmJFZBxJwpb1VCM7DG3_G-TmBxk00pK2V7C3Lw9Awgn=s1000",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAwephc21JGUlLh9XSSZ-Utzg5ROnz5oGd3zp4k99GjVpIGbaN2wqbhu-kstqVbKxyYFJ0x0riURZvKczixb-QNmcLEzUn95sczs_TjVXKmDrfAg4p5ruNY7etSNxT_DKHc66ZNKHYSA=s1000",
    "https://lh3.googleusercontent.com/d/1nlGPMaBYbrZFtQmETRJfBMUReYfl9fTL",
    "https://lh3.googleusercontent.com/d/1Vvz35D8-W4q7gAIaDjNvPe1fbgL3lwc6",
    "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqXRclDpz-A0C8kGDZ9_9T_lSOa54QEJjxdrmu1QHEnRCa7XzN_mN_-IcTSLP5KmCKW1jMM9sf16mHhhiX7ycn2zJpC2hetUcFgR2XNgkadZOsVvnXKvYvh_fIRF7J-5Z_kAF0=s1000",
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-zinc-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={20} />
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary">
              GALLERY
            </h2>
            <Sparkles className="text-zinc-400" size={20} />
          </div>
          <p className="text-muted-foreground font-body text-lg">
            Inside BRS — Take a look inside
          </p>
        </motion.div>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((imageUrl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                  animate={{
                    scale: [1, 1.05, 1.05],
                    opacity: [0.3, 0, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.5,
                  }}
                />

                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-300">
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />

                  <img
                    src={imageUrl}
                    alt={i === 0 ? "BRS Gym Hatiara Premium Workout Area" : i === 1 ? "Modern gym equipment at BRS Gym Hatiara" : i === 2 ? "Professional weightlifting area in Hatiara" : i === 3 ? "Functional training zone BRS Gym" : i === 4 ? "Cardio section at Best Gym in Hatiara" : "BRS Gym Interior Hatiara Branch"}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <Sparkles className="text-primary mx-auto mb-4" size={48} />
              <p className="text-muted-foreground font-body text-lg mb-2">
                Gallery images coming soon!
              </p>
              <p className="text-muted-foreground/60 font-body text-sm">
                Add your image URLs to the galleryImages array
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
