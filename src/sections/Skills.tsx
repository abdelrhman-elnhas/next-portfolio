"use client";

import { motion } from "framer-motion";
import { skills } from "@/constants/data";
import Marquee from "react-fast-marquee";

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const otherSkills = skills.filter((s) => s.category !== "Frontend");

  return (
    <section id="skills" className="py-20 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-gradient"
        >
          My Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60"
        >
          Technologies I use to bring ideas to life
        </motion.p>
      </div>

      {/* <div className="mb-20">
        <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="mx-8 px-8 py-4 glass rounded-2xl flex items-center gap-3 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center font-bold text-primary">
                {skill.name[0]}
              </div>
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 glass-card rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-primary/40 transition-all duration-500"
          >
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img
                src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                alt={skill.name}
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=000&color=fff`;
                }}
              />
            </div>
            <span className="font-bold text-sm tracking-wide text-white/80 group-hover:text-white transition-colors">
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
