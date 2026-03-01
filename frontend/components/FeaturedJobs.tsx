"use client";

// ── Tag types & styles ────────────────────────────────────────────────────────

type Tag = "Marketing" | "Design" | "Business" | "Technology" | "Engineering" | "Finance";

const TAG_STYLES: Record<Tag, string> = {
  Marketing: "bg-[#FFF0E5] text-[#FF8C42]",
  Design: "bg-[#E8F9F0] text-[#3EC878]",
  Business: "bg-[#EEF0FF] text-[#6B6DE8]",
  Technology: "bg-[#FFE8E8] text-[#E05C5C]",
  Engineering: "bg-[#E5F4FF] text-[#26A4FF]",
  Finance: "bg-[#FFF8E5] text-[#F0A500]",
};

// ── Job data (no JSX in data — logos stored as component refs) ───────────────

interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: Tag[];
  LogoComponent: () => JSX.Element;
}

const JOBS: JobData[] = [
  {
    id: "1",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: ["Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-lg bg-black flex items-center justify-center shrink-0">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3h9a5 5 0 010 10H9v2l5 6H9l-4-6V3z" fill="white" />
          <path d="M9 13h4a2 2 0 000-4H9v4z" fill="black" />
        </svg>
      </div>
    ),
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: ["Design", "Business"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-lg bg-[#0061FF]/10 flex items-center justify-center shrink-0">
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
          <path d="M6.5 1L0 5.25L6.5 9.5L13 5.25Z" fill="#0061FF" />
          <path d="M19.5 1L13 5.25L19.5 9.5L26 5.25Z" fill="#0061FF" />
          <path d="M0 13.75L6.5 18L13 13.75L6.5 9.5Z" fill="#0061FF" />
          <path d="M26 13.75L19.5 18L13 13.75L19.5 9.5Z" fill="#0061FF" />
          <path d="M6.5 18.95L13 14.7L19.5 18.95Z" fill="#0061FF" />
        </svg>
      </div>
    ),
  },
  {
    id: "3",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    tags: ["Marketing"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0">
        <span style={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "11px", color: "white" }}>
          Pitch
        </span>
      </div>
    ),
  },
  {
    id: "4",
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    type: "Full Time",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    tags: ["Design"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-lg bg-[#E8F5EE] flex items-center justify-center shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#2ECC71" />
          <circle cx="12" cy="12" r="5" fill="#1A8A4A" />
          <circle cx="12" cy="8" r="3" fill="#2ECC71" />
        </svg>
      </div>
    ),
  },
  {
    id: "5",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: ["Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-full bg-[#0066FF] flex items-center justify-center shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 3C11 3 4 7 4 12C4 15.3 7.1 18 11 18C14.9 18 18 15.3 18 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M11 18V3" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M7 7.5L11 3L15 7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "6",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: ["Design", "Business"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-full bg-[#00C4CC] flex items-center justify-center shrink-0">
        <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 700, fontSize: "13px", color: "white" }}>
          Ca
        </span>
      </div>
    ),
  },
  {
    id: "7",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: ["Marketing"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-lg bg-[#E6FDF8] flex items-center justify-center shrink-0">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="10" stroke="#1BDBAD" strokeWidth="2.5" fill="none" />
          <path d="M8 13C10 17 16 17 18 13" stroke="#1BDBAD" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="10" r="1.5" fill="#1BDBAD" />
          <circle cx="16" cy="10" r="1.5" fill="#1BDBAD" />
        </svg>
      </div>
    ),
  },
  {
    id: "8",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: ["Technology"],
    LogoComponent: () => (
      <div className="w-11 h-11 rounded-full bg-[#1DA1F2] flex items-center justify-center shrink-0">
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path d="M20 2a8.3 8.3 0 01-2.36.65A4.1 4.1 0 0019.44.3a8.19 8.19 0 01-2.61.99A4.1 4.1 0 009.85 5.1 11.65 11.65 0 011.4.75 4.1 4.1 0 002.67 6.2 4.09 4.09 0 01.8 5.7v.05a4.1 4.1 0 003.29 4.02 4.12 4.12 0 01-1.85.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 14.17 11.62 11.62 0 006.29 16c7.55 0 11.68-6.25 11.68-11.67l-.01-.53A8.35 8.35 0 0020 2z" fill="white" />
        </svg>
      </div>
    ),
  },
];

// ── Job Card ──────────────────────────────────────────────────────────────────

function JobCard({ job }: { job: JobData }) {
  const { LogoComponent } = job;
  return (
    <div className="flex flex-col bg-white border border-[#D6DDEB] rounded-[4px] p-6 hover:border-[#4640DE] hover:shadow-md transition-all duration-200 cursor-pointer h-full">

      {/* Top row — logo + badge */}
      <div className="flex items-start justify-between mb-5">
        <LogoComponent />
        <span className="text-xs font-medium text-[#4640DE] border border-[#4640DE] rounded-[4px] px-3 py-1 whitespace-nowrap">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[18px] text-[#202430] mb-2 leading-tight">
        {job.title}
      </h3>

      {/* Company · Location */}
      <div className="flex items-center gap-1.5 flex-wrap mb-4">
        <span className="text-sm text-[#515B6F]">{job.company}</span>
        <span className="w-1 h-1 rounded-full bg-[#D6DDEB] inline-block shrink-0" />
        <span className="text-sm text-[#515B6F]">{job.location}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#7C8493] leading-relaxed mb-5 flex-1">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-semibold px-3 py-1 rounded-full ${TAG_STYLES[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Arrow icon ────────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function FeaturedJobs() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#202430]">
            Featured{" "}
            <span className="text-[#26A4FF]">jobs</span>
          </h2>
          <button className="hidden sm:flex items-center gap-2 text-[#4640DE] font-semibold text-base hover:gap-3 transition-all duration-200 shrink-0">
            Show all jobs
            <ArrowIcon />
          </button>
        </div>

        {/* ── MOBILE: horizontal snap scroll ── */}
        {/*
          -mx-4 + px-4 lets the scroll track go edge-to-edge while
          keeping card content padded. Each card is 82vw so the next
          card peeks from the right, hinting at scrollability.
        */}
        <div className="md:hidden -mx-4">
          <div
            className="flex gap-4 overflow-x-auto pb-5 snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
          >
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="snap-start shrink-0 w-[82vw] sm:w-[60vw]"
              >
                <JobCard job={job} />
              </div>
            ))}
            {/* Trailing spacer so last card doesn't sit flush against edge */}
            <div className="shrink-0 w-4" aria-hidden="true" />
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-3">
            {JOBS.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-200 ${i === 0
                  ? "w-5 h-1.5 bg-[#4640DE]"
                  : "w-1.5 h-1.5 bg-[#D6DDEB]"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ── TABLET / DESKTOP: grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* ── Mobile: Show all jobs ── */}
        <div className="md:hidden mt-7 flex justify-center">
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