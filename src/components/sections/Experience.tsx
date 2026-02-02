import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/Card";
import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Check, Award } from "lucide-react";
import { SiQuora, SiGithub } from "react-icons/si";
import { useRef } from "react";

const experiences = [
  {
    company: "Devship Pvt. Ltd.",
    role: "Senior Software Developer",
    period: "2021 - Present",
    description: [
      "Led front-end development for a comprehensive CRM system, building an intuitive admin dashboard and client-facing features including training modules and e-commerce capabilities.",
      "Collaborated with cross-functional teams to define project requirements, manage timelines and ensure the delivery of high-quality, scalable code.",
      "Built few other full-fledged web applications involving features like Inventory Management, E-Commerce and Financial Review.",
    ],
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
    description: [
      "Spearheaded end-to-end development and delivery of Learning Management Systems (LMSs), from requirement gathering to deployment and post-launch support.",
      "Curated and structured educational content to align with client requirements and user engagement goals.",
      "Collaborated directly with clients to analyze problems, propose solutions and ensure satisfaction.",
      "Managed a cross-functional team, overseeing project timelines, task allocation and quality assurance.",
    ],
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
    description: [
      "Directed and coordinated the product delivery team to launch a real-money gaming app.",
      "Managed the monitoring of the game 24/7, the game master dashboard, curated the payouts enabling technical support.",
    ],
    skills: ["JavaScript", "Game Management", "Product Management"],
  },
  {
    company: "Evansys Technologies",
    role: "Technical Head",
    period: "2017 - 2018",
    description: [
      "Developed and managed websites for clients from educational institutions starting from conception to deployment followed by post-launch support and maintenance.",
    ],
    skills: ["Web Technology", "JavaScript", "Team Management"],
  },
];

const accolades = [
  {
    icon: Briefcase,
    value: "Ex-Tech Mentor",
    label: "Rethink Passion",
    description: "Guided aspiring developers in their learning journey",
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Award,
    value: "Ex-Intern",
    label: "Google Device Lab",
    description: "A hands-on workshop exploring Entrepreneurship",
    color: "from-accent/20 to-purple-500/20",
    iconColor: "text-accent",
  },
  {
    icon: SiQuora,
    value: "6,47,000+",
    label: "Content Views",
    platform: "My answers on Quora have gotten attention",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: SiGithub,
    value: "10+",
    label: "Open-Source Contributions",
    description:
      "Active contributor in open source projects on GitHub, Stack Overflow and Quora",
    color: "from-gray-500/20 to-slate-500/20",
    iconColor: "text-gray-300",
    link: "https://stackoverflow.com/users/9132170/jabez-samson",
  },
];

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section id="experience" className="bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            Experience & Highlights
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto md:mx-0 mb-6 animate-gradient bg-[length:200%_auto]" />
        </div>

        {/* Timeline for desktop, stacked cards for mobile */}
        <div className="relative" ref={timelineRef}>
          {/* Timeline line - connecting first dot to last dot */}
          <div
            className="hidden md:block absolute left-[15px] lg:left-[calc(50%-2px)] w-1 bg-white/10 shadow-lg shadow-primary/20 pointer-events-none"
            style={{
              top: "1.5rem",
              height: "calc(100% - 3rem - 12rem)",
            }}
          />

          {/* Animated fill line */}
          <motion.div
            className="hidden md:block absolute left-[15px] lg:left-[calc(50%-2px)] w-1 bg-primary pointer-events-none origin-top shadow-lg shadow-primary/50"
            style={{
              top: "1.5rem",
              height: "calc(100% - 3rem - 12rem)",
              scaleY,
            }}
          />

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

                <Card
                  className={`${
                    index === 0 || index === 2
                      ? "border-r-4 md:border-r-0 md:border-2 border-r-primary"
                      : "border-l-4 md:border-l-0 md:border-2 border-l-primary"
                  } hover:border-primary ml-0 md:ml-12 lg:ml-0 transition-colors duration-200`}
                >
                  <CardHeader>
                    <div className="flex flex-row justify-between items-center gap-4 mb-1">
                      <CardTitle className="text-base md:text-lg flex-1 primary">
                        {exp.role}
                      </CardTitle>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-white/50 md:text-sm font-medium">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-white/90 mb-8 text-xs md:text-sm leading-loose">
                      {exp.description.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-2 mb-2">
                          <Check className="w-4 h-4 text-accent mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
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

        {/* Accolades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 md:mt-24">
          {/* Tech Mentor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300 md:col-span-1 lg:col-span-1"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${accolades[0].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative z-10 flex flex-col justify-between">
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${accolades[0].color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {(() => {
                  const Icon = accolades[0].icon;
                  return (
                    <Icon className={`w-8 h-8 ${accolades[0].iconColor}`} />
                  );
                })()}
              </motion.div>
              <div>
                <div className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                  {accolades[0].value}
                </div>
                <p className="text-sm md:text-md font-semibold text-foreground/90 mb-2">
                  {accolades[0].label}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  {accolades[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Intern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300 md:col-span-1 lg:col-span-1"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${accolades[1].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative z-10">
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${accolades[1].color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {(() => {
                  const Icon = accolades[1].icon;
                  return (
                    <Icon className={`w-8 h-8 ${accolades[1].iconColor}`} />
                  );
                })()}
              </motion.div>
              <div className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                {accolades[1].value}
              </div>
              <p className="text-sm md:text-md font-semibold text-foreground/90 mb-2">
                {accolades[1].label}
              </p>
              <p className="text-xs text-muted-foreground/80">
                {accolades[1].description}
              </p>
            </div>
          </motion.div>

          {/* Quora Stats */}
          <a
            href="https://www.quora.com/profile/Jabez-Samson"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300 md:col-span-2 lg:col-span-1 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accolades[2].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10 flex flex-col justify-between">
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${accolades[2].color} mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {(() => {
                    const Icon = accolades[2].icon;
                    return (
                      <Icon
                        className={`w-8 h-8 ${accolades[2].iconColor}`}
                      />
                    );
                  })()}
                </motion.div>
                <div>
                  <div className="text-xl md:text-2xl font-bold mb-3 text-red-500">
                    {accolades[2].value}
                  </div>
                  <p className="text-sm md:text-md font-semibold text-foreground/90 mb-2">
                    {accolades[2].label}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {accolades[2].platform}
                  </p>
                </div>
              </div>
            </motion.div>
          </a>

          {/* Open Source Contribution */}
          <a
            href="https://github.com/jabezsamsondev-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300 md:col-span-2 lg:col-span-1 cursor-pointer"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${accolades[3].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 flex flex-col justify-between h-full"
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${accolades[3].color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {(() => {
                  const Icon = accolades[3].icon;
                  return (
                    <Icon className={`w-8 h-8 ${accolades[3].iconColor}`} />
                  );
                })()}
              </motion.div>
              <div>
                <div className="text-xl md:text-2xl font-bold mb-3 text-gray-300">
                  {accolades[3].value}
                </div>
                <p className="text-sm md:text-md font-semibold text-foreground/90 mb-2">
                  {accolades[3].label}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  {accolades[3].description}
                </p>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    </Section>
  );
}
