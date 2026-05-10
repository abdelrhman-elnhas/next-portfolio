export const personalInfo = {
  name: "Abdelrhman Elnhas",
  firstName: "Abdelrhman",
  lastName: "Elnhas",
  title: "Senior Frontend Engineer & UI/UX Designer",
  description: "Frontend Engineer building premium, high-performance web experiences with React & Next.js — combining clean architecture, modern UI/UX, and smooth interactive design to create products users remember.",
  about: "Frontend Software Engineer with 2+ years of experience in crafting engaging, interactive user interfaces using Vanilla JavaScript, React JS and Next JS . With a strong foundation in Graphic Design and UI/UX Design, blending creativity with technical proficiency. A dedicated professional with a profound passion for technology and a commitment to programming excellence",
  roles: ["Frontend Developer", "UI / UX Designer", "Graphic Designer"],
  email: "abdelrhman.elnhas@gmail.com",
  phone: "+20 112 769 8622",
  location: "Cairo, Egypt",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdelrhman-elnhas",
    github: "https://www.github.com/abdelrhman-elnhas",
    behance: "https://www.behance.net/_ae_studio",
    twitter: "https://www.twitter.com/a_elnhas1",
    whatsapp: "https://wa.me/+201127698622",
  }
};

export const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export const skills = [
  { name: "React JS", category: "Frontend", icon: "react" },
  { name: "Next.js 16", level: 90, category: "Frontend", icon: "nextdotjs" },
  { name: "Vue JS", level: 60, category: "Frontend", icon: "vuedotjs" },
  { name: "JavaScript", level: 85, category: "Frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "Frontend", icon: "typescript" },
  { name: "CSS", level: 98, category: "Frontend", icon: "css" },
  { name: "Tailwind CSS", level: 98, category: "Frontend", icon: "tailwindcss" },
  { name: "Bootstrap CSS", level: 98, category: "Frontend", icon: "bootstrap" },
  { name: "Framer Motion", level: 90, category: "Animation", icon: "framer" },
  { name: "Figma", level: 92, category: "Design", icon: "figma" },
  { name: "Redux Toolkit", level: 85, category: "State", icon: "redux" },
  { name: "Tanstack Query", level: 85, category: "State", icon: "tanstack" },
  { name: "React Hook Form", level: 85, category: "State", icon: "reacthookform" },
  { name: "SASS", level: 90, category: "Style", icon: "sass" },
  { name: "Github", level: 90, category: "Style", icon: "github" },
  { name: "Laravel", level: 60, category: "Backend", icon: "laravel" },
  { name: "Postman", level: 90, category: "Tools", icon: "postman" },
  { name: "Cursor", level: 90, category: "Tools", icon: "cursor" },
];

export const experiences = [
  {
    company: "Ultra Progress",
    role: "Frontend Engineer",
    period: "2023 - 2024",
    description: "Led a cross-functional team in delivering 11 web and 5 mobile applications, building scalable high-performance React solutions optimized for SEO, accessibility, and exceptional user experience.",
    technologies: ["React JS", "Javascript", "Laravel", "Redux Toolkit", "Figma"]
  },
  {
    company: "Master Code",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description: "Delivered 11+ web applications using Vanilla JavaScript and Laravel, improved large-scale React applications by resolving API integration issues, and designed multiple web and mobile interfaces with Figma and Adobe creative tools.",
    technologies: ["React", "Javascript", "Bootstrap", "CSS", "SASS", "Figma", "Adobe XD"]
  },
  {
    company: "Freelance",
    role: "UI/UX Designer",
    period: "2022 - Present",
    description: "Designed modern, user-centered web and mobile interfaces for freelance clients, transforming ideas into intuitive user experiences with strong visual identity, usability, and responsive design principles.",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
  }
];

export const projects = [
  {
    id: "saas-dashboard",
    title: "Nexora SaaS Dashboard",
    description: "A comprehensive analytics dashboard for SaaS products with real-time data visualization, user management, and automated reporting.",
    category: "Web",
    image: "/images/Proj36.jpg",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    demo: "https://demo.nexora.com",
    github: "https://github.com/abdelrhman-elnhas/nexora",
    featured: true
  },
  {
    id: "erp-system",
    title: "Quantum ERP",
    description: "Enterprise Resource Planning system for manufacturing companies, managing inventory, supply chain, and workforce efficiency.",
    category: "Web",
    image: "/images/Proj37.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Shadcn UI"],
    demo: "https://quantum-erp.com",
    github: "https://github.com/abdelrhman-elnhas/quantum-erp",
    featured: true
  },
  {
    id: "ecommerce-platform",
    title: "LuxeCommerce",
    description: "High-end e-commerce platform for luxury fashion brands, featuring smooth transitions, 3D product previews, and seamless checkout.",
    category: "Web",
    image: "/images/Proj38.jpg",
    tags: ["Next.js", "Three.js", "Stripe", "Tailwind"],
    demo: "https://luxe-commerce.com",
    github: "https://github.com/abdelrhman-elnhas/luxe",
    featured: true
  },
  {
    id: "ai-content-gen",
    title: "SynthAI",
    description: "AI-powered content generation platform that helps marketing teams create high-quality copy and images in seconds.",
    category: "AI",
    image: "/images/Proj39.jpg",
    tags: ["React", "OpenAI API", "Node.js", "Framer Motion"],
    demo: "https://synth-ai.com",
    github: "https://github.com/abdelrhman-elnhas/synth-ai",
    featured: true
  }
];

export const services = [
  {
    title: "Frontend Development",
    description: "Building fast, responsive, and interactive web applications using modern technologies like Next.js and React.",
    icon: "code"
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and aesthetically pleasing user interfaces that provide a seamless user experience.",
    icon: "ui"
  },
  {
    title: "Graphic Design",
    description: "Creating unique visual identities, logos, and digital assets that make your brand stand out.",
    icon: "pen"
  },
  {
    title: "Video Editing",
    description: "Turning raw footage into engaging stories with smooth cuts, dynamic pacing, and cinematic flow that keeps viewers hooked from start to finish.",
    icon: "video"
  },
];

export const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechFlow",
    text: "Abdelrhman is an exceptional developer who combines technical skill with a great eye for design. Our project exceeded expectations.",
    avatar: "/images/AbdelrhmanElnhas.jpg"
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    text: "The motion design work he did for our landing page was incredible. It really helped us stand out from the competition.",
    avatar: "/images/AbdelrhmanElnhas2.jpg"
  }
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "70+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "24/7", label: "Support & Maintenance" },
];
