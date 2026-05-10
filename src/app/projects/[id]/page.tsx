import { Metadata } from "next";
import { projectService } from "@/services/projectService";
import ProjectDetailsClient from "./ProjectDetailsClient";

export async function generateStaticParams() {
  const projects = await projectService.getAllProjects();
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProjectDetailsClient id={id} />;
}
