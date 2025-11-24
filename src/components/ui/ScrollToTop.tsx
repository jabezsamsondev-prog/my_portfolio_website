import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setIsVisible(scrollTop > 300)
      setScrollProgress(scrollPercent)
    }

    handleScroll() // Call once on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50"
        >
          <div className="relative w-[44px] h-[44px]">
            {/* Circular Progress SVG */}
            <svg
              className="absolute top-0 left-0 -rotate-90 w-full h-full"
              viewBox="0 0 44 44"
            >
              {/* Background circle track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="#eee"
                strokeWidth="4"
                fill="none"
                opacity="0.15"
              />
              {/* Progress circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="#eee"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                opacity="1"
              />
            </svg>
            
            {/* Button - Purple center */}
            <button
              onClick={scrollToTop}
              className="absolute top-[6px] left-[6px] w-[32px] h-[32px] bg-purple-700 hover:bg-purple-600 text-white rounded-full shadow-lg transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
