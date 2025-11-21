import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Work } from "./components/sections/Work";
import { Highlights } from "./components/sections/Highlights";
import { Inspiration } from "./components/sections/Inspiration";
import { Contact } from "./components/sections/Contact";
import { FloatingLinkedIn } from "./components/ui/FloatingLinkedIn";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Header } from "./components/ui/Header";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary/30 overflow-x-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Highlights />
      <About />
      <Inspiration />
      <Contact />
      <FloatingWhatsApp />
      <FloatingLinkedIn />
      <ScrollToTop />

      {/* Footer */}
      <footer className="py-6 md:py-8 text-center text-dark border-t border-border/50 px-4">
        <p className="text-xs md:text-sm">
          Portfolio &copy; {new Date().getFullYear()} | All rights reserved.
          Made with ❤️ and 🤖 by <a href="/" className="underline">Jabez Samson</a>.
        </p>
      </footer>
    </main>
  );
}

export default App;
