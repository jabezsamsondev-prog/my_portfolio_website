import { Section } from "../ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { Code2, Wrench, Layout, Database, Briefcase } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        "HTML 5",
        "CSS 3",
        "Bootstrap",
        "Tailwind",
        "Responsive Design",
        "JavaScript",
        "TypeScript",
        "React",
        "NextJS",
        "API Integration",
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["NodeJS", "ExpressJS", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      title: "Technical Skills",
      icon: Code2,
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Debugging",
        "Workflow Management",
        "Performance Optimization",
      ],
    },
    {
      title: "Tools / Productivity",
      icon: Wrench,
      skills: [
        "Git / GitHub",
        "Sentry",
        "Notion",
        "Postman",
        "Jira",
        "Trello",
        "Microsoft Clarity",
        "Copilot / Cursor",
        "Prompt Engineering",
        "Microsoft Office",
      ],
    },
    {
      title: "Project Management",
      icon: Briefcase,
      skills: [
        "Requirement Gathering",
        "Agile",
        "Team Leadership",
        "Communication",
        "Client Engagement",
        "Project Coordination",
      ],
    },
  ];

  return (
    <Section
      id="skills"
      className="relative bg-gradient-to-b from-primary/5 via-accent/5 to-background overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-xs md:text-sm">
            A comprehensive overview of my technical capabilities and
            professional competencies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col border-2 border-primary/20 hover:border-white/60 transition-[border-color,box-shadow] duration-200 ease-out hover:shadow-lg hover:shadow-white/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-base md:text-lg font-extrabold">
                        <span
                          className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"
                          style={{ backgroundSize: "200% auto" }}
                        >
                          {category.title}
                        </span>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/15 text-muted-foreground border border-primary/30 hover:bg-primary/25 hover:border-primary/50 md:text-xs px-3 py-1.5 font-medium transition-[background-color,border-color] duration-200 ease-out"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
