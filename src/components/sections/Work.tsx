import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Github, ExternalLink, Gamepad2, Lock, Ban } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import swiftSteeds from "../../assets/projects/swiftsteeds.png";
import familiCloud from "../../assets/projects/famili_cloud.png";
import lmsMockup from "../../assets/projects/lms_mockup.png";
import seniorCareCrm from "../../assets/projects/senior_care_crm.png";
import graniteEcommerce from "../../assets/projects/granite_ecommerce.png";
import fish2Shark from "../../assets/projects/proj_6.png";
import ChromaMatch from "../../assets/projects/proj_7.png";
import neonCipher from "../../assets/projects/proj_5.png";
import ballChase from "../../assets/projects/proj_1.png";
import whacAMole from "../../assets/projects/proj_2.png";
import rockPaperScissors from "../../assets/projects/proj_3.png";
import ticTacToe from "../../assets/projects/proj_4.png";

const projects = [
  {
    title: "Swift Steeds Trading & Consultancy",
    description:
      "Complete end-to-end marketing and advertising website for a Indian trading company. Features responsive design, integrated contact forms, service showcases and client testimonials with modern UI/UX.",
    image: swiftSteeds,
    tags: ["JavaScript", "Responsive Design"],
    github: "#",
    demo: "https://www.swiftsteeds.com/",
    category: "Frontend",
    isConfidential: true,
    order: 65,
  },
  {
    title: "Famili Cloud",
    description:
      "Famili Cloud is where your family's memories, stories, and connections live forever — beautifully organized, completely private, and always accessible. A digital sanctuary for preserving family legacy across generations.",
    image: familiCloud,
    tags: ["React", "JavaScript", "Firebase", "Design"],
    github: "#",
    demo: "https://www.famili.cloud/",
    category: "Full Stack",
    isConfidential: true,
    order: 100,
  },
  {
    title: "Learning Management System",
    description:
      "A modern educational platform designed for skill development in Logistics and Supply Chain Management. Features course management, interactive learning modules, and progress tracking for students and educators.",
    image: lmsMockup,
    tags: ["LMS Setup", "Moodle", "JavaScript", "Design"],
    github: "#",
    demo: "https://edc.lsc-india.org/",
    category: "Full Stack",
    isConfidential: true,
    order: 90,
  },
  {
    title: "Care Platform - All in one CRM",
    description:
      "A comprehensive care management platform designed for a care agency in the UK. Features caregiver scheduling, shop management, training courses and a dedicated chat application.",
    image: seniorCareCrm,
    tags: ["React", "JavaScript", "Node", "Enterprise CRM"],
    github: "#",
    demo: "#",
    category: "Full Stack",
    isConfidential: true,
    order: 80,
  },
  {
    title: "Premium E-commerce Application",
    description:
      "A high-end e-commerce solution for a premier granite and stone supplier. Showcases premium slab galleries, project inspiration, and a sophisticated product catalog for luxury surfaces.",
    image: graniteEcommerce,
    tags: ["React", "JavaScript", "Node", "Stripe"],
    github: "#",
    demo: "#",
    category: "Full Stack",
    isConfidential: true,
    order: 70,
  },
  {
    title: "Fish2Shark Website for Client",
    description:
      "Complete end-to-end marketing and advertising website for a Canadian marketing agency. Features responsive design, integrated contact forms, service showcases and client testimonials with modern UI/UX.",
    image: fish2Shark,
    tags: ["React", "Responsive Design", "JavaScript"],
    github: "https://github.com/jabezsamsondev-prog/fish2shark_website",
    demo: "https://www.fish2shark.com/",
    category: "Frontend",
    order: 60,
  },
  {
    title: "Gemini Clone",
    description:
      "AI-powered conversational interface replicating Google Gemini. Features real-time chat interactions, API integration with Gemini AI and modern React UI with responsive design.",
    image:
      "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
    tags: ["JavaScript", "API Integration", "DOM Manipulation"],
    github: "https://github.com/jabezsamsondev-prog/gemini_clone",
    demo: "https://gemini-clone-6c34f.firebaseapp.com/",
    category: "Frontend",
    order: 50,
    hidden: true,
  },
  {
    title: "Chroma Match",
    description:
      "A vibrant memory matching game that challenges your visual memory and pattern recognition skills. Features smooth animations, a sleek neon interface, and progressive difficulty levels to test your cognitive skills.",
    image: ChromaMatch,
    tags: ["JavaScript", "Game Logic", "CSS3"],
    github: "https://github.com/jabezsamsondev-prog/chroma_match",
    demo: "https://chroma-match-a5339.firebaseapp.com/",
    category: "Games",
    order: 48,
  },
  {
    title: "Neon Cipher",
    description:
      "A futuristic number guessing game wrapped in a neon cyberpunk aesthetic. Test your logic with difficulty levels, limited chances, and immersive audio feedback.",
    image: neonCipher,
    tags: ["JavaScript", "Game Logic", "CSS3"],
    github: "https://github.com/jabezsamsondev-prog/guessing_game",
    demo: "https://neon-cipher-38ac2.firebaseapp.com/",
    category: "Games",
    order: 45,
  },
  {
    title: "Ball Chase Challenge",
    description:
      "An interactive JavaScript game where players control a ball to chase targets while avoiding obstacles. Features smooth animations and score tracking.",
    image: ballChase,
    tags: ["JavaScript", "Canvas API", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/ball_chase_challenge.git",
    demo: "https://ball-chase-188ee.firebaseapp.com/",
    category: "Games",
    order: 40,
  },
  {
    title: "Whac-a-Mole",
    description:
      "Classic arcade-style game built with vanilla JavaScript. Test your reflexes by clicking moles as they randomly appear. Includes difficulty levels and high score system.",
    image: whacAMole,
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/jabezsamsondev-prog/whac-a-mole.git",
    demo: "https://fun-mole-game.firebaseapp.com/",
    category: "Games",
    order: 30,
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Interactive game implementation with computer AI opponent. Features animated hand gestures, round tracking and responsive design for all devices.",
    image: rockPaperScissors,
    tags: ["JavaScript", "DOM", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/rock-paper-scissors",
    demo: "https://rock-paper-scissors-cd587.firebaseapp.com/",
    category: "Games",
    order: 20,
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic strategy game with intelligent AI opponent using minimax algorithm. Clean UI, move history tracking and winner detection logic.",
    image: ticTacToe,
    tags: ["JavaScript", "DOM", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/modern-tic-tac-toe",
    demo: "https://tic-tac-toe-8c50e.firebaseapp.com/",
    category: "Games",
    order: 10,
  },
];

export function Work() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Full Stack", "Frontend", "Games"];

  const visibleProjects = projects.filter((project) => !project.hidden);

  const filteredProjects =
    activeTab === "All"
      ? visibleProjects
      : visibleProjects.filter((project) => project.category === activeTab);

  const sortedProjects = [...filteredProjects].sort(
    (a, b) => (b.order || 0) - (a.order || 0),
  );

  return (
    <section
      id="work"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-secondary/30"
    >
      {/* Game-themed background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Latest Projects</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto md:mx-0 mb-6 animate-gradient bg-[length:200%_auto]" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === category
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-secondary/50 text-foreground hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group border-2 border-primary/20 hover:border-white/60 transition-[border-color,box-shadow] duration-200 ease-out hover:shadow-lg hover:shadow-white/10">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-200 ease-out z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.title === "Gemini Clone"
                          ? "object-contain p-8 bg-gradient-to-br from-gray-900 to-gray-800"
                          : "object-cover"
                      }`}
                    />
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-md md:text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-purple-900/30 text-purple-200 border border-purple-400/40 hover:bg-purple-800/40 hover:border-purple-300/60 text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-1 font-medium transition-[background-color,border-color] duration-200 ease-out"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2 flex-col sm:flex-row">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full transition-all duration-300 ${
                        project.github !== "#"
                          ? "hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-purple-500 hover:text-white hover:border-white"
                          : "opacity-60 bg-secondary/10"
                      }`}
                      asChild
                      disabled={project.github === "#"}
                    >
                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> Source Code
                        </a>
                      ) : (
                        <span className="flex items-center text-muted-foreground cursor-not-allowed">
                          <Lock className="mr-2 h-4 w-4" /> Confidential
                        </span>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      className={`w-full font-semibold transition-all ${
                        project.demo !== "#"
                          ? "bg-gradient-to-r from-primary via-accent to-purple-500 text-white shadow-lg border-0 hover:brightness-110 hover:saturate-150"
                          : "bg-secondary/20 text-muted-foreground border border-primary/10 shadow-none opacity-70"
                      }`}
                      asChild
                      disabled={project.demo === "#"}
                    >
                      {project.demo !== "#" ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.category === "Games" ? (
                            <>
                              <Gamepad2 className="mr-2 h-4 w-4" /> Play Now
                            </>
                          ) : (
                            <>
                              <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </>
                          )}
                        </a>
                      ) : (
                        <span className="flex items-center cursor-not-allowed opacity-80">
                          <Ban className="mr-2 h-4 w-4" /> Internal Only
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
