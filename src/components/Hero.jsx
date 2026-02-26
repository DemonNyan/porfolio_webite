import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

import profileImg from "../img/profile.jpg";
import ReactIcon from "../icons/React_dark.svg";
import NodeIcon from "../icons/nodejs.svg";
import MongoIcon from "../icons/MongoDB_dark.svg";
import ExpressIcon from "../icons/Express.js_light.svg";
import TailwindIcon from "../icons/tailwindcss.svg";

const Hero = () => {
  const floatingTech = [
    { img: ReactIcon, pos: "top-0 -left-12", label: "React" },
    { img: NodeIcon, pos: "top-5 -right-16", label: "Node" },
    { img: MongoIcon, pos: "bottom-10 -left-5", label: "MongoDB" },
    { img: ExpressIcon, pos: "bottom-10 -right-12", label: "Express" },
    { img: TailwindIcon, pos: "-top-10 right-1/4", label: "Tailwind" },
  ];

  // စာသားတွေအတွက် Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content with Framer Motion */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]"
          >
            Hi, I'm <span className="text-blue-600">NyanLinHtet</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-xl"
          >
            A MERN Stack Developer dedicated to building high-quality web
            solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-lg"
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image with Floating Tech Logos */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            {/* Main Profile Image with Morph Animation */}
            <div className="w-full h-full rounded-[3.5rem] animate-morph overflow-hidden border-[12px] border-slate-50 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Logo Images (Framer Motion) */}
            {floatingTech.map((item, i) => (
              <motion.div
                key={i}
                className={`absolute ${item.pos} group`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0], // Floating Animation ကို ဒီမှာပဲ ထည့်လိုက်ပါတယ်
                }}
                transition={{
                  opacity: { delay: 1 + i * 0.2 },
                  scale: { delay: 1 + i * 0.2 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  },
                }}
              >
                <div className="p-3 bg-white rounded-2xl shadow-xl border border-slate-50 hover:scale-125 transition-transform cursor-help">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
