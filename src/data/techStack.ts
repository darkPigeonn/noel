export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  level: "primary" | "secondary";
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "primary" },
      { name: "Nuxt.js", level: "primary" },
      { name: "React", level: "primary" },
      { name: "Vue.js", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "Tailwind CSS", level: "primary" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "primary" },
      { name: "Express.js", level: "primary" },
      { name: "REST API", level: "primary" },
      { name: "Firebase", level: "primary" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: "primary" },
      { name: "Dart", level: "primary" },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "PostgreSQL", level: "primary" },
      { name: "Prisma", level: "primary" },
      { name: "Firebase Firestore", level: "primary" },
      { name: "Redis", level: "secondary" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    items: [
      { name: "PM2", level: "primary" },
      { name: "VPS Management", level: "primary" },
      { name: "Domain & DNS", level: "primary" },
      { name: "CI/CD", level: "secondary" },
      { name: "Docker", level: "secondary" },
    ],
  },
];

