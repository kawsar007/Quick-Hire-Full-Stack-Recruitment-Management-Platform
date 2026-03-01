"use client";

import { useState } from "react";

// ── Category data ─────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "design",
    label: "Design",
    jobs: 235,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <path d="M24 6L34 16L16 34L6 34L6 24L24 6Z" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M20 10L30 20" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <path d="M6 28L12 34" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="32" cy="10" r="3" stroke={active ? "white" : "#4640DE"} strokeWidth="2" />
        <line x1="8" y1="8" x2="16" y2="16" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="16" y1="8" x2="8" y2="16" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "sales",
    label: "Sales",
    jobs: 756,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <circle cx="16" cy="14" r="9" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <path d="M16 10V14L19 16" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="36" x2="10" y2="28" stroke={active ? "white" : "#4640DE"} strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="36" x2="18" y2="24" stroke={active ? "white" : "#4640DE"} strokeWidth="3" strokeLinecap="round" />
        <line x1="26" y1="36" x2="26" y2="20" stroke={active ? "white" : "#4640DE"} strokeWidth="3" strokeLinecap="round" />
        <line x1="34" y1="36" x2="34" y2="16" stroke={active ? "white" : "#4640DE"} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "marketing",
    label: "Marketing",
    jobs: 140,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <path d="M8 14H14L30 8V28L14 22H8V14Z" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 22L16 32H20L18 22" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M34 14C35.5 15.5 35.5 20.5 34 22" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "finance",
    label: "Finance",
    jobs: 325,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="12" width="32" height="22" rx="3" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <circle cx="20" cy="23" r="6" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <circle cx="20" cy="23" r="2.5" fill={active ? "white" : "#4640DE"} />
        <path d="M28 12V10C28 9 27 8 26 8H22L20 12" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "technology",
    label: "Technology",
    jobs: 436,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="6" width="32" height="22" rx="3" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <line x1="20" y1="28" x2="20" y2="34" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="13" y1="34" x2="27" y2="34" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
        <line x1="4" y1="22" x2="36" y2="22" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "engineering",
    label: "Engineering",
    jobs: 542,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <path d="M14 12L6 20L14 28" stroke={active ? "white" : "#4640DE"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 12L34 20L26 28" stroke={active ? "white" : "#4640DE"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="8" x2="18" y2="32" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "business",
    label: "Business",
    jobs: 211,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="14" width="32" height="22" rx="3" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <path d="M14 14V10C14 9 15 8 16 8H24C25 8 26 9 26 10V14" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinejoin="round" />
        <line x1="4" y1="24" x2="36" y2="24" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="24" x2="22" y2="24" stroke={active ? "white" : "#4640DE"} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "hr",
    label: "Human Resource",
    jobs: 346,
    icon: (active: boolean) => (
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="13" r="5" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" />
        <path d="M10 34C10 28.477 14.477 24 20 24C25.523 24 30 28.477 30 34" stroke={active ? "white" : "#4640DE"} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="8" cy="16" r="3.5" stroke={active ? "white" : "#4640DE"} strokeWidth="2" />
        <path d="M2 32C2 27.582 4.686 24 8 24" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="16" r="3.5" stroke={active ? "white" : "#4640DE"} strokeWidth="2" />
        <path d="M38 32C38 27.582 35.314 24 32 24" stroke={active ? "white" : "#4640DE"} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ArrowRight = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "white" : "#4640DE"} strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function ExploreByCategory() {
  const [activeId, setActiveId] = useState<string>("marketing");

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header row ── */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#202430]">
            Explore by{" "}
            <span className="text-[#26A4FF]">category</span>
          </h2>
          {/* Show all jobs — desktop only, mobile rendered below grid */}
          <button className="hidden sm:flex items-center gap-2 text-[#4640DE] font-semibold text-base hover:gap-3 transition-all duration-200 shrink-0">
            Show all jobs
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        {/* ═══════════════════════════════════════════════════
            MOBILE layout  (<lg): single-column bordered list
            DESKTOP layout (lg+): 4-column card grid
        ═══════════════════════════════════════════════════ */}

        {/* ── Mobile: stacked list rows ── */}
        <div className="flex flex-col lg:hidden border border-[#D6DDEB] rounded-[4px] overflow-hidden">
          {CATEGORIES.map((cat, i) => {
            const active = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`
                  flex items-center gap-4 px-5 py-4 text-left
                  transition-colors duration-150
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4640DE]
                  ${i !== 0 ? "border-t border-[#D6DDEB]" : ""}
                  ${active ? "bg-[#4640DE]" : "bg-white hover:bg-indigo-50"}
                `}
              >
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  {cat.icon(active)}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-base leading-tight
                    ${active ? "text-white" : "text-[#202430]"}`}>
                    {cat.label}
                  </p>
                  <p className={`text-sm mt-0.5
                    ${active ? "text-indigo-200" : "text-[#7C8493]"}`}>
                    {cat.jobs} jobs available
                  </p>
                </div>

                {/* Arrow */}
                <div className="shrink-0">
                  <ArrowRight active={active} />
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Desktop: 4-column card grid ── */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => {
            const active = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`
                  group text-left rounded-[4px] border p-8
                  transition-all duration-200 ease-in-out
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4640DE] focus-visible:ring-offset-2
                  ${active
                    ? "bg-[#4640DE] border-[#4640DE] shadow-lg shadow-indigo-200"
                    : "bg-white border-[#D6DDEB] hover:border-[#4640DE] hover:shadow-md"
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  {cat.icon(active)}
                </div>

                {/* Name */}
                <p className={`font-clash font-semibold text-xl mb-2 leading-tight
                  ${active ? "text-white" : "text-[#202430]"}`}>
                  {cat.label}
                </p>

                {/* Jobs + arrow */}
                <div className="flex items-center gap-2">
                  <span className={`text-base font-normal
                    ${active ? "text-indigo-200" : "text-[#7C8493]"}`}>
                    {cat.jobs} jobs available
                  </span>
                  <ArrowRight active={active} />
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Mobile: Show all jobs link (below list) ── */}
        <div className="lg:hidden mt-6 flex items-center">
          <button className="flex items-center gap-2 text-[#4640DE] font-semibold text-base">
            Show all jobs
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}