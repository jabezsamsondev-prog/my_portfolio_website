import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

export function Inspiration() {
  return (
    <Section
      id="inspiration"
      className="relative bg-gradient-to-b from-primary/5 via-accent/5 to-background overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-accent/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg shadow-primary/30"
          >
            <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>

          {/* Title */}
          <h2 className="text-[32px] font-extrabold mb-6">
            <span
              className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent animate-gradient"
              style={{ backgroundSize: "200% auto" }}
            >
              Fuel Behind the Code
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-6 text-sm md:text-sm leading-relaxed text-foreground/90">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Eminem's music has shaped the way I work more than anything else.
              His honesty, discipline, and "get up no matter what" energy taught
              me how to push through tough days and show up even when it isn't
              easy. Songs like{" "}
              <span className="text-primary font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-1">
                Beautiful Pain
              </span>
              ,{" "}
              <span className="text-primary font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-1">
                Survival
              </span>
              , and{" "}
              <span className="text-primary font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-1">
                Lighters
              </span>{" "}
              remind me to stay hungry, stay grounded, and keep fighting for
              better — one line of code at a time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="italic"
            >
              I'm not the best, but I'm someone who keeps going, keeps learning,
              and keeps improving — because that's the mindset his music built
              in me. And that drive is what I bring into every project I work
              on.
            </motion.p>
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 h-1 w-32 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto"
          />
        </motion.div>
      </div>
    </Section>
  );
}
