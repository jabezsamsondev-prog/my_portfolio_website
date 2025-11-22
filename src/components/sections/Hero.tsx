import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiGithub,
} from "react-icons/si";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen relative overflow-hidden bg-background pt-16 sm:pt-20 md:pt-24 lg:pt-20 flex flex-col"
      style={{ height: '100vh', minHeight: '-webkit-fill-available' }}
    >
      {/* Animated Background with moving gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating tech stack logos with cross-screen movement */}
        <motion.div
          animate={{
            x: [0, 300, -100, 0],
            y: [0, -150, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiMongodb className="w-16 h-16 md:w-20 md:h-20 text-[#47A248]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -300, 150, 0],
            y: [0, 120, -80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute top-[15%] right-[8%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiReact className="w-20 h-20 md:w-24 md:h-24 text-[#61DAFB]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 250, -150, 0],
            y: [0, -100, 150, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-[30%] left-[12%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiNodedotjs className="w-18 h-18 md:w-22 md:h-22 text-[#339933]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -200, 100, 0],
            y: [0, 80, -120, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute bottom-[15%] right-[15%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiJavascript className="w-14 h-14 md:w-16 md:h-16 text-[#F7DF1E]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 180, -250, 0],
            y: [0, -140, 90, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
          className="absolute top-[50%] right-[10%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiTypescript className="w-16 h-16 md:w-18 md:h-18 text-[#3178C6]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -180, 220, 0],
            y: [0, 100, -70, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute top-[65%] left-[15%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiExpress className="w-16 h-16 md:w-20 md:h-20 text-white" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 280, -120, 0],
            y: [0, -90, 130, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
          className="absolute top-[35%] left-[8%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiCss3 className="w-16 h-16 md:w-18 md:h-18 text-[#1572B6]" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -260, 140, 0],
            y: [0, 110, -100, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
            delay: 2.5,
          }}
          className="absolute bottom-[40%] right-[8%] opacity-[0.08] hover:opacity-[0.15] transition-opacity duration-300"
        >
          <SiGithub className="w-18 h-18 md:w-20 md:h-20 text-white" />
        </motion.div>

        {/* Animated gradient blobs - much more visible */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-primary/50 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-accent/50 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-[300px] h-[300px] bg-purple-500/50 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

        {/* Moving gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient"
          style={{ backgroundSize: "400% 400%" }}
        />
      </div>

      {/* Photo - absolutely positioned at bottom right of section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:block absolute bottom-0 right-0 w-1/2 pointer-events-none"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <div className="relative h-full flex items-end justify-center w-full">
          {/* Subtle circular gradient glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-purple-500/30 blur-3xl opacity-70"
          />

          {/* Profile image */}
          <img
            src="/images/profile1.png"
            alt="Jabez Samson - Profile"
            className="block h-full w-auto object-contain object-bottom pointer-events-auto"
            style={{
              filter: "drop-shadow(0 15px 50px rgba(0,0,0,0.9))",
              maxWidth: "75%",
              marginLeft: "-25%",
            }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-start relative min-h-0">
        <div className="max-w-7xl mx-auto w-full z-10 relative h-full flex flex-col">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 xl:gap-12 items-start lg:items-center justify-between w-full flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left relative z-20 flex-shrink-0 w-full lg:order-1 lg:flex-1 pt-12 sm:pt-16 lg:pt-0 mb-6"
            >
              <motion.h2
                className="font-bold mb-4 text-sm sm:text-base md:text-base lg:text-lg uppercase bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_8px_rgba(168,85,247,0.8)]"
                style={{ 
                  letterSpacing: "0.07em",
                  backgroundSize: "200% auto",
                }}
                animate={{ opacity: [0.95, 1, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                HELLO, I'M JABEZ SAMSON
              </motion.h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-foreground drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Frontend <br />
                <span
                  className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent font-extrabold animate-gradient filter drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                  style={{ backgroundSize: "200% auto" }}
                >
                  Developer
                </span>
              </h1>
              <p className="text-dark text-xs sm:text-sm md:text-sm lg:text-sm mb-8 max-w-md leading-relaxed mx-auto lg:mx-0">
                Crafting modern, intuitive, and visually striking web
                experiences that are fast, responsive, and reliable - built with
                purpose to solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto text-xs sm:text-sm md:text-sm lg:text-sm bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent bg-[length:200%_100%] hover:bg-right-top transition-[background-position,box-shadow] duration-700 ease-out shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                  onClick={() => scrollToSection("work")}
                >
                  View My Projects
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-2 inline-block"
                  >
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full sm:w-auto text-xs sm:text-sm md:text-sm lg:text-sm bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 hover:from-primary/20 hover:via-accent/20 hover:to-primary/20 bg-[length:200%_100%] hover:bg-right-top border-2 border-white/40 hover:border-white/80 transition-[background-position,border-color,box-shadow] duration-700 ease-out shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20"
                  asChild
                >
                  <a
                    href="/cv/Jabez_Samson_Resume.pdf"
                    download="Jabez_Samson_CV.pdf"
                  >
                    Download CV
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="ml-2 inline-block"
                    >
                      <Download className="h-4 w-4 md:h-5 md:w-5" />
                    </motion.div>
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Mobile/Tablet Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:hidden relative w-full self-end min-h-0 mt-auto"
              style={{ marginBottom: '-1px' }}
            >
              <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] mx-auto">
                {/* Subtle circular gradient glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-purple-500/30 blur-3xl opacity-70"
                />

                {/* Profile image container */}
                <div className="relative w-full">
                  {/* Profile image */}
                  <motion.img
                    src="/images/profile1.png"
                    alt="Jabez Samson - Profile"
                    className="relative w-full h-auto object-contain object-bottom block"
                    style={{
                      filter: "drop-shadow(0 15px 50px rgba(0,0,0,0.9))",
                      maxHeight: "42vh"
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
