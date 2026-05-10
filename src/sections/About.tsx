"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { personalInfo, stats } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-6 sm:mb-8 text-center lg:text-left">
              Elevating Brands through <br />
              <span className="text-gradient">Exceptional Design</span>
            </h2>
            <p className="text-base sm:text-xl text-white/70 leading-relaxed mb-8 text-center lg:text-left">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center lg:justify-start">
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/20 group text-sm sm:text-base"
              >
                Download My CV
                <FiDownload size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl text-center flex flex-col justify-center items-center group"
              >
                <span className="text-3xl sm:text-5xl font-bold font-outfit mb-2 text-gradient group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
