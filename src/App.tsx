import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Work } from "./components/sections/Work";
import { Services } from "./components/sections/Services";
import { Highlights } from "./components/sections/Highlights";
import { Inspiration } from "./components/sections/Inspiration";
import { Contact } from "./components/sections/Contact";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Header } from "./components/ui/Header";
import { CustomCursor } from "./components/ui/CustomCursor";
import { BlogSection } from "./components/sections/Blog";

function App() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30 overflow-x-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <Experience />
      <Work />
      <Skills />
      <Services />
      <BlogSection />
      <About />
      <Inspiration />
      <Highlights />
      <Contact />
      <FloatingWhatsApp />
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-primary/20 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Brand Section - Left */}
            <div className="text-center md:text-left">
              {/* Logo */}
              <div className="flex justify-center md:justify-start mb-4">
                <img
                  src="/images/logo.svg"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-300 via-purple-200 to-pink-300 bg-clip-text text-transparent">Jabez Samson</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-md">
                Front-end Developer specialized in developing and managing modern web experiences and ecosystems.
              </p>
              <p className="text-xs text-muted-foreground/80">
                Managed by Jabez Samson
              </p>
            </div>

            {/* Quick Links - Right */}
            <div className="text-center md:text-right">
              <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
              <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:flex-col md:items-end md:gap-2">
                <a 
                  href="https://www.linkedin.com/in/jabezsamson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="/cv/Jabez_Samson_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-purple-300 transition-colors"
                >
                  Download CV
                </a>
                <a 
                  href="#work" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Projects
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Services
                </a>
                <a 
                  href="#experience" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted-foreground hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Experience
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary/20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs md:text-sm text-muted-foreground/80">
                Last updated: {new Date(__LAST_UPDATED__).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground text-center">
                Portfolio &copy; {new Date().getFullYear()} | All rights reserved
                <br className="md:hidden" />
                <span className="hidden md:inline"> | </span>
                Made with ❤️ and cutting-edge technology.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
