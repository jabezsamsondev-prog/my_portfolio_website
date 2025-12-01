import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import ReactDOM from "react-dom";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

export function SidebarMenu({ isOpen, onClose, scrollToSection }: SidebarMenuProps) {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999]"
            style={{ background: "rgba(0,0,0,0.7)" }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-[70vw] sm:w-[30vw] z-[99999] flex flex-col p-6 bg-black/90 overflow-y-auto"
            style={{ pointerEvents: "auto" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground"
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
            <nav className="mt-10 flex flex-col gap-4">
              <button onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Home</button>
              <button onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Experience</button>
              <button onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Skills</button>
              <button onClick={() => scrollToSection("work")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Projects</button>
              <button onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">My Story</button>
              <button onClick={() => scrollToSection("blog")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Blog</button>
              <button onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 cursor-pointer">Contact</button>
              <div className="pt-2 border-t border-border/30 flex flex-col gap-3">
                <a href="/cv/Jabez_Samson_Resume.pdf" download="Jabez_Samson_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-white/40 hover:border-primary hover:bg-primary/10 rounded-md transition-colors text-sm"
                  style={{ minHeight: "30px", maxHeight: "30px" }}>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <a href="https://www.linkedin.com/in/jabezsamsondev-prog/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-md transition-colors text-sm"
                  style={{ minHeight: "30px", maxHeight: "30px" }}>
                  <FaLinkedin className="h-4 w-4" />
                  Connect
                </a>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
