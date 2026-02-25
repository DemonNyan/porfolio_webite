import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialVariants = {
    hover: { y: -5, scale: 1.1, color: "#60a5fa" }, // blue-400
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 relative overflow-hidden">
      {/* Background Decor - အလင်းဝိုင်းလေး */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* ဘယ်ဘက်ခြမ်း - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-black text-white mb-3 tracking-tighter">
              NyanLin<span className="text-blue-500">Htet.</span>
            </h2>
            <p className="max-w-xs text-slate-400 leading-relaxed">
              An entry-level MERN Stack Developer building high-quality web
              solutions with passion and precision.
            </p>
          </motion.div>

          {/* အလယ် - Social Links */}
          <div className="flex items-center gap-6">
            {[
              {
                icon: <Github size={24} />,
                href: "https://github.com/DemonNyan",
              },
              {
                icon: <Linkedin size={24} />,
                href: "https://linkedin.com/in/your-profile",
              },
              {
                icon: <Facebook size={24} />,
                href: "https://facebook.com/your-page",
              },
              {
                icon: <Mail size={24} />,
                href: "mailto:your-email@example.com",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                className="p-3 bg-slate-800 rounded-2xl text-slate-300 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* ညာဘက်ခြမ်း - Back to Top */}
        </div>

        <hr className="border-slate-800/50 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
          <p>© {currentYear} NyanLinHtet. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
