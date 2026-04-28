"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { SocialLinks } from "@/components/ui/social-links";
import { JourneySection } from "@/components/journey-section";
import { CalBooking } from "@/components/cal-booking";
import { BottomNavBar } from "@/components/ui/bottom-nav-bar";

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description:
      "ML pipeline using XGBoost to predict telecom churn with 92% accuracy — reduced retention cost by 18%.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "https://github.com/suyash0612",
    tag: "Machine Learning",
  },
  {
    id: 2,
    title: "NYC Taxi Demand Forecasting",
    description:
      "A dashboard forecasting NYC taxi demand using LSTM, improving dispatch efficiency by 15%.",
    imageSrc: "https://cdn.cityandstateny.com/media/img/cd/2021/06/29/taxis_shutterstock-2/860x394.jpg",
    tag: "Analytics",
  },
  {
    id: 3,
    title: "Mango Agent",
    description:
      "Mango is an AI agent thats helps you summarize your daily important emails and messages",
    imageSrc:
      "https://mepiks.com/files/preview/1280x731/151747379697muxwmanlbiv2dgvw77nyjcgjknmppbrxvcogkladkg0nlqilz5gowabmyowuogmlo6ecmkmmvrtidijdrcpfgt43dnulub8jtgug.png?type=free",
    href: "https://github.com/suyash0612",
    tag: "Agentic AI",
  },
  {
    id: 4,
    title: "Market Basket Analysis",
    description:
      "Apriori association rule mining on retail transaction data to optimize product placement and bundling.",
    imageSrc:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    href: "https://github.com/suyash0612",
    tag: "Data Mining",
  },
  {
    id: 5,
    title: "Stablecoin Risk Assessment",
    description:
      "USDT risk analysis and mitigation strategies from a risk analyst perspective.",
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Y7HJmXlUZD-NuFpzilgWYw.png",
    href: "https://medium.com/@suyashsawant1999/risk-analysis-for-usdt-stablecoin-6dd2ccf86a7e",
    tag: "Risk Analysis",
  },
];

const socialLinks = [
  { platform: "linkedin" as const, href: "https://linkedin.com/in/suyash-sawant" },
  { platform: "github" as const, href: "https://github.com/suyash0612" },
  { platform: "mail" as const, href: "mailto:suyashsawant1999@gmail.com" },
  { platform: "instagram" as const, href: "https://www.instagram.com/suyashsawant1999?igsh=MXdzcXQzazM3bWw1bQ==" },
];

export default function Home() {
  return (
    <main className="relative bg-white text-zinc-900">
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
              <p className="text-base md:text-lg font-medium text-zinc-500 uppercase tracking-widest">
                {/* Designation */}
              </p>
              <h1 className="text-4xl md:text-7xl font-bold text-zinc-900 leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-zinc-700 to-zinc-400 bg-clip-text text-transparent">
                  Suyash Sawant
                </span>
              </h1>
              <p className="text-sm md:text-base text-zinc-500 max-w-md mx-auto">
                Turning messy worklows into seamless experiences.
              </p>
            </div>
          }
        >
          <Image
            src="/assests/Cover.jpeg"
            alt="Suyash Sawant"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-contain h-full object-center"
            draggable={false}
            priority
          />
        </ContainerScroll>

        <div className="flex flex-col items-center justify-center mt-10 animate-bounce">
          <span className="text-xs md:text-sm text-zinc-400 tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-[1px] h-10 bg-gradient-to-b from-zinc-400 to-transparent my-2" />

          <svg
            className="w-5 h-5 text-zinc-400"
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
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-widest">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
              Projects
            </h2>
            <p className="text-zinc-500 text-base max-w-xl mx-auto">
              A collection of engineering projects.
            </p>
          </div>

          {/* Card Stack */}
          <CardStack
            items={projects}
            initialIndex={0}
            cardWidth={480}
            cardHeight={300}
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
      <footer className="border-t border-zinc-100 py-8 px-6 text-center">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Suyash Sawant · Built with Next.js &amp; Framer Motion
        </p>
      </footer>
    </main>
  );
}
