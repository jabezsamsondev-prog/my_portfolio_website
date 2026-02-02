import { Section } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { motion } from "framer-motion";
import { Code2, Wrench, Layout, Database, Briefcase, Cloud } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      description: "Building beautiful, responsive user interfaces",
      skills: [
        "HTML / CSS",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "API Integration",
      ],
      theme: "cyan", 
    },
    {
      title: "Backend Development",
      icon: Database,
      description: "Robust server-side logic and database design",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
      theme: "lime",
    },
    {
      title: "Core Competencies",
      icon: Code2,
      description: "Fundamental engineering skills and mindset",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Debugging",
        "Workflow Management",
        "Performance Optimization",
      ],
      theme: "rose",
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      description: "Efficiency boosters and development tools",
      skills: [
        "Git & GitHub",
        "Postman",
        "Sentry",
        "Jira",
        "Notion",
        "Cursor AI",
      ],
      theme: "yellow",
    },
    {
      title: "Project Management",
      icon: Briefcase,
      description: "Leading teams and delivering products",
      skills: [
        "Agile / Scrum",
        "Requirement Analysis",
        "Team Leadership",
        "Client Communication",
      ],
      theme: "orange",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      description: "Deploying and scaling applications",
      skills: [
        "Vercel",
        "Netlify",
        "Firebase Hosting",
        "DigitalOcean",
        "CI/CD Basics",
      ],
      theme: "fuchsia",
    },
  ];

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case "cyan":
        return {
          border: "group-hover:border-cyan-500/50",
          icon: "text-cyan-400 group-hover:text-cyan-300",
          iconBg: "group-hover:bg-cyan-500/20",
          title: "group-hover:text-cyan-400",
          badge: "group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-200",
          glow: "bg-cyan-500/5",
        };
      case "lime":
        return {
          border: "group-hover:border-lime-500/50",
          icon: "text-lime-400 group-hover:text-lime-300",
          iconBg: "group-hover:bg-lime-500/20",
          title: "group-hover:text-lime-400",
          badge: "group-hover:border-lime-500/30 group-hover:bg-lime-500/10 group-hover:text-lime-200",
          glow: "bg-lime-500/5",
        };
      case "rose":
        return {
          border: "group-hover:border-rose-500/50",
          icon: "text-rose-400 group-hover:text-rose-300",
          iconBg: "group-hover:bg-rose-500/20",
          title: "group-hover:text-rose-400",
          badge: "group-hover:border-rose-500/30 group-hover:bg-rose-500/10 group-hover:text-rose-200",
          glow: "bg-rose-500/5",
        };
      case "yellow":
        return {
          border: "group-hover:border-yellow-500/50",
          icon: "text-yellow-400 group-hover:text-yellow-300",
          iconBg: "group-hover:bg-yellow-500/20",
          title: "group-hover:text-yellow-400",
          badge: "group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10 group-hover:text-yellow-200",
          glow: "bg-yellow-500/5",
        };
      case "orange":
        return {
          border: "group-hover:border-orange-500/50",
          icon: "text-orange-400 group-hover:text-orange-300",
          iconBg: "group-hover:bg-orange-500/20",
          title: "group-hover:text-orange-400",
          badge: "group-hover:border-orange-500/30 group-hover:bg-orange-500/10 group-hover:text-orange-200",
          glow: "bg-orange-500/5",
        };
      case "fuchsia":
        return {
          border: "group-hover:border-fuchsia-500/50",
          icon: "text-fuchsia-400 group-hover:text-fuchsia-300",
          iconBg: "group-hover:bg-fuchsia-500/20",
          title: "group-hover:text-fuchsia-400",
          badge: "group-hover:border-fuchsia-500/30 group-hover:bg-fuchsia-500/10 group-hover:text-fuchsia-200",
          glow: "bg-fuchsia-500/5",
        };
      default:
        return {
          border: "group-hover:border-primary/50",
          icon: "text-primary group-hover:text-primary",
          iconBg: "group-hover:bg-primary/20",
          title: "group-hover:text-primary",
          badge: "group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary-foreground",
          glow: "bg-primary/5",
        };
    }
  };

  return (
    <Section
      id="skills"
      className="relative bg-secondary/30 overflow-hidden py-24 sm:py-32"
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
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Competencies
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto mb-6 animate-gradient bg-[length:200%_auto]" />
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            A curated stack of technologies and methodologies I use to build scalable, high-performance digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const themeClasses = getThemeClasses(category.theme);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group relative h-full"
              >
                <div 
                    className={`h-full relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${themeClasses.border}`}
                >
                    {/* Hover Glow Background - Subtle */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${themeClasses.glow} pointer-events-none`} />

                    <div className="relative z-10">
                        <div className="mb-6 flex items-center justify-between">
                            <div className={`p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group-hover:scale-110 ${themeClasses.icon} ${themeClasses.iconBg}`}>
                                <IconComponent className="h-8 w-8" />
                            </div>
                        </div>

                        <h3 className={`text-xl font-bold mb-2 text-foreground transition-colors duration-300 ${themeClasses.title}`}>
                            {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                           {category.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className={`bg-white/5 text-muted-foreground border border-white/10 transition-all duration-300 ${themeClasses.badge}`}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
