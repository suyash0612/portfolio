// "use client";

// import { useRef } from "react";
// import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

// const ACADEMIC = [
//   {
//     id: "edu-1",
//     number: "01",
//     degree: "M.S. in Business Analytics",
//     institution: "University of Illinois Urbana-Champaign",
//     period: "2025 – 2026",
//     metric: "GPA 3.92*",
//   },
//   {
//     id: "edu-2",
//     number: "02",
//     degree: "B.E. in Electronics & Telecommunication",
//     institution: "Mumbai University",
//     period: "2017 – 2021",
//     metric: "CGPA 8.93",
//   },
// ];

// const PROFESSIONAL = [
//   {
//     id: "work-1",
//     number: "01",
//     company: "AWG – Business Practicum",
//     detail: "Commercial Analytics",
//     period: "2025",
//   },
//   {
//     id: "work-2",
//     number: "02",
//     company: "Bosch – Business Practicum",
//     detail: "Requirement gathering, gap analysis, process improvements",
//     period: "2025",
//   },
//   {
//     id: "work-3",
//     number: "03",
//     company: "Digital Risk Accessibility",
//     detail:
//       "Measured and improved digital inclusivity by mapping accessibility gaps to user engagement metrics, resulting in a 15% uplift in screen-reader session completion.",
//     period: "2023 – 2025",
//   },
//   {
//     id: "work-4",
//     number: "04",
//     company: "DigiplusIT",
//     detail:
//       "Optimized telecom event data, led building data pipelines that fed dashboards.",
//     period: "2022 – 2023",
//   },
//   {
//     id: "work-5",
//     number: "05",
//     company: "Primemover Engineering Pvt Ltd",
//     detail:
//       "Conducted data extraction and validations, integrated APIs, data analytics.",
//     period: "2021 – 2022",
//   },
//   {
//     id: "work-6",
//     number: "06",
//     company: "Tata Consultancy & Services",
//     detail:
//       "Developed and maintained automated validation flows and payment monitoring pipelines.",
//     period: "2021 – 2022",
//   },
//   {
//     id: "work-7",
//     number: "07",
//     company: "Eduvance Pvt Ltd",
//     detail: "Data Analytics Internship",
//     period: "2020 – 2021",
//   },
// ];

// export function JourneySection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   return (
//     <section
//       id="journey"
//       ref={sectionRef}
//       className="relative w-full"
//     >
//       {/* Section header */}
//       <div className="text-center pt-20 pb-4 px-6 space-y-3">
//         <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
//           Background
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-white">
//           My Journey
//         </h2>
//       </div>

//       {/* ── Academic ── */}
//       <div className="container mx-auto px-6 xl:px-12 py-12">
//         <div className="grid md:grid-cols-2 md:gap-8 xl:gap-16">
//           {/* Sticky left label */}
//           <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center py-12">
//             <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-3">
//               Education
//             </p>
//             <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
//               Academic{" "}
//               <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
//                 Journey
//               </span>
//             </h3>
//             <p className="text-white/60 text-sm max-w-xs">
//               Formal training in engineering and data-driven decision making.
//             </p>
//           </div>

//           {/* Stacking cards */}
//           <ContainerScroll className="min-h-[80vh] space-y-6 py-12">
//             {ACADEMIC.map((item, index) => (
//               <CardSticky
//                 key={item.id}
//                 index={index + 2}
//                 incrementY={14}
//                 incrementZ={10}
//                 className="relative overflow-hidden rounded-2xl border border-white/[2%] bg-white/[2%] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/[2%]"
//               >
//                 <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
//                 <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[2%] via-transparent to-transparent" />
//                 <div className="flex items-start justify-between gap-4 mb-4">
//                   <span className="text-4xl font-bold text-white/50">
//                     {item.number}
//                   </span>
//                   <span className="text-xs font-medium text-white/40 tracking-widest uppercase mt-1">
//                     {item.period}
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold text-white mb-1">
//                   {item.degree}
//                 </h4>
//                 <p className="text-white/60 text-sm mb-4">{item.institution}</p>
//                 <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
//                   {item.metric}
//                 </span>
//               </CardSticky>
//             ))}
//           </ContainerScroll>
//         </div>
//       </div>

//       {/* ── Professional ── */}
//       <div className="container mx-auto px-6 xl:px-12 py-12 border-t border-white/10">
//         <div className="grid md:grid-cols-2 md:gap-8 xl:gap-16">
//           {/* Sticky left label */}
//           <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center py-12">
//             <p className="text-xs font-medium text-white/50 uppercase tracking-widest mb-3">
//               Work
//             </p>
//             <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
//               Professional{" "}
//               <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
//                 Experience
//               </span>
//             </h3>
//             <p className="text-white/60 text-sm max-w-xs">
//               Roles spanning analytics, data engineering, and AI — across
//               consulting, tech, and research.
//             </p>
//           </div>

//           {/* Stacking cards */}
//           <ContainerScroll className="min-h-[280vh] space-y-6 py-12">
//             {PROFESSIONAL.map((item, index) => (
//               <CardSticky
//                 key={item.id}
//                 index={index + 1}
//                 incrementY={12}
//                 incrementZ={8}
//                 className="relative overflow-hidden rounded-2xl border border-white/[2%] bg-white/[2%] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/[2%]"
//               >
//                 <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
//                 <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[2%] via-transparent to-transparent" />
//                 <div className="flex items-start justify-between gap-4 mb-4">
//                   <span className="text-4xl font-bold text-white/50">
//                     {item.number}
//                   </span>
//                   <span className="text-xs font-medium text-white/40 tracking-widest uppercase mt-1">
//                     {item.period}
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold text-white mb-3">
//                   {item.company}
//                 </h4>
//                 <p className="text-white/60 text-sm leading-relaxed">
//                   {item.detail}
//                 </p>
//               </CardSticky>
//             ))}
//           </ContainerScroll>
//         </div>
//       </div>
//     </section>
//   );
// }


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
    metric: "GPA 3.88*",
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
    detail: "Analyzed pricing across 696 SKUs and 9 divisions, uncovering $21.4M in potential margin exposure and translating fragmented data into actionable commercial insights.",
    period: "2026",
  },
  {
    id: "work-2",
    number: "02",
    company: "Bosch – Business Practicum",
    detail: "Mapped Bosch’s B2B partner onboarding workflow to uncover 3–5 day delays, built a dbt–Tableau analytics layer to track approval and SLA performance, and identified a 40–60% opportunity to reduce manual review through AI-powered document retrieval.",
    period: "2025",
  },
  {
    id: "work-3",
    number: "03",
    company: "Digital Risk Accessibility - Student Worker",
    detail:
      "Ensured digital documents and files met WCAG accessibility standards by auditing, remediating, and reviewing content created by others, strengthening compliance and making digital resources accessible to all users.",
    period: "2025 - 2026",
  },
  {
    id: "work-4",
    number: "04",
    company: "DigiplusIT",
    detail:
      "Owned 20+ telecom data products end-to-end, building data quality and analytics frameworks that surfaced 100+ operational failure scenarios and helped de-risk a major FWA launch that surpassed 10,000 orders in its first month with zero critical fulfillment failures.",
    period: "2023 – 2025",
  },
  {
    id: "work-5",
    number: "05",
    company: "Primemover Engineering Pvt Ltd",
    detail:
    "Built and shipped customer-facing SaaS features for 1,000+ monthly users, combining product collaboration, ML experimentation, and automated testing to drive 15% higher feature adoption, 9% better click-through, and backend coverage from 61% to 84%.",
  period: "2022 – 2023",
  },
  {
    id: "work-6",
    number: "06",
    company: "Tata Consultancy & Services",
    detail:
    "Translated SWIFT, privacy, security, and compliance requirements into data validation and QA controls, then redesigned error-prone workflows to cut manual QA effort by 88% while improving governance, audit readiness, and release visibility.",
    period: "2021 – 2022",
  },
  {
    id: "work-7",
    number: "07",
    company: "Eduvance Pvt Ltd",
    detail:
    "Turned business requirements into working data products, building a transaction gateway and an ML-powered employability assessment tool that combined analytics, visualization, prediction, and cloud deployment.",
    period: "2019",
  },
];

/* ============================================================
   NEW CONTENT — CAREER EVOLUTION
   Existing scroll/card logic below remains untouched.
============================================================ */

const CAREER_EVOLUTION = [
  {
    number: "01",
    year: "2019",
    title: "ANALYZE",
    subtitle: "Find the Signal",
    description:
      "Started with data analysis, visualization, statistics, and machine learning — learning how to turn raw data into insights.",
    accent: "text-cyan-300",
    glow: "bg-cyan-400",
    line: "from-cyan-400/0 via-cyan-400/60 to-cyan-400/0",
  },
  {
    number: "02",
    year: "2021–22",
    title: "ENGINEER",
    subtitle: "Make Data Trustworthy",
    description:
      "Built validation and automation solutions for financial systems, reducing manual QA effort by 88% and improving release visibility.",
    accent: "text-blue-300",
    glow: "bg-blue-400",
    line: "from-blue-400/0 via-blue-400/60 to-blue-400/0",
  },
  {
    number: "03",
    year: "2023–25",
    title: "OWN",
    subtitle: "Data → Product",
    description:
      "Moved from executing tasks to owning 20+ telecom data initiatives end-to-end — from problem definition and KPIs to insights and delivery.",
    accent: "text-violet-300",
    glow: "bg-violet-400",
    line: "from-violet-400/0 via-violet-400/60 to-violet-400/0",
  },
  {
    number: "04",
    year: "2025–26",
    title: "IMPACT",
    subtitle: "Data → Business Value",
    description:
      "Expanded into analytics and strategy, connecting complex operational and financial data to measurable business opportunities.",
    accent: "text-fuchsia-300",
    glow: "bg-fuchsia-400",
    line: "from-fuchsia-400/0 via-fuchsia-400/60 to-fuchsia-400/0",
  },
  {
    number: "05",
    year: "TODAY",
    title: "AUGMENT",
    subtitle: "AI + Human Judgment",
    description:
      "Using AI to accelerate analysis and execution while applying context, validation, and responsible judgment to turn patterns into better decisions.",
    accent: "text-emerald-300",
    glow: "bg-emerald-400",
    line: "from-emerald-400/0 via-emerald-400/60 to-emerald-400/0",
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
          {/* Background */}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          My Journey
        </h2>
      </div>

      {/* ============================================================
          CAREER EVOLUTION — NEW CONTENT ONLY
          Does not affect the existing card animations/layout below.
      ============================================================ */}
      <div className="container mx-auto px-6 xl:px-12 pt-10 pb-16">
        <div className="mx-auto max-w-6xl">

          {/* Small label */}
          <div className="text-center mb-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              How My Work Has Evolved
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* Desktop connecting line */}
            <div className="absolute top-[22px] left-[10%] right-[10%] hidden md:block">
              <div className="h-px bg-gradient-to-r from-cyan-400/20 via-violet-400/30 to-emerald-400/30" />
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-0">

              {CAREER_EVOLUTION.map((item) => (
                <div
                  key={item.number}
                  className="group relative text-center md:px-4"
                >

                  {/* Node */}
                  <div className="relative z-10 mx-auto">
                    <div
                      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#080d18] text-[10px] font-semibold text-white/50 transition-all duration-500 group-hover:scale-110 group-hover:border-white/30 group-hover:text-white`}
                    >
                      {item.number}
                    </div>

                    {/* Hover glow */}
                    <div
                      className={`pointer-events-none absolute inset-0 -z-10 mx-auto h-11 w-11 rounded-full ${item.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-5">

                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/30">
                      {item.year}
                    </p>

                    <h3
                      className={`mt-2 text-sm font-bold tracking-[0.12em] ${item.accent}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[11px] font-medium text-white/70">
                      {item.subtitle}
                    </p>

                    <p className="mx-auto mt-3 max-w-[190px] text-[11px] leading-[1.7] text-white/40">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  <div className="absolute left-1/2 top-14 h-[calc(100%+40px)] w-px -translate-x-1/2 bg-gradient-to-b from-white/10 to-transparent md:hidden" />
                </div>
              ))}

            </div>
          </div>

          {/* ========================================================
              POSITIONING / VALUE STATEMENT
          ======================================================== */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 backdrop-blur-xl">

              {/* subtle ambient glow */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-emerald-400/[0.06] blur-3xl" />

              <div className="relative">

                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                  <span className="text-xs font-medium text-cyan-300">
                    Data
                  </span>

                  <span className="text-white/20">+</span>

                  <span className="text-xs font-medium text-violet-300">
                    Business Context
                  </span>

                  <span className="text-white/20">+</span>

                  <span className="text-xs font-medium text-emerald-300">
                    AI
                  </span>

                  <span className="text-white/20">→</span>

                  <span className="text-xs font-semibold text-white">
                    Measurable Impact
                  </span>
                </div>

                <div className="mx-auto mt-4 h-px max-w-[180px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-white/40">
                  AI can recognize patterns at scale.
                  <span className="text-white/75">
                    {" "}
                    My edge is understanding which patterns matter,
                    which ones can be trusted, and where they can create value.
                  </span>
                </p>

              </div>
            </div>
          </div>

        </div>
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

          {/* Stacking cards — UNCHANGED */}
          <ContainerScroll className="min-h-[80vh] space-y-6 py-12">
            {ACADEMIC.map((item, index) => (
              <CardSticky
                key={item.id}
                index={index + 2}
                incrementY={14}
                incrementZ={10}
                className="relative overflow-hidden rounded-2xl border border-white/[2%] bg-white/[2%] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/[2%]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[2%] via-transparent to-transparent" />
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
              Roles spanning analytics, engineering, and AI — across
              consulting, tech, and research.
            </p>
          </div>

          {/* Stacking cards — UNCHANGED */}
          <ContainerScroll className="min-h-[280vh] space-y-6 py-12">
            {PROFESSIONAL.map((item, index) => (
              <CardSticky
                key={item.id}
                index={index + 1}
                incrementY={12}
                incrementZ={8}
                className="relative overflow-hidden rounded-2xl border border-white/[2%] bg-white/[2%] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.01)] backdrop-blur-2xl ring-1 ring-inset ring-white/[2%]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[2%] via-transparent to-transparent" />
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