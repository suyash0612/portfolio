"use client";

import { useState, useEffect } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { SocialLinks } from "@/components/ui/social-links";
import { JourneySection } from "@/components/journey-section";
import { CalBooking } from "@/components/cal-booking";
import { BottomNavBar } from "@/components/ui/bottom-nav-bar";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { HeroSlider } from "@/components/ui/hero-slider";

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "PJM Electricty Dynamic Pricing",
    description:
      "IEEE Research 2026 - Modeling a Machine Learning and game theory framework for peak-load reduction along with consumer bill protection.",
    imageSrc:
      "https://t3.ftcdn.net/jpg/04/40/72/54/360_F_440725469_f6IKLa3Kx5DAUB5O3i9iUKYUxw2qDqtS.jpg",
    href: "https://ieeexplore.ieee.org/document/11540255",
    tag: "ELT | Machine Learning | Game Theory",
  },
  {
    id: 2,
    title: "Restaurant Chain Analytics Enginer",
    description:
      "A data engineering and analytics solution for a restaurant chain, enabling data-driven decision-making and operational efficiency.",
    imageSrc: "https://www.tastingtable.com/img/gallery/this-popular-restaurant-chain-started-in-the-mid-1960s-and-only-has-under-80-locations-left-what-happened/intro-1767530976.jpg",
    href: "https://github.com/suyash0612/Restaurant-Chain-Insights",
    tag: "Data Engineering | Analytics | KPIs | Sentiment Analysis",
  },
  {
    id: 3,
    title: "Mango Agent",
    description:
      "Mango is an AI agent thats helps you summarize your daily important emails and messages",
    imageSrc:
      "https://mepiks.com/files/preview/1280x731/151747379697muxwmanlbiv2dgvw77nyjcgjknmppbrxvcogkladkg0nlqilz5gowabmyowuogmlo6ecmkmmvrtidijdrcpfgt43dnulub8jtgug.png?type=free",
    href: "https://www.linkedin.com/posts/suyash-sawant-_meet-mango-an-ai-agent-i-created-as-ugcPost-7453961474491719680-Moz0/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACw1Jz0BUGRr9PahSLAZ3m3bhNpfF1k0mg4",
    tag: "Agentic AI | NanoClaw | MCP | Guardrails | LLMs",
  },
  {
    id: 4,
    title: "Second Chance",
    description:
      "A patient-controlled medical history tracking app to save medical records and integrate EHR data to view a structured medical timeline and generate doctor-ready visit summaries.",
    imageSrc:
      "https://prognocis.com/wp-content/uploads/2022/09/Data-collection-in-healthcare.jpeg",
    href: "https://www.linkedin.com/posts/suyash-sawant-_secondopinion-healthcare-uiuc-ugcPost-7451475698730418177-YsMX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACw1Jz0BUGRr9PahSLAZ3m3bhNpfF1k0mg4",
    tag: "NLP | AI Agents | Heathcare Analytics | HIPAA | FHIR",
  },
  {
    id: 5,
    title: "Stablecoin Risk Assessment",
    description:
      "USDT risk analysis and mitigation strategies from a risk analyst perspective.",
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y7HJmXlUZD-NuFpzilgWYw.png",
    href: "https://medium.com/@suyashsawant1999/risk-analysis-for-usdt-stablecoin-6dd2ccf86a7e",
    tag: "Risk Analysis | Guardrails | Stablecoins",
  },
  {
    id: 6,
    title: "Starbucks Marketing Analytics",
    description:
      "Marketing analytics for In-house Illini Union Starbucks, analyzing customer behavior and preferences to optimize marketing strategies and enhance customer engagement.",
    imageSrc:
      "https://storage.googleapis.com/baileyedward-production/2021/05/6339be89-img_1828.jpg",
    href: "https://www.linkedin.com/posts/suyash-sawant-_starbucks-marketinganalytics-consumerbehavior-share-7467271066550349825-vztv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACw1Jz0BUGRr9PahSLAZ3m3bhNpfF1k0mg4",
    tag: "Prescriptive Analytics | Consumer Segmentation & Churn Analysis | Marketing Strategy",
  },
];

const socialLinks = [
  { platform: "linkedin" as const, href: "https://linkedin.com/in/suyash-sawant-" },
  { platform: "github" as const, href: "https://github.com/suyash0612" },
  { platform: "mail" as const, href: "mailto:suyashsawant1999@gmail.com" },
  { platform: "instagram" as const, href: "https://www.instagram.com/suyashsawant1999?igsh=MXdzcXQzazM3bWw1bQ==" },
];

export default function Home() {
  const [cardDims, setCardDims] = useState({ width: 480, height: 300, spreadDeg: 48, maxVisible: 7 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardDims({ width: Math.min(w - 48, 320), height: 220, spreadDeg: 20, maxVisible: 3 });
      } else {
        setCardDims({ width: 480, height: 300, spreadDeg: 48, maxVisible: 7 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="relative text-white">
      <WebGLShader />
      {/* Social Links — fixed sidebar (desktop) + floating dock (mobile) */}
      <SocialLinks links={socialLinks} showOnMobile floatingButtonColor="bg-zinc-800" />

      {/* Bottom nav — centered pill, fixed above mobile social dock */}
      <BottomNavBar />

      {/* ── Hero Section ── */}
      {/* overflow-x-hidden scoped here so it doesn't create a scroll container on main,
          which would break position:sticky in the Journey section below */}
      <section id="hero" className="w-full overflow-x-hidden">
        <ContainerScroll
          titleComponent={
            <div className="space-y-3">
              <p className="text-sm md:text-6xl font-medium text-white/100 tracking-tight">
                {/* Hey, I'm Suyash Sawant */}
              
              </p>
              <h1 className="text-4xl md:text-2xl font-medium text-red-200 leading-tight">
                {/* I'm a digital avatar created using AI and Google FLow */}
              </h1>
    
            </div>
          }
        >
          <HeroSlider />
        </ContainerScroll>

           

        <div className="flex flex-col items-center justify-center mt-10 animate-bounce">
          <span className="text-xs md:text-sm text-white/50 tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent my-2" />

          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section
        id="projects"
        className="w-full py-20 md:py-32 px-6 overflow-x-hidden"
      >
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-3">
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Projects
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              A collection of AI/ML, analytics and engineering projects. Click on the cards to know more.
            </p>
          </div>

          {/* Card Stack */}
          <CardStack
            items={projects}
            initialIndex={0}
            cardWidth={cardDims.width}
            cardHeight={cardDims.height}
            spreadDeg={cardDims.spreadDeg}
            maxVisible={cardDims.maxVisible}
            autoAdvance
            intervalMs={2000}
            pauseOnHover
            showDots
          />
        </div>
      </section>

      {/* ── Journey Section ── */}
      <JourneySection />

      {/* ── Booking ── */}
      <CalBooking />

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Suyash Sawant · Built with Next.js &amp; Framer Motion
        </p>
      </footer>
    </main>
  );
}
