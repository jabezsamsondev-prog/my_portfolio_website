import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Animated Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
        {/* Multiple layered waves with different speeds */}
        <svg
          className="absolute bottom-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            fill="rgba(139, 92, 246, 0.1)"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            fill="rgba(236, 72, 153, 0.1)"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ d: "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,245.3C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            fill="rgba(59, 130, 246, 0.1)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] font-bold mb-4">
              Ready to read my story?
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                From the moment I wrote my first line of code, curiosity became
                my north star — the force that guided me from experimenting with
                simple interfaces to architecting dynamic, user-focused web
                solutions. It’s that feeling that drives me when you can bring
                something imaginary to life. For over 8+ years as a self-taught professional, that same
                curiosity has evolved into a pursuit of mastery — shaping me
                into a Front-End Software Developer who blends problem-solving,
                critical thinking, design ideology and engineering precision to
                deliver digital products that make a measurable impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                I've been fortunate throughout my career to be part of
                delivering significant projects involving CRMs, LMSs and
                E-commerce platforms, ensuring every solution not only meets
                technical standards but also aligns with real-world business
                goals. I’ve been actively involved in the entire Software
                Development Lifecycle (SDLC) complemented by my contributions to
                server migrations and post-launch maintenance. My work has
                helped boost system performance by up to 40% and increase
                delivery efficiency by over 25%, reflecting my commitment to
                scalable, maintainable and outcome-driven engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                My journey has also been enriched by experiences that shaped my
                perspective on leadership and collaboration when I was a Tech
                Mentor at RethinkPassion, Bengaluru. I have had the opportunity
                to guide aspiring developers, helping them refine their
                problem-solving mindset and adapt to real-world engineering
                challenges. I also had the privilege of engaging with
                professionals from India’s own Silicon Valley deepening my
                understanding of innovation, teamwork and the human side of
                technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                While my skill set is rooted in ReactJS and modern web
                ecosystems, I am continually advancing toward mastering Next.js,
                TypeScript and exploring the power of Large Language Models
                (LLMs) to shape the future of intelligent, adaptive applications
                in the era of AI. I see technology as an evolving canvas — and
                myself as a lifelong learner, always pushing the boundaries of
                what is possible and not taking ‘No’ for an answer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                What drives me the most is not just writing great and scalable
                code but building great teams, culture and products. I value
                clarity, empathy and accountability — the foundations of
                leadership that inspire others to grow alongside you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-primary/10 rounded-lg p-6 md:p-8"
            >
              <p className="text-dark text-sm md:text-base leading-loose">
                When I am away from my IDE, I usually listen to music, play
                cricket, or travel — moments that help me reset, reflect and
                return with fresh ideas. I am currently laser-focused on growing
                into a technology leader who codes, mentors and shapes
                meaningful digital experiences — one thoughtful product at a
                time.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
