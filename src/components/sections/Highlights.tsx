import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export function Highlights() {
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
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/30"
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

      {/* Gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
              Education
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-purple-400 to-secondary rounded-full mx-auto mb-6 animate-gradient bg-[length:200%_auto]" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              My academic background and continuous learning journey.
            </p>
          </motion.div>

          {/* Bento Grid Layout - Just the 2 stats now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Bachelor's Degree - 50% width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 md:col-span-1 lg:col-span-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stats[0].color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${stats[0].color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              <div className="relative z-10 flex items-start gap-5">
                <motion.div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stats[0].color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {(() => {
                    const Icon = stats[0].icon;
                    return <Icon className={`w-7 h-7 ${stats[0].iconColor}`} />;
                  })()}
                </motion.div>
                <div className="flex-1">
                  <div className="text-lg md:text-xl font-bold mb-1.5 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                    {stats[0].value}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-foreground/90 mb-1">
                    {stats[0].label}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {stats[0].platform}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bootcamp - 50% width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-md p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 md:col-span-1 lg:col-span-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stats[1].color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${stats[1].color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              <div className="relative z-10 flex items-start gap-5">
                <motion.div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stats[1].color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {(() => {
                    const Icon = stats[1].icon;
                    return <Icon className={`w-7 h-7 ${stats[1].iconColor}`} />;
                  })()}
                </motion.div>
                <div className="flex-1">
                  <div className="text-xl md:text-xl font-bold mb-1.5 bg-gradient-to-r from-primary via-accent to-purple-500 bg-clip-text text-transparent">
                    {stats[1].value}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-foreground/90 mb-1">
                    {stats[1].label}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {stats[1].platform}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
