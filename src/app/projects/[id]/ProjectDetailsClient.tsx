"use client";

import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/projectService";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FiExternalLink, FiCalendar, FiTag, FiLayers } from "react-icons/fi";
import { BiLoaderAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetailsClient({ id }: { id: string }) {
  const router = useRouter();

  const { data: project, isLoading, error } = useQuery({
    queryKey: ["project", id],
    queryFn: () => projectService.getProjectById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BiLoaderAlt className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <button onClick={() => router.back()} className="px-8 py-3 bg-primary rounded-full">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
          >
            <HiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-white/20">
                  {project.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold font-outfit mb-8 leading-tight">
                {project.title}
              </h1>

              <div className="prose prose-invert max-w-none mb-12">
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Right: Image & Actions */}
            <div className="flex flex-col gap-8">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
              >
                <Image
                  src={project.image || "/images/placeholder.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

              {/* Stats & Actions Card */}
              <div className="glass-card p-8 rounded-[2.5rem] border border-white/5">
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Year</span>
                    <span className="text-sm font-bold text-white">2024</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Category</span>
                    <span className="text-sm font-bold text-white line-clamp-1">{project.category}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Status</span>
                    <span className="text-sm font-bold text-primary">Completed</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-primary/20 group"
                    >
                      Browse Project
                      <HiArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  )}
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      target="_blank"
                      className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
                    >
                      Source Code
                      <FaGithub size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-24">
            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-black mb-6">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-black mb-6">Challenge & Solution</h4>
              <p className="text-white/60 leading-relaxed">
                This project was aimed at solving complex user interaction challenges by implementing a state-of-the-art UI system. Through rigorous testing and iterative design, we achieved significant improvements in user engagement.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
