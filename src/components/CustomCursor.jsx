import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {/* ၁။ အလယ်က အစက်အသေးလေး (Mouse နဲ့ ကပ်ပါလာမည်) */}
      <motion.div
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 800,
          mass: 0.1,
        }}
        className="fixed w-2 h-2 bg-white rounded-full z-[10000] pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      />

      {/* ၂။ အပြင်က အဝိုင်းလေး (အိအိလေး နောက်က လိုက်လာမည်) */}
      <motion.div
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 150,
          mass: 0.6,
        }}
        className="fixed w-8 h-8 border border-blue-500 rounded-full z-[9999] pointer-events-none"
        style={{
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          backdropFilter: "blur(1px)",
        }}
      />
    </>
  );
};

export default CustomCursor;
