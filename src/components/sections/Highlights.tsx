import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { SiQuora } from "react-icons/si";

export function Highlights() {
  const highlights = [
    {
      icon: Briefcase,
      value: "Tech Mentor",
      label: "Rethink Passion",
      description: "Guided aspiring developers in their learning journey",
      color: "from-primary/20 to-accent/20",
      iconColor: "text-primary",
    },
    {
      icon: Award,
      value: "Intern",
      label: "Google Device Lab",
      description: "A hands-on workshop exploring Entrepreneurship",
      color: "from-accent/20 to-purple-500/20",
      iconColor: "text-accent",
    },
    {
      icon: SiQuora,
      value: "644K+",
      label: "Answer Views",
      platform: "Quora",
      color: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-400",
    },
  ];

  const stats = [
    {
      icon: GraduationCap,
      value: "Bachelor of Computer Science and Engineering",
      label: "Loyola Institute of Technology | Chennai",
      platform: "2013 - 2017",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: BookOpen,
      value: "Full Stack Development Job Bootcamp",
      label: "Coding Ninjas",
      platform: "Pursuing",
      color: "from-purple-500/20 to-primary/20",
      iconColor: "text-purple-300",
    },
  ];

  return (
    <section
      id="highlights"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] font-bold mb-4">Education and Accolades</h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-xs md:text-sm">
              A snapshot of my professional journey, accolades, and continuous growth.
            </p>
          </motion.div>

          {/* Main Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-primary/10 bg-secondary/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content - Vertical stacked layout */}
                <div className="relative z-10">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${highlight.color} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <highlight.icon className={`w-6 h-6 ${highlight.iconColor}`} />
                  </motion.div>
                  <div className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                    {highlight.value}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-foreground/90 mb-1">{highlight.label}</p>
                  {highlight.platform && (
                    <p className="text-xs text-muted-foreground/80">{highlight.platform}</p>
                  )}
                  {highlight.description && (
                    <p className="text-xs text-muted-foreground/80 mt-2">{highlight.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (highlights.length * 0.1) + (index * 0.1) }}
                className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${stat.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Content - All stat cards use same large style */}
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xl md:text-2xl font-bold mb-1.5 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-foreground/90 mb-1">{stat.label}</p>
                      <p className="text-xs text-muted-foreground/80">{stat.platform}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
