import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background Image - covers entire section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url(/images/about-bg.png)" }}
        />
        {/* Lighter gradient overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
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
                something imaginary to life. For over 8+ years, that same
                curiosity has evolved into a pursuit of mastery — shaping me
                into a Front-End Software Developer who blends problem-solving,
                critical thinking, design ideology, and engineering precision to
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
                scalable, maintainable, and outcome-driven engineering.
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
                understanding of innovation, teamwork, and the human side of
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
                TypeScript, and exploring the power of Large Language Models
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
                code but building great teams, culture, and products. I value
                clarity, empathy, and accountability — the foundations of
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
                cricket, or travel — moments that help me reset, reflect, and
                return with fresh ideas. I am currently laser-focused on growing
                into a technology leader who codes, mentors, and shapes
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
