"use client";

import { motion } from "framer-motion";
import { skills } from "@/constants/data";
import Marquee from "react-fast-marquee";

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const otherSkills = skills.filter((s) => s.category !== "Frontend");

  return (
    <section id="skills" className="py-20 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 text-gradient"
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-white/60"
        >
          Technologies I use to bring ideas to life
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-3 sm:p-6 glass-card rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-4 group hover:border-primary/40 transition-all duration-500"
          >
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img
                src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                alt={skill.name}
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=000&color=fff`;
                }}
              />
            </div>
            <span className="font-bold text-[10px] sm:text-sm tracking-wide text-white/80 group-hover:text-white transition-colors text-center">
              {skill.name}
            </span>

            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
