import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

export function FloatingLinkedIn() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jabezsamson/", "_blank");
  };

  return (
    <div className="fixed bottom-[100px] right-6 md:bottom-[100px] md:right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={openLinkedIn}
        className="bg-[#0A66C2] hover:bg-[#004182] w-[48px] h-[48px] rounded-full shadow-lg cursor-pointer border-2 border-white flex items-center justify-center"
        aria-label="Connect on LinkedIn"
      >
        <FaLinkedin className="h-7 w-7 text-white" />
      </motion.button>
    </div>
  );
}
