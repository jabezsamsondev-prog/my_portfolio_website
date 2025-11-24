import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/Card";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Devship Pvt. Ltd.",
    role: "Senior Software Developer",
    period: "2021 - Present",
    description: `Led front-end development for a comprehensive CRM system, building an intuitive admin dashboard and client-facing features including training modules and e-commerce capabilities. Collaborated with cross-functional teams to define project requirements, manage timelines, and ensure the delivery of high-quality, scalable code. Built few other full-fledged web applications involving features like Inventory Management, E-Commerce and Financial Review.`,
    skills: [
      "JavaScript",
      "React",
      "NextJS",
      "Firebase",
      "Github",
      "Prompt Engineering",
    ],
  },
  {
    company: "Logistics Sector Skill Council",
    role: "Web Developer",
    period: "2018 - 2021",
    description: `Spearheaded end-to-end development and delivery of Learning Management Systems (LMSs), from requirement gathering to deployment and post-launch support. Curated and structured educational content to align with client requirements and user engagement goals. Collaborated directly with clients to analyze problems, propose solutions, and ensure satisfaction. Managed a cross-functional team, overseeing project timelines, task allocation, and quality assurance.`,
    skills: [
      "LMS",
      "JavaScript",
      "Project Management",
      "Server Administration",
    ],
  },
  {
    company: "Ellipticals Networks Labs",
    role: "Product Manager",
    period: "2018",
    description:
      "Directed and coordinated the product delivery team to launch a real-money gaming app. Managed the monitoring of the game 24/7, the game master dashboard, curated the payouts enabling technical support.",
    skills: ["JavaScript", "Game Management", "Product Management"],
  },
  {
    company: "Evansys Technologies",
    role: "Technical Head",
    period: "2017 - 2018",
    description:
      "Developed and managed websites for clients from educational institutions starting from conception to deployment followed by post-launch support and maintenance.",
    skills: ["Web Technology", "JavaScript", "Team Management"],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[32px] font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0" />
        </div>

        {/* Timeline for desktop, stacked cards for mobile */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-[15px] lg:left-[calc(50%-2px)] top-0 bottom-0 w-1 bg-primary/40 shadow-lg shadow-primary/20 pointer-events-none" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                className={`relative ${
                  index % 2 === 0
                    ? "md:pr-0 lg:pr-[calc(50%+2rem)]"
                    : "md:pl-0 lg:pl-[calc(50%+2rem)] lg:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.4)",
                      "0 0 0 8px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`hidden md:flex absolute top-6 w-8 h-8 bg-primary rounded-full items-center justify-center border-4 border-background z-10 ${
                    index % 2 === 0
                      ? "left-0 lg:left-[calc(50%-16px)]"
                      : "left-0 lg:left-[calc(50%-16px)]"
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </motion.div>

                <Card className="border-l-4 md:border-l-0 md:border-2 border-l-primary hover:border-primary ml-0 md:ml-12 lg:ml-0 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex flex-row justify-between items-center gap-4 mb-1">
                      <CardTitle className="text-base md:text-lg flex-1">
                        {exp.role}
                      </CardTitle>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm md:text-sm font-medium">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-xs md:text-sm leading-loose">
                      {exp.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
