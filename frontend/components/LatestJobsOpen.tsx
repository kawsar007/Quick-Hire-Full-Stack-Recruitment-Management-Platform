"use client";

// ── Tag types ─────────────────────────────────────────────────────────────────

type Tag = "Full-Time" | "Marketing" | "Design" | "Developer" | "Business" | "Engineering";

// Tag styles: light tinted background + matching colored text + border
// Carefully matched from reference image pixel inspection
const TAG_STYLES: Record<Tag, string> = {
  "Full-Time": "bg-[#EDFAF5] text-[#56CDAD] border border-[#56CDAD]",
  "Marketing": "bg-[#FFF6E8] text-[#FFB836] border border-[#FFB836]",
  "Design": "bg-[#EBEBFF] text-[#4640DE] border border-[#4640DE]",
  "Developer": "bg-[#FFF2EB] text-[#FF8C42] border border-[#FF8C42]",
  "Business": "bg-[#EBEBFF] text-[#4640DE] border border-[#4640DE]",
  "Engineering": "bg-[#E8F5FF] text-[#26A4FF] border border-[#26A4FF]",
};

// ── Job data ──────────────────────────────────────────────────────────────────

interface JobItem {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: Tag[];
  LogoComponent: () => JSX.Element;
}

const JOBS: JobItem[] = [
  {
    id: "1",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#E5F4ED] flex items-center justify-center shrink-0">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5Z" fill="#3EC878" />
          <path d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5Z" stroke="#2EAA62" strokeWidth="1" />
          <text x="20" y="25" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white" textAnchor="middle">N</text>
        </svg>
      </div>
    ),
  },
  {
    id: "2",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#EEF3FF] flex items-center justify-center shrink-0">
        <svg width="34" height="28" viewBox="0 0 34 28" fill="none">
          <path d="M8.5 0L1 4.5L8.5 9L16 4.5Z" fill="#0061FF" />
          <path d="M25.5 0L18 4.5L25.5 9L33 4.5Z" fill="#0061FF" />
          <path d="M1 13.5L8.5 18L16 13.5L8.5 9Z" fill="#0061FF" />
          <path d="M33 13.5L25.5 18L18 13.5L25.5 9Z" fill="#0061FF" />
          <path d="M8.5 18L16 22.5L25.5 18L18 13.5Z" fill="#0061FF" />
        </svg>
      </div>
    ),
  },
  {
    id: "3",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#E8F7FF] flex items-center justify-center shrink-0">
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none">
          <path d="M0 6L11 0V12L0 18Z" fill="#4DC5D9" />
          <path d="M13 6L24 0V12L13 18Z" fill="#5C6BC0" />
          <path d="M13 20L24 14V26L13 32Z" fill="#4DC5D9" />
          <path d="M26 10L30 8V20L26 22Z" fill="#5C6BC0" />
        </svg>
      </div>
    ),
  },
  {
    id: "4",
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#FFF0EE] flex items-center justify-center shrink-0">
        <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
          <rect x="0" y="4" width="12" height="16" rx="2" fill="#FF6B50" />
          <rect x="4" y="0" width="12" height="16" rx="2" fill="#FF9A86" />
          <rect x="8" y="8" width="12" height="16" rx="2" fill="#FF6B50" opacity="0.75" />
        </svg>
      </div>
    ),
  },
  {
    id: "5",
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#E4FAFB] flex items-center justify-center shrink-0">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 2L32 9V25L17 32L2 25V9Z" stroke="#3EC9B8" strokeWidth="2" fill="none" />
          <line x1="2" y1="12" x2="32" y2="12" stroke="#3EC9B8" strokeWidth="1.2" />
          <line x1="2" y1="22" x2="32" y2="22" stroke="#3EC9B8" strokeWidth="1.2" />
          <line x1="17" y1="2" x2="17" y2="32" stroke="#3EC9B8" strokeWidth="1.2" />
          <line x1="5" y1="7" x2="29" y2="7" stroke="#3EC9B8" strokeWidth="0.8" opacity="0.5" />
          <line x1="5" y1="27" x2="29" y2="27" stroke="#3EC9B8" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "6",
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-full bg-[#4640DE] flex items-center justify-center shrink-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4C9 4 6 8 6 14C6 18 9 21 14 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 4C19 4 22 8 22 14C22 18 19 21 14 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
          <line x1="14" y1="21" x2="14" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="14" cy="4" r="2.5" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    id: "7",
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-full bg-[#02B3E4] flex items-center justify-center shrink-0">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M13 3C7.5 3 3 7.5 3 13C3 18.5 7.5 23 13 23C18.5 23 23 18.5 23 13"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 3L23 8L18 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="23" y1="8" x2="11" y2="8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "8",
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    tags: ["Full-Time", "Marketing", "Design"],
    LogoComponent: () => (
      <div className="w-14 h-14 rounded-xl bg-[#4353FF] flex items-center justify-center shrink-0">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <text x="14" y="16" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white" textAnchor="middle">W</text>
        </svg>
      </div>
    ),
  },
];

// ── Tag pill ──────────────────────────────────────────────────────────────────

function TagPill({ tag }: { tag: Tag }) {
  return (
    <span className={`text-xs font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap ${TAG_STYLES[tag]}`}>
      {tag}
    </span>
  );
}

// ── Desktop row — horizontal layout ──────────────────────────────────────────
// logo (56px) | gap-5 | title / company•location / tags

function DesktopJobRow({ job }: { job: JobItem }) {
  const { LogoComponent } = job;
  return (
    <div className="flex items-center gap-6 px-8 py-7 hover:bg-[#F8F8FD] transition-colors duration-150 cursor-pointer group">
      {/* Logo */}
      <div className="shrink-0">
        <LogoComponent />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h3 className="font-semibold text-[17px] text-[#202430] mb-1.5 leading-snug group-hover:text-[#4640DE] transition-colors duration-150">
          {job.title}
        </h3>
        {/* Company · Location */}
        <div className="flex items-center gap-1.5 mb-3.5 flex-wrap">
          <span className="text-sm text-[#515B6F]">{job.company}</span>
          <span className="w-1 h-1 rounded-full bg-[#B8BCCA] shrink-0 inline-block" />
          <span className="text-sm text-[#515B6F]">{job.location}</span>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile card — vertical layout ────────────────────────────────────────────
// logo top-left | title | company•location | tags

function MobileJobCard({ job }: { job: JobItem }) {
  const { LogoComponent } = job;
  return (
    <div className="bg-white rounded-2xl px-5 pt-5 pb-5 cursor-pointer active:scale-[0.99] transition-transform duration-100">
      {/* Logo — smaller on mobile */}
      <div className="w-10 h-10 mb-4 shrink-0">
        {/* Scale down the logo wrapper */}
        <div className="scale-[0.72] origin-top-left">
          <LogoComponent />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-[16px] text-[#202430] mb-1.5 leading-snug">
        {job.title}
      </h3>

      {/* Company · Location */}
      <div className="flex items-center gap-1.5 mb-3.5 flex-wrap">
        <span className="text-sm text-[#515B6F]">{job.company}</span>
        <span className="w-1 h-1 rounded-full bg-[#B8BCCA] shrink-0 inline-block" />
        <span className="text-sm text-[#515B6F]">{job.location}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}

// ── Arrow icon ────────────────────────────────────────────────────────────────

function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function LatestJobsOpen() {
  const leftJobs = JOBS.filter((_, i) => i % 2 === 0);
  const rightJobs = JOBS.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-[#F8F8FD] py-14 sm:py-20 relative overflow-hidden">

      {/* ── Decorative lines top-right ── */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-80 h-60 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg width="320" height="240" viewBox="0 0 320 240" fill="none">
          <line x1="320" y1="30" x2="150" y2="200" stroke="#C7D2FE" strokeWidth="1.5" />
          <line x1="320" y1="70" x2="200" y2="200" stroke="#C7D2FE" strokeWidth="1" />
          <line x1="320" y1="0" x2="110" y2="210" stroke="#C7D2FE" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Decorative lines bottom-right ── */}
      <div
        className="hidden lg:block absolute bottom-0 right-0 w-80 h-60 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg width="320" height="240" viewBox="0 0 320 240" fill="none">
          <line x1="320" y1="210" x2="150" y2="40" stroke="#C7D2FE" strokeWidth="1.5" />
          <line x1="320" y1="240" x2="200" y2="40" stroke="#C7D2FE" strokeWidth="1" />
          <line x1="320" y1="180" x2="110" y2="30" stroke="#C7D2FE" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="font-clash font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#202430]">
            Latest{" "}
            <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          <button className="hidden sm:flex items-center gap-2 text-[#4640DE] font-semibold text-base hover:gap-3 transition-all duration-200 shrink-0">
            Show all jobs
            <ArrowIcon />
          </button>
        </div>

        {/* ══════════════════════════════════════════════════
            DESKTOP (lg+)
            Two side-by-side white panels, each with
            divider-separated horizontal job rows
        ══════════════════════════════════════════════════ */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {/* Left panel */}
          <div className="bg-white rounded-[4px] border border-[#D6DDEB] overflow-hidden divide-y divide-[#D6DDEB]">
            {leftJobs.map((job) => (
              <DesktopJobRow key={job.id} job={job} />
            ))}
          </div>
          {/* Right panel */}
          <div className="bg-white rounded-[4px] border border-[#D6DDEB] overflow-hidden divide-y divide-[#D6DDEB]">
            {rightJobs.map((job) => (
              <DesktopJobRow key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            TABLET (md–lg)
            Single full-width white panel, same row style
        ══════════════════════════════════════════════════ */}
        <div className="hidden md:block lg:hidden bg-white rounded-[4px] border border-[#D6DDEB] overflow-hidden divide-y divide-[#D6DDEB]">
          {JOBS.map((job) => (
            <DesktopJobRow key={job.id} job={job} />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════
            MOBILE (<md)
            Single column of vertical white cards
            Logo on top-left, title → company → tags below
        ══════════════════════════════════════════════════ */}
        <div className="md:hidden flex flex-col gap-4">
          {JOBS.map((job) => (
            <MobileJobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Mobile "Show all jobs" */}
        <div className="sm:hidden mt-8 flex justify-center">
          <button className="flex items-center gap-2 text-[#4640DE] font-semibold text-base">
            Show all jobs
            <ArrowIcon size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}