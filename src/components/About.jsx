import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket } from "lucide-react";
import profileImg from "../img/profile.jpg";
const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Decorative Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 border-2 border-dashed border-blue-600/20 rounded-[3rem]"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-2">
            <img
              src={profileImg}
              className="w-full h-[500px] object-cover rounded-[2.5rem]"
              alt="NyanLinHtet Profile"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">
              Focusing on
            </p>
            <p className="text-xl font-black">MERN Stack</p>
          </div>
        </motion.div>

        {/* Right Side: Professional Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">
              An Aspiring Developer <br />
              <span className="text-blue-600">Ready to Build & Learn.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              I have recently completed my **Foundational Web Development**
              journey, specializing in the **MERN Stack**. As an entry-level
              developer, I am deeply passionate about writing clean code and
              building functional web applications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My goal is to apply my technical skills in a professional
              environment while continuously growing and staying updated with
              the latest industry standards.
            </p>
          </div>

          {/* Key Qualities */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-slate-700 text-sm">
                Fast Learner
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600">
                <Code size={24} />
              </div>
              <span className="font-bold text-slate-700 text-sm">
                Modern Tech Stack
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600">
                <Rocket size={24} />
              </div>
              <span className="font-bold text-slate-700 text-sm">
                Self-Motivated
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
