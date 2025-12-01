import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/Card";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Ball Chase Challenge",
    description:
      "An interactive JavaScript game where players control a ball to chase targets while avoiding obstacles. Features smooth animations and score tracking.",
    image: "../images/projects/proj_1.png",
    tags: ["JavaScript", "Canvas API", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/ball_chase_challenge.git",
    demo: "https://ball-chase-188ee.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Whac-a-Mole",
    description:
      "Classic arcade-style game built with vanilla JavaScript. Test your reflexes by clicking moles as they randomly appear. Includes difficulty levels and high score system.",
    image: "../images/projects/proj_2.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/jabezsamsondev-prog/whac-a-mole.git",
    demo: "https://fun-mole-game.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Interactive game implementation with computer AI opponent. Features animated hand gestures, round tracking and responsive design for all devices.",
    image: "../images/projects/proj_3.png",
    tags: ["JavaScript", "DOM", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/rock-paper-scissors",
    demo: "https://rock-paper-scissors-cd587.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic strategy game with intelligent AI opponent using minimax algorithm. Clean UI, move history tracking and winner detection logic.",
    image: "../images/projects/proj_4.png",
    tags: ["JavaScript", "DOM", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/modern-tic-tac-toe",
    demo: "https://tic-tac-toe-8c50e.firebaseapp.com/",
    category: "Games",
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
  },
  {
    title: "Fish2Shark Website for Client",
    description:
      "Complete end-to-end marketing and advertising website for a Canadian marketing agency. Features responsive design, integrated contact forms, service showcases and client testimonials with modern UI/UX.",
    image: "../images/projects/proj_6.png",
    tags: ["React", "Responsive Design", "Client Project"],
    github: "https://github.com/jabezsamsondev-prog/fish2shark_website",
    demo: "https://www.fish2shark.com/",
    category: "Frontend",
  },
];

export function Work() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Games", "Frontend"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <Section id="work" className="relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[32px] font-bold mb-4">Latest Work</h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0" />
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/60 transition-colors duration-200">
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
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
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
                    className="w-full"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
