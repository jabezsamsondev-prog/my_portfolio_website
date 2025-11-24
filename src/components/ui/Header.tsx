import { Button } from "./Button";
import { motion } from "framer-motion";
import { Menu, X, Download, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "work",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
          : "md:bg-transparent md:border-b-transparent bg-background/80 backdrop-blur-md border-b border-primary/20"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 0.5 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-8 md:h-10 w-auto"
              />
            </motion.a>

            {/* Desktop Navigation - Centered Menu Items */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2"
            >
              <button
                onClick={() => scrollToSection("experience")}
                className="relative text-foreground hover:text-foreground transition-colors cursor-pointer group text-xs xl:text-sm"
              >
                Experience
                <span
                  className={`absolute -bottom-[3px] left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                    activeSection === "experience"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="relative text-foreground hover:text-foreground transition-colors cursor-pointer group text-xs xl:text-sm"
              >
                Skills
                <span
                  className={`absolute -bottom-[3px] left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                    activeSection === "skills"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="relative text-foreground hover:text-foreground transition-colors cursor-pointer group text-xs xl:text-sm"
              >
                Projects
                <span
                  className={`absolute -bottom-[3px] left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                    activeSection === "work"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="relative text-foreground hover:text-foreground transition-colors cursor-pointer group text-xs xl:text-sm"
              >
                My Story
                <span
                  className={`absolute -bottom-[3px] left-0 h-0.5 bg-white transition-all duration-300 ease-out ${
                    activeSection === "about"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </motion.div>

            {/* Right Side Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-2 xl:gap-3"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-white/40 hover:border-white/80"
                asChild
              >
                <a
                  href="/cv/Jabez_Samson_Resume.pdf"
                  download="Jabez_Samson_CV.pdf"
                  className="flex items-center gap-2"
                >
                  Download CV
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    <Download className="h-4 w-4" />
                  </motion.div>
                </a>
              </Button>
              <Button
                size="sm"
                className="text-xs"
                onClick={() => scrollToSection("contact")}
              >
                Let's Collaborate
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-2 inline-block"
                >
                  <Handshake className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground p-2 cursor-pointer"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-border/50"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  My Story
                </button>
                <div className="pt-2 border-t border-border/30 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs border-white/40"
                    asChild
                  >
                    <a
                      href="/cv/Jabez_Samson_Resume.pdf"
                      download="Jabez_Samson_CV.pdf"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="w-full"
                  >
                    <Handshake className="h-4 w-4 mr-2" />
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
