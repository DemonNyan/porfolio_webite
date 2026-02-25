import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // pageYOffset ထက် window.scrollY က ပိုပြီး modern ဖြစ်ပါတယ်
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[110]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#1d4ed8", // blue-700
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="bg-blue-600 p-4 rounded-2xl text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-colors group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;
