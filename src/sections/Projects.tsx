"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/projectService";

const categories = ["", "Web", "UI/UX", "Graphic Design"];

export default function Projects() {
  const [filter, setFilter] = useState("");

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects", filter],
    queryFn: () => projectService.getProjectsByCategory(filter),
  });

  const featuredProjects = projects?.slice(0, 6) || [];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl">
              A selection of my best work, spanning web development, UI/UX design, and creative solutions.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap",
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                )}
              >
                {cat === "" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <BiLoaderAlt className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">
            Error loading projects. Please try again.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/projects/${project.id}`} className="group block">
                    <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video sm:h-64 overflow-hidden">
                        <Image
                          src={project.image || "/images/placeholder.jpg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="p-5 sm:p-8 flex-grow flex flex-col">
                        <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-xs sm:text-sm line-clamp-2 mb-4 sm:mb-6">
                          {project.description}
                        </p>

                        <div className="pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                          <span className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                            View Project <HiArrowRight size={16} className="text-teritary" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 sm:mt-20 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                View More Projects <HiArrowRight size={20} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
