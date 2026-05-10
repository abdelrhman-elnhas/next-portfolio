"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4"
          >
            My <span className="text-primary">Journey</span>
          </motion.h2>
          <p className="text-white/50 uppercase tracking-[0.2em] text-[10px] sm:text-sm">Professional Experience</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 w-[10px] h-[10px] bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,61,0,0.8)] z-10" />

                <div className="w-full md:w-[48%] pl-6 sm:pl-8 md:pl-0">
                  <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl relative">
                    <span className="text-primary text-xs sm:text-sm font-bold mb-2 block">{exp.period}</span>
                    <h3 className="text-lg sm:text-2xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-xs sm:text-base text-white/60 font-medium mb-4">{exp.company}</h4>
                    <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-6 italic line-clamp-3 sm:line-clamp-none">
                      &quot;{exp.description}&quot;
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-white/5 rounded-lg text-[10px] sm:text-xs font-medium text-white/40 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
