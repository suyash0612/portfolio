"use client";

import { useRef } from "react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const ACADEMIC = [
  {
    id: "edu-1",
    number: "01",
    degree: "M.S. in Business Analytics",
    institution: "University of Illinois Urbana-Champaign",
    period: "2025 – 2026",
    metric: "GPA 3.92*",
  },
  {
    id: "edu-2",
    number: "02",
    degree: "B.E. in Electronics & Telecommunication",
    institution: "Mumbai University",
    period: "2017 – 2021",
    metric: "CGPA 8.93",
  },
];

const PROFESSIONAL = [
  {
    id: "work-1",
    number: "01",
    company: "AWG – Business Practicum",
    detail: "Commercial Analytics",
    period: "2025",
  },
  {
    id: "work-2",
    number: "02",
    company: "Bosch – Business Practicum",
    detail: "Requirement gathering, gap analysis, process improvements",
    period: "2025",
  },
  {
    id: "work-3",
    number: "03",
    company: "Digital Risk Accessibility",
    detail:
      "Measured and improved digital inclusivity by mapping accessibility gaps to user engagement metrics, resulting in a 15% uplift in screen-reader session completion.",
    period: "2023 – 2025",
  },
  {
    id: "work-4",
    number: "04",
    company: "DigiplusIT",
    detail:
      "Optimized telecom event data, led building data pipelines that fed dashboards.",
    period: "2022 – 2023",
  },
  {
    id: "work-5",
    number: "05",
    company: "Primemover Engineering Pvt Ltd",
    detail:
      "Conducted data extraction and validations, integrated APIs, data analytics.",
    period: "2021 – 2022",
  },
  {
    id: "work-6",
    number: "06",
    company: "Tata Consultancy & Services",
    detail:
      "Developed and maintained automated validation flows and payment monitoring pipelines.",
    period: "2021 – 2022",
  },
  {
    id: "work-7",
    number: "07",
    company: "Eduvance Pvt Ltd",
    detail: "Data Analytics Internship",
    period: "2020 – 2021",
  },
];

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative w-full"
    >
      {/* Section header */}
      <div className="text-center pt-20 pb-4 px-6 space-y-3">
        <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
          Background
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Journey
        </h2>
      </div>

      {/* ── Academic ── */}
      <div className="container mx-auto px-6 xl:px-12 py-12">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-16">
          {/* Sticky left label */}
          <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center py-12">
            <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-3">
              Education
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Academic{" "}
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <p className="text-white/60 text-sm max-w-xs">
              Formal training in engineering and data-driven decision making.
            </p>
          </div>

          {/* Stacking cards */}
          <ContainerScroll className="min-h-[80vh] space-y-6 py-12">
            {ACADEMIC.map((item, index) => (
              <CardSticky
                key={item.id}
                index={index + 2}
                incrementY={14}
                incrementZ={10}
                className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/20 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/50"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 via-transparent to-white/10" />
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-4xl font-bold text-white/50">
                    {item.number}
                  </span>
                  <span className="text-xs font-medium text-white/40 tracking-widest uppercase mt-1">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {item.degree}
                </h4>
                <p className="text-white/60 text-sm mb-4">{item.institution}</p>
                <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {item.metric}
                </span>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>

      {/* ── Professional ── */}
      <div className="container mx-auto px-6 xl:px-12 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-2 md:gap-8 xl:gap-16">
          {/* Sticky left label */}
          <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center py-12">
            <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-3">
              Work
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                Experience
              </span>
            </h3>
            <p className="text-white/60 text-sm max-w-xs">
              Roles spanning analytics, data engineering, and AI — across
              consulting, tech, and research.
            </p>
          </div>

          {/* Stacking cards */}
          <ContainerScroll className="min-h-[280vh] space-y-6 py-12">
            {PROFESSIONAL.map((item, index) => (
              <CardSticky
                key={item.id}
                index={index + 1}
                incrementY={12}
                incrementZ={8}
                className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/20 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/50"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 via-transparent to-white/10" />
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-4xl font-bold text-white/50">
                    {item.number}
                  </span>
                  <span className="text-xs font-medium text-white/40 tracking-widest uppercase mt-1">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.company}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
