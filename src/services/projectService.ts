import axios from "axios";

const API_BASE_URL = "https://darkgrey-jackal-710111.hostingersite.com/api/get";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url?: string;
  github_url?: string;
  tags?: string[];
  created_at?: string;
  content?: string;
}

const normalizeProject = (p: any): Project => ({
  ...p,
  // Ensure image path starts with / or is a full URL
  image: !p.image ? "/images/placeholder.jpg" :
    (p.image.startsWith("/") || p.image.startsWith("http")
      ? p.image
      : `/images/${p.image}${p.image.includes(".") ? "" : ".jpg"}`)
});

export const projectService = {
  async getAllProjects(): Promise<Project[]> {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return (response.data || []).map(normalizeProject);
  },

  async getProjectsByCategory(category: string): Promise<Project[]> {
    let endpoint = category === "" ? "all" : category;
    if (endpoint === "UI/UX") endpoint = "UI-UX";
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return (response.data || []).map(normalizeProject);
  },

  async getProjectById(id: string | number): Promise<Project> {
    const all = await this.getAllProjects();
    const project = all.find(p => p.id.toString() === id.toString());
    if (!project) throw new Error("Project not found");
    return project; // Already normalized by getAllProjects
  }
};
