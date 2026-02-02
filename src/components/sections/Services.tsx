import { Section } from "../ui/Section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/Card";
import { motion } from "framer-motion";
import {
  Code2,
  BookOpen,
  LayoutTemplate,
  Briefcase,
  Rocket,
} from "lucide-react";

const GeminiIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M12 2C13.2 7 17 10.8 22 12C17 13.2 13.2 17 12 22C10.8 17 7 13.2 2 12C7 10.8 10.8 7 12 2Z" />
  </svg>
);

export function Services() {
  const services = [
    {
      title: "Full-Stack Web Application Development",
      description:
        "Design and develop scalable, secure, and high-performance web applications using modern frontend and backend technologies, tailored to real business needs.",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI-Powered Application Development",
      description:
        "Integrate AI capabilities such as chatbots, automation, intelligent workflows, and data-driven features to enhance user experience and operational efficiency.",
      icon: GeminiIcon,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "No-Code & Low-Code Solutions",
      description:
        "Rapidly create functional web apps, dashboards, and internal tools using no-code and low-code platforms to reduce development time and costs.",
      icon: LayoutTemplate,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Product MVP & Startup Branding Solutions",
      description:
        "Help startups and founders turn ideas into production-ready MVPs with the right tech stack, fast iteration, and future scalability in mind.",
      icon: Rocket,
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Technical Consulting to Non-Tech Businesses",
      description:
        "Provide strategic guidance on product architecture, technology decisions, scalability, and digital transformation aligned with business goals.",
      icon: Briefcase,
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Learning Management System (LMS) Setup and Maintenance",
      description:
        "Build custom LMS platforms for startups, educators, and enterprises with features like course management, user roles, progress tracking, and analytics.",
      icon: BookOpen,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <Section id="services" className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">My Services</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto mb-6 animate-gradient bg-[length:200%_auto]" />
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
            From full-stack engineering and AI integration to strategic technical consulting, I deliver comprehensive digital solutions to build and scale your vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                className="h-full"
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <Card className="h-full flex flex-col border-2 border-primary/20 hover:border-white/60 transition-[border-color,box-shadow] duration-200 ease-out hover:shadow-lg hover:shadow-white/10 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg text-white`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold mt-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed text-foreground/80">
                      {service.description}
                    </CardDescription>
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
