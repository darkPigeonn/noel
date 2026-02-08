export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "student-admission",
    title: "Student Admission System",
    category: "Education",
    problem:
      "A private school managed student admissions through paper forms and spreadsheets, leading to lost documents, duplicate entries, and weeks of processing delays during enrollment season.",
    solution:
      "Built an end-to-end digital admission platform with online registration, document uploads, automated screening, interview scheduling, and real-time status tracking for parents.",
    impact:
      "Reduced admission processing time by 70%. Eliminated paper forms entirely. Parents received instant updates, and staff could manage 3x more applications per season.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    featured: true,
  },
  {
    id: "boarding-finance",
    title: "Boarding School Finance System",
    category: "Finance & Education",
    problem:
      "A boarding school with 500+ students tracked tuition payments, operational expenses, and financial reports using Excel — causing reconciliation errors and delayed reporting to stakeholders.",
    solution:
      "Developed a comprehensive financial system with automated billing, payment tracking, multi-period reporting, journal entries, and role-based access for finance staff and management.",
    impact:
      "Monthly financial closing reduced from 5 days to 1 day. Payment collection tracking improved by 90%. Management gained real-time financial dashboards.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Firebase"],
    featured: true,
  },
  {
    id: "educational-erp",
    title: "Educational ERP Platform",
    category: "Education",
    problem:
      "An educational foundation running multiple schools had no unified system — each school used different tools for academics, HR, finance, and student management.",
    solution:
      "Built a multi-tenant ERP platform covering student management, academic records, attendance, HR, payroll, inventory, and financial reporting — all in one unified system.",
    impact:
      "Unified 4 schools under one platform. Reduced administrative overhead by 60%. Foundation leadership gained cross-school reporting and analytics.",
    technologies: ["Nuxt.js", "Node.js", "PostgreSQL", "Prisma", "Firebase"],
    featured: true,
  },
  {
    id: "custom-cms",
    title: "Custom CMS with Page Builder",
    category: "Content Management",
    problem:
      "A growing organization needed to frequently update their website but depended on developers for every small change, creating bottlenecks and outdated content.",
    solution:
      "Created a custom CMS with a visual page builder, reusable component library, media management, SEO tools, and role-based publishing workflows.",
    impact:
      "Marketing team became fully autonomous — publishing new pages in minutes instead of days. Developer dependency for content updates dropped to zero.",
    technologies: ["Next.js", "Vue.js", "Node.js", "PostgreSQL", "Firebase"],
    featured: true,
  },
  {
    id: "hr-attendance-system",
    title: "HR & Attendance Management",
    category: "Human Resources",
    problem:
      "A company with 200+ employees tracked attendance through manual sign-in sheets and calculated payroll on spreadsheets, leading to disputes and payroll errors.",
    solution:
      "Built an integrated HR platform with digital attendance (QR/GPS), leave management, overtime calculation, payroll processing, and employee self-service.",
    impact:
      "Payroll processing time cut by 80%. Attendance disputes reduced to near-zero. Employees gained transparency through self-service portal.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Firebase"],
    featured: false,
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Notification Bot",
    category: "Automation",
    problem:
      "A school manually sent payment reminders, announcements, and report notifications to parents via individual messages — consuming hours of staff time daily.",
    solution:
      "Developed an automated WhatsApp bot integrated with the school's existing systems, sending templated notifications for payments, attendance, grades, and announcements.",
    impact:
      "Staff saved 3+ hours daily on communication. Payment reminder effectiveness improved by 45%. Parents appreciated instant, consistent updates.",
    technologies: ["Node.js", "WhatsApp API", "Firebase", "REST API"],
    featured: false,
  },
];

