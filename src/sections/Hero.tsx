"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/constants/data";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaXTwitter, FaBehance, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-10 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] sm:text-sm font-semibold tracking-wider uppercase mb-4 sm:mb-6 inline-block">
              Available for New Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-outfit leading-tight mb-4"
          >
            Hello, I&apos;m <br />
            <span className="text-gradient">{personalInfo.firstName}</span>
            <span className="sr-only"> {personalInfo.lastName} - Senior Frontend Engineer & Software Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mb-6 sm:mb-8 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform active:scale-95 group"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex justify-center lg:justify-start gap-6"
          >
            <Link href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </Link>
            <Link href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FaXTwitter size={24} />
            </Link>
            <Link href={personalInfo.socials.behance} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FaBehance size={24} />
            </Link>
            <Link href={personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <FaWhatsapp size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[300px] sm:h-[500px] lg:h-[680px] flex justify-center items-center"
        >
          <div
            className="relative w-full h-full max-w-md lg:max-w-xl group"
            style={{
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-white/10 rounded-full animate-spin-slow [animation-direction:reverse] pointer-events-none" />

            <Image
              src="/images/asd.png"
              alt={personalInfo.name}
              fill
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-35 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
