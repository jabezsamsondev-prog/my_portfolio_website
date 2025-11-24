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
    image:
      "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23bg)'/%3E%3Ccircle cx='400' cy='300' r='80' fill='%23fbbf24' stroke='%23fff' stroke-width='4'/%3E%3Cpath d='M 200 500 Q 400 450 600 500' stroke='%23fff' stroke-width='3' fill='none'/%3E%3Ctext x='400' y='100' font-family='Arial' font-size='48' font-weight='bold' fill='%23fff' text-anchor='middle'%3EBall Chase%3C/text%3E%3C/svg%3E",
    tags: ["JavaScript", "Canvas API", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/ball_chase_challenge.git",
    demo: "https://ball-chase-188ee.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Whac-a-Mole",
    description:
      "Classic arcade-style game built with vanilla JavaScript. Test your reflexes by clicking moles as they randomly appear. Includes difficulty levels and high score system.",
    image:
      "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23bg2)'/%3E%3Cellipse cx='250' cy='450' rx='80' ry='40' fill='%238b4513'/%3E%3Cellipse cx='400' cy='450' rx='80' ry='40' fill='%238b4513'/%3E%3Cellipse cx='550' cy='450' rx='80' ry='40' fill='%238b4513'/%3E%3Ccircle cx='400' cy='380' r='50' fill='%23964B00'/%3E%3Ccircle cx='385' cy='370' r='8' fill='%23000'/%3E%3Ccircle cx='415' cy='370' r='8' fill='%23000'/%3E%3Cpath d='M 385 395 Q 400 405 415 395' stroke='%23000' stroke-width='3' fill='none'/%3E%3Ctext x='400' y='100' font-family='Arial' font-size='48' font-weight='bold' fill='%23fff' text-anchor='middle'%3EWhac-a-Mole%3C/text%3E%3C/svg%3E",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/jabezsamsondev-prog/whac-a-mole.git",
    demo: "https://fun-mole-game.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "Interactive game implementation with computer AI opponent. Features animated hand gestures, round tracking and responsive design for all devices.",
    image:
      "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ef4444;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f97316;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23bg3)'/%3E%3Ctext x='200' y='330' font-size='120' text-anchor='middle'%3E✊%3C/text%3E%3Ctext x='400' y='330' font-size='120' text-anchor='middle'%3E✋%3C/text%3E%3Ctext x='600' y='330' font-size='120' text-anchor='middle'%3E✌️%3C/text%3E%3Ctext x='200' y='450' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3ERock%3C/text%3E%3Ctext x='400' y='450' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EPaper%3C/text%3E%3Ctext x='600' y='450' font-family='Arial' font-size='24' font-weight='bold' fill='%23fff' text-anchor='middle'%3EScissors%3C/text%3E%3Ctext x='400' y='100' font-family='Arial' font-size='42' font-weight='bold' fill='%23fff' text-anchor='middle'%3ERock Paper Scissors%3C/text%3E%3C/svg%3E",
    tags: ["JavaScript", "DOM", "Game Logic"],
    github: "https://github.com/jabezsamsondev-prog/rock-paper-scissors",
    demo: "https://rock-paper-scissors-cd587.firebaseapp.com/",
    category: "Games",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic strategy game with intelligent AI opponent using minimax algorithm. Clean UI, move history tracking and winner detection logic.",
    image:
      "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23bg4)'/%3E%3Cline x1='333' y1='200' x2='333' y2='500' stroke='%23fff' stroke-width='4'/%3E%3Cline x1='467' y1='200' x2='467' y2='500' stroke='%23fff' stroke-width='4'/%3E%3Cline x1='200' y1='300' x2='600' y2='300' stroke='%23fff' stroke-width='4'/%3E%3Cline x1='200' y1='400' x2='600' y2='400' stroke='%23fff' stroke-width='4'/%3E%3Cpath d='M 230 230 L 303 303 M 303 230 L 230 303' stroke='%23fbbf24' stroke-width='6' stroke-linecap='round'/%3E%3Ccircle cx='400' cy='350' r='40' fill='none' stroke='%2310b981' stroke-width='6'/%3E%3Cpath d='M 497 430 L 570 503 M 570 430 L 497 503' stroke='%23fbbf24' stroke-width='6' stroke-linecap='round'/%3E%3Ctext x='400' y='120' font-family='Arial' font-size='48' font-weight='bold' fill='%23fff' text-anchor='middle'%3ETic Tac Toe%3C/text%3E%3C/svg%3E",
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
    image:
      "/images/fish2shark-screenshot.png",
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
                  <CardTitle className="text-sm md:text-base">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm">
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
                      <Github className="mr-2 h-4 w-4" /> Code
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
