import {
  Globe,
  Building2,
  LayoutDashboard,
  Calculator,
  Users,
  Smartphone,
  Zap,
} from "lucide-react";

export interface Service {
  id: string;
  icon: typeof Globe;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "web-apps",
    icon: Globe,
    title: "Custom Web Applications",
    problem:
      "Your business relies on generic tools that don't fit your actual workflow, slowing down operations and creating data silos.",
    solution:
      "I build tailored web applications designed around your specific processes — from dashboards to complex multi-role platforms.",
    benefit:
      "A system that fits your team like a glove, reduces manual work, and scales with your growth.",
    technologies: ["Next.js", "Nuxt", "Vue", "React", "Node.js"],
  },
  {
    id: "erp-systems",
    icon: Building2,
    title: "ERP & Internal Systems",
    problem:
      "Managing operations across departments with spreadsheets and disconnected tools leads to errors, delays, and zero visibility.",
    solution:
      "I develop integrated ERP systems that connect departments — from inventory to procurement, reporting to user management.",
    benefit:
      "One unified system that gives management real-time visibility and teams a streamlined workflow.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    id: "cms-builder",
    icon: LayoutDashboard,
    title: "CMS with Page Builder",
    problem:
      "Your marketing team can't update the website without bothering developers, causing bottlenecks and outdated content.",
    solution:
      "I build custom CMS platforms with drag-and-drop page builders, giving your team full control over content and layout.",
    benefit:
      "Marketing autonomy. Update pages, create landing pages, and manage content — no code required.",
    technologies: ["Next.js", "Vue", "Firebase", "REST API"],
  },
  {
    id: "finance-systems",
    icon: Calculator,
    title: "Financial & Accounting Systems",
    problem:
      "Financial reporting is manual, error-prone, and takes days. Reconciliation between systems is a nightmare.",
    solution:
      "I build financial systems with automated calculations, multi-period reporting, journal entries, and audit trails.",
    benefit:
      "Accurate financials on demand. Less manual work, fewer errors, and reports ready when you need them.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    id: "hr-attendance",
    icon: Users,
    title: "Attendance, HR & Payroll Systems",
    problem:
      "Tracking attendance, managing leave, and calculating payroll manually is time-consuming and error-prone.",
    solution:
      "I develop HR systems with attendance tracking, leave management, payroll calculation, and employee self-service portals.",
    benefit:
      "Automated HR processes that save hours of admin work every pay period and keep employees informed.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Firebase"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Applications",
    problem:
      "Your users need access on the go, but building separate iOS and Android apps doubles your cost and timeline.",
    solution:
      "I build cross-platform mobile apps with Flutter that run natively on both platforms from a single codebase.",
    benefit:
      "One development effort, two platforms. Native performance with faster delivery and lower cost.",
    technologies: ["Flutter", "Firebase", "REST API"],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation & Integration",
    problem:
      "Repetitive tasks eat up your team's time. Systems don't talk to each other, creating manual data entry bottlenecks.",
    solution:
      "I build automated workflows — WhatsApp bots for notifications, API integrations between systems, and scheduled processes.",
    benefit:
      "Less repetitive work, fewer human errors, and systems that communicate seamlessly.",
    technologies: ["Node.js", "Firebase", "WhatsApp API", "REST API"],
  },
];

