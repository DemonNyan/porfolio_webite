import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // .env ထဲကနေ Key တွေကို ဆွဲထုတ်သုံးခြင်း
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setIsSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error.text);
        setLoading(false);
        alert("Something went wrong. Please try again.");
      },
    );
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-slate-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-slate-500">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="w-full px-6 py-4 rounded-2xl bg-white border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg ${
              isSent
                ? "bg-green-500 shadow-green-100 cursor-default"
                : "bg-blue-600 shadow-blue-100 hover:bg-blue-700 active:scale-95"
            } text-white`}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : isSent ? (
              <>
                Sent Successfully <CheckCircle size={24} />
              </>
            ) : (
              <>
                Send Message <Send size={24} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
