import { motion } from "framer-motion";
import { ExternalLink, Award, CheckCircle2 } from "lucide-react";
import CertificateImg from "../img/Certificate.jpg";

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* ခေါင်းစဉ်ပိုင်း */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm"
          >
            <Award size={32} />
          </motion.div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            My Certification
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* ၁။ ပုံသီးသန့် အပိုင်း */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-2xl"
          >
            <img
              src={CertificateImg} // သင့် Certificate ပုံထည့်ပါ
              alt="Certificate"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* ပုံပေါ်က Hover Effect */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* ၂။ စာသားသီးသန့် အပိုင်း */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-slate-50 rounded-[2rem] p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-3 uppercase tracking-wider">
                  <CheckCircle2 size={18} />
                  Verified Professional
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                  Full Stack Web Development Professional Certificate
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Professional certifications and credentials earned through
                  continuous learning and dedication. This certification
                  validates my expertise in building modern, scalable web
                  applications.
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <motion.a
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" // Link ထည့်ရန်
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                >
                  View Credential <ExternalLink size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
