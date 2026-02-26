import { motion } from "framer-motion";
import ReactIcon from "../icons/React_dark.svg";
import NodeIcon from "../icons/nodejs.svg";
import MongoIcon from "../icons/MongoDB_dark.svg";
import ExpressIcon from "../icons/Express.js_light.svg";
import TailwindIcon from "../icons/tailwindcss.svg";
import MERNIcon from "../icons/mern.jpg";

const Skills = () => {
  const mernSkills = [
    {
      title: "MongoDB",
      desc: "NoSQL Database, Schema Design & Aggregation.",
      img: MongoIcon,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Express.js",
      desc: "Fast & Minimalist Backend Web Framework.",
      img: ExpressIcon,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "React",
      desc: "Modern Frontend Library for Interactive UIs.",
      img: ReactIcon,
      color: "text-sky-500",
      bgColor: "bg-sky-50",
    },
    {
      title: "Node.js",
      desc: "Scalable Server-side JavaScript Runtime.",
      img: NodeIcon,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Tailwind CSS",
      desc: "Utility-first CSS Framework for Rapid Design.",
      img: TailwindIcon,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      title: "MERN Stack",
      desc: "Full-stack development from Database to UI.",
      img: MERNIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  // Animation Variants for Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Card တစ်ခုချင်းစီကို 0.1s ခြားပြီး ပြမယ်
      },
    },
  };

  // Card တစ်ခုချင်းစီအတွက် Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            My Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mernSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 cursor-default"
            >
              <div
                className={`w-20 h-20 rounded-3xl ${skill.bgColor} ${skill.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-inner`}
              >
                <img
                  src={skill.img}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  alt={skill.title}
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {skill.title}
              </h3>

              <p className="text-slate-500 leading-relaxed font-medium">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
