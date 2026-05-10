"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold font-outfit mb-6 sm:mb-8">
              Let&apos;s build something <br />
              <span className="text-gradient">Extraordinary</span> together.
            </h2>
            <p className="text-base sm:text-xl text-white/50 mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0">
              Have a project in mind? Reach out and let&apos;s talk about how I can help you achieve your goals.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <FiMail className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-sm text-white/40 uppercase tracking-widest mb-1">Email Me</span>
                  <span className="text-base sm:text-xl font-semibold break-all">{personalInfo.email}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-secondary transition-colors shrink-0">
                  <FiPhone className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-sm text-white/40 uppercase tracking-widest mb-1">Call Me</span>
                  <span className="text-base sm:text-xl font-semibold">{personalInfo.phone}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <FiMapPin className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="block text-[10px] sm:text-sm text-white/40 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-base sm:text-xl font-semibold">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 relative"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setResult(null);

                const formData = new FormData(e.currentTarget);

                try {
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });
                  const data = await response.json();

                  if (data.success) {
                    setResult("success");
                    (e.target as HTMLFormElement).reset();
                  } else {
                    setResult("error");
                  }
                } catch (err) {
                  setResult("error");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    autoComplete="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-primary transition-colors text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-primary transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-primary transition-colors text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                />
              </div>

              <div className="relative pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <FiSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {result === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-full left-0 right-0 mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 text-center text-xs font-medium"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                  {result === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-full left-0 right-0 mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center text-xs font-medium"
                    >
                      Something went wrong.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/40 blur-[100px] sm:blur-[120px] rounded-full -z-10" />
    </section>
  );
}
