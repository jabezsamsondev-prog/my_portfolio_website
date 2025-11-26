import { Button } from "./Button";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const experienceRef = useRef<HTMLButtonElement>(null);
  const skillsRef = useRef<HTMLButtonElement>(null);
  const workRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);
  const blogRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      let ref;
      if (activeSection === "experience") ref = experienceRef;
      else if (activeSection === "skills") ref = skillsRef;
      else if (activeSection === "work") ref = workRef;
      else if (activeSection === "about") ref = aboutRef;
      else if (activeSection === "contact") ref = contactRef;
      else if (activeSection === "blog") ref = blogRef;

      if (ref?.current) {
        setIndicatorStyle({
          left: ref.current.offsetLeft,
          width: ref.current.offsetWidth,
        });
      }
    };

    updateIndicator();
  }, [activeSection]);

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
        "blog",
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
          : "bg-transparent border-b border-transparent"
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
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-secondary/30 backdrop-blur-sm rounded-full p-1 border border-primary/10 relative"
                style={{ width: "max-content" }}
              >
                {/* Sliding background highlight */}
                <motion.span
                  className="absolute bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50"
                  style={{ height: "calc(100% - 8px)", top: "4px" }}
                  animate={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                    opacity: activeSection === "hero" ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />

                <button
                  ref={experienceRef}
                  onClick={() => scrollToSection("experience")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "experience" ? "text-white" : ""
                    }`}
                  >
                    Experience
                  </span>
                </button>
                <button
                  ref={skillsRef}
                  onClick={() => scrollToSection("skills")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "skills" ? "text-white" : ""
                    }`}
                  >
                    Skills
                  </span>
                </button>
                <button
                  ref={workRef}
                  onClick={() => scrollToSection("work")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "work" ? "text-white" : ""
                    }`}
                  >
                    Projects
                  </span>
                </button>
                <button
                  ref={aboutRef}
                  onClick={() => scrollToSection("about")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "about" ? "text-white" : ""
                    }`}
                  >
                    My Story
                  </span>
                </button>
                <button
                  ref={blogRef}
                  onClick={() => scrollToSection("blog")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "blog" ? "text-white" : ""
                    }`}
                  >
                    Blog
                  </span>
                </button>
                <button
                  ref={contactRef}
                  onClick={() => scrollToSection("contact")}
                  className="relative text-foreground transition-colors duration-300 cursor-pointer text-xs xl:text-sm px-4 py-2 rounded-full z-10 whitespace-nowrap nesthub:text-[13px] nesthub:px-2 nesthub:mx-0"
                >
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      activeSection === "contact" ? "text-white" : ""
                    }`}
                  >
                    Contact
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Side Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-2 xl:gap-3"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs xl:text-sm border-white/40 hover:border-white/80"
                asChild
              >
                <a
                  href="/cv/Jabez_Samson_Resume.pdf"
                  download="Jabez_Samson_CV.pdf"
                  className="flex items-center gap-2"
                  style={{ minHeight: "36px", maxHeight: "36px" }}
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
              <a
                href="https://www.linkedin.com/in/jabezsamson/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] hover:bg-[#0A66C2] text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-md text-xs xl:text-sm font-medium flex items-center gap-2 border border-white/20 bg-gradient-to-r from-[#0A66C2] via-[#004182] to-[#0A66C2] hover:from-[#004182] hover:via-[#0A66C2] hover:to-[#004182] bg-[length:200%_100%] hover:bg-right-top transition-[background-position,box-shadow] duration-700 ease-out shadow-lg shadow-[#0A66C2]/30 hover:shadow-xl hover:shadow-[#0A66C2]/40"
                style={{ minHeight: "36px", maxHeight: "36px" }}
              >
                Connect
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  <FaLinkedin className="h-4 w-4" />
                </motion.div>
              </a>
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
              className="lg:hidden py-6 px-4 border-t border-border/50 bg-background backdrop-blur-md rounded-lg"
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
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Contact
                </button>
                <div className="pt-2 border-t border-border/30 flex flex-col gap-3">
                  <a
                    href="/cv/Jabez_Samson_Resume.pdf"
                    download="Jabez_Samson_CV.pdf"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border-2 border-white/40 hover:border-primary hover:bg-primary/10 rounded-md transition-colors text-sm"
                    style={{ minHeight: "30px", maxHeight: "30px" }}
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jabezsamson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-md transition-colors text-sm"
                    style={{ minHeight: "30px", maxHeight: "30px" }}
                  >
                    <FaLinkedin className="h-4 w-4" />
                    Connect
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}

// Add this to your tailwind.config.js:
// theme: {
//   extend: {
//     screens: {
//       nesthub: '1024px',
//     },
//   },
// },
