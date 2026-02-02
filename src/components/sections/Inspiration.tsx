import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";

export function Inspiration() {
  const songs = ["Beautiful Pain", "Survival", "Lighters"];

  return (
    <Section
      id="inspiration"
      className="relative bg-secondary/30 overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle background pattern - Dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]" 
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-accent/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Animated Music Visualizer Icon */}
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent opacity-20 blur-xl rounded-full" />
            <div className="relative w-20 h-20 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
                <div className="flex items-end justify-center gap-1 h-8">
                    {[1, 2, 3, 4].map((bar) => (
                        <motion.div
                            key={bar}
                            animate={{
                                height: ["20%", "80%", "40%", "100%", "30%"],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "linear",
                                delay: bar * 0.1,
                            }}
                            className="w-1.5 bg-gradient-to-t from-primary to-purple-400 rounded-full"
                        />
                    ))}
                </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              Fuel Behind the Code
            </span>
          </h2>

          {/* Main Content Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl transform -skew-y-2 rounded-3xl" />
            <div className="relative bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">
                <p className="text-base sm:text-lg text-muted-foreground leading-loose mb-8">
                    <strong className="text-foreground">Eminem's</strong> music has shaped the way I work more than anything else. 
                    His honesty, discipline, and "get up no matter what" attitude taught me to push through tough days and show up even when it isn't easy. 
                    Songs like 
                    <span className="inline-flex gap-2 mx-2 flex-wrap justify-center align-middle">
                        {songs.map((song) => (
                            <span 
                                key={song} 
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300 cursor-default"
                            >
                                <Play className="w-3 h-3 fill-current" />
                                {song}
                            </span>
                        ))}
                    </span>
                    remind me to stay hungry, stay grounded, and keep fighting despite hardships — becoming better than yesterday, one line of code at a time.
                </p>

                {/* Quote Section */}
                <div className="relative mt-8 pt-8 border-t border-white/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-zinc-900 border border-white/10 rounded-full">
                        <Quote className="w-4 h-4 text-purple-400 fill-purple-400/20" />
                    </div>
                    <p className="font-serif italic text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        I'm not the best, but I'm someone who keeps going, keeps learning, and keeps improving — because that's the mindset his music built in me. 
                        And that drive is what I bring into every project I work on.
                    </p>
                </div>
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  );
}
