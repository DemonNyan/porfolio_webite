import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      // Hover လုပ်ရင် အပေါ်ကို ကြွတက်လာပြီး အရိပ် (shadow) ပိုကြီးလာမယ်
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-white border border-slate-200 rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image Area */}
      <div className="relative h-60 bg-slate-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Icons for GitHub/Demo over Image (Optional Layout) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/90 backdrop-blur-md rounded-xl text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
          >
            <Github size={18} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur-md rounded-xl text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-lg"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Tags - အောက်ဆုံးမှာ တန်းစီနေအောင် mt-auto သုံးထားပါတယ် */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
