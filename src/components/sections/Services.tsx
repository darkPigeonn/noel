"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import {
  Globe,
  Building2,
  LayoutDashboard,
  Calculator,
  Users,
  Smartphone,
  Zap,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const serviceIcons = [
  Globe,
  Building2,
  LayoutDashboard,
  Calculator,
  Users,
  Smartphone,
  Zap,
];

interface ServicesProps {
  dict: Dictionary;
}

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 bg-white/[0.01]">
      <div className="container-custom">
        <SectionHeading
          label={dict.services.label}
          title={dict.services.title}
          description={dict.services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.services.items.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={serviceIcons[index]}
              title={service.title}
              problem={service.problem}
              solution={service.solution}
              benefit={service.benefit}
              technologies={service.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
