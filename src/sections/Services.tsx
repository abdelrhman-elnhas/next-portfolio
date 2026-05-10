"use client";

import { motion } from "framer-motion";
import { services } from "@/constants/data";
import { LuCode, LuPenTool, LuPalette, LuVideo } from "react-icons/lu";

const iconMap: any = {
  code: <LuCode size={40} className="text-red-800" />,
  ui: <LuPenTool size={40} className="text-yellow-200" />,
  pen: <LuPalette size={40} className="text-orange-400" />,
  video: <LuVideo size={40} className="text-red-400" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 sm:mb-6"
          >
            What I&apos;m <span className="text-gradient">Offering</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-16 sm:w-24 h-1 bg-primary rounded-full mb-8"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <div className="scale-75 sm:scale-100 origin-left">
                  {iconMap[service.icon]}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-outfit">{service.title}</h3>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                {service.description}
              </p>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
