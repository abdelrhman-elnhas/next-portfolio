"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/projectService";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { BiLoaderAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["", "Web", "UI/UX", "Graphic Design"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects", filter],
    queryFn: () => projectService.getProjectsByCategory(filter),
  });

  const totalPages = projects ? Math.ceil(projects.length / itemsPerPage) : 0;
  const paginatedProjects = projects?.slice((page - 1) * itemsPerPage, page * itemsPerPage) || [];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group">
              <HiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl">
              Explore my full portfolio of work, from industrial software solutions to creative brand identities.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setPage(1);
                  }}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-bold transition-all",
                    filter === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  )}
                >
                  {cat === "" ? "All Projects" : cat}
                </button>
              ))}
            </div>
            
            <div className="text-white/40 text-sm font-medium">
              Showing {paginatedProjects.length} of {projects?.length || 0} projects
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-40">
              <BiLoaderAlt className="w-12 h-12 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <AnimatePresence mode="popLayout">
                {paginatedProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link href={`/projects/${project.id}`} className="group block h-full">
                      <div className="glass-card rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                        <div className="relative h-72 overflow-hidden">
                          <Image
                            src={project.image || "/images/placeholder.jpg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-10 flex-grow flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-white/50 leading-relaxed line-clamp-3 mb-8">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            {(project.tags || []).slice(0, 3).map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-white/40 border border-white/5 uppercase tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                              View Project <HiArrowRight size={18} className="text-primary" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-4 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <HiArrowLeft size={24} />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={cn(
                      "w-12 h-12 rounded-full font-bold transition-all",
                      page === i + 1
                        ? "bg-primary text-white"
                        : "bg-white/5 text-white/40 hover:bg-white/10"
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-4 bg-white/5 rounded-full disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <HiArrowRight size={24} />
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
