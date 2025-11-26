import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { X } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "+919710601958"; // Replace with your WhatsApp number (including country code, no + or spaces)

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(
      message || "Hi! I found your portfolio and would like to connect."
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
    setIsOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          onClick={() => setIsOpen(true)}
          className="bg-[#25D366] hover:bg-[#1ebe57] w-[48px] h-[48px] rounded-full shadow-lg cursor-pointer border-2 border-white flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7 text-white" />
        </motion.button>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[120]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-background border border-border rounded-lg shadow-2xl z-[130] p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp Chat</h3>
                    <p className="text-xs text-muted-foreground">
                      Start a conversation
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label
                  htmlFor="whatsapp-message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message (Optional)
                </label>
                <textarea
                  id="whatsapp-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi! I found your portfolio and would like to connect."
                  className="w-full h-24 px-3 py-2 bg-secondary border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={openWhatsApp}
                  className="flex-1 px-4 py-2 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Send
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
