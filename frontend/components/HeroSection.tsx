"use client";

import Image from "next/image";
import HeloImage from "/public/hero-image.png";

const POPULAR_SEARCHES = ["UI Designer", "UX Researcher", "Android", "Admin"];

interface Props {
  search: string;
  category: string;
  location: string;
  onSearchChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onLocationChange: (v: string) => void;
  onReset: () => void;
}

export default function HeroSection({
  search,
  category,
  location,
  onSearchChange,
  onCategoryChange,
  onLocationChange,
  onReset,
}: Props) {
  return (
    <section className="relative bg-[#F8F8FD] overflow-hidden">

      {/* ── Decorative Rotated Rectangle Lines ── */}
      {/* Hidden on mobile — too narrow to render meaningfully */}
      <div
        className="hidden md:block absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          className="absolute right-0 top-0 w-full h-full"
          viewBox="0 0 640 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid meet"
        >
          <rect x="180" y="80" width="280" height="210" rx="4" stroke="#C7D2FE" strokeWidth="1.5" transform="rotate(-6 180 80)" />
          <rect x="230" y="130" width="260" height="195" rx="4" stroke="#C7D2FE" strokeWidth="1.5" transform="rotate(-6 230 130)" />
          <rect x="140" y="160" width="300" height="220" rx="4" stroke="#C7D2FE" strokeWidth="1.2" transform="rotate(-10 140 160)" />
          <rect x="260" y="200" width="240" height="180" rx="4" stroke="#C7D2FE" strokeWidth="1" transform="rotate(-4 260 200)" />
        </svg>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ── Left Column — Text + Search ── */}
          <div className="relative z-10 min-w-0 py-10 lg:py-16">

            {/* Headline */}
            <h1 className="font-clash font-semibold text-[38px] sm:text-5xl lg:text-[72px] leading-[110%] tracking-[-0.5px] text-[#202430] mb-4 sm:mb-6">
              Discover <br />
              more than <br />
              {/* Blue "5000+ Jobs" with brush-stroke squiggle underline */}
              <span className="relative text-[#26A4FF] inline-block pb-5">
                5000+ Jobs
                <svg
                  className="absolute left-0 w-full"
                  style={{ bottom: "2px" }}
                  viewBox="0 0 460 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path d="M4 18 C40 10, 80 22, 120 16 C160 10, 200 22, 240 16 C280 10, 320 22, 360 16 C390 11, 425 20, 456 15"
                    stroke="#26A4FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
                  <path d="M4 17 C40 9, 80 21, 120 15 C160 9, 200 21, 240 15 C280 9, 320 21, 360 15 C390 10, 425 19, 456 14"
                    stroke="#26A4FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 15 C40 7, 80 19, 120 13 C160 7, 200 19, 240 13 C280 7, 320 19, 360 13 C390 8, 425 17, 456 12"
                    stroke="#26A4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#515B6F] text-base sm:text-lg lg:text-[18px] font-normal leading-[160%] mb-8 sm:mb-10">
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>

            {/* ── Search Bar Card ── */}
            {/*
              Mobile  (<sm): vertical stack — input / divider / location / button
              sm+         : single horizontal row, all inline, button flush right
            */}
            <div className="w-full max-w-[600px] bg-white rounded-[4px] shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-[#D6DDEB] overflow-hidden
                            flex flex-col sm:flex-row sm:items-stretch">

              {/* Keyword input */}
              <div className="flex items-center gap-3 flex-1 px-4 sm:px-5 py-3 sm:py-4 min-w-0">
                <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={search}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-transparent text-[#515B6F] placeholder-[#A8ADB7] text-base outline-none font-normal"
                />
              </div>

              {/* Horizontal rule on mobile → vertical rule on sm+ */}
              <div className="h-px sm:h-auto sm:w-px bg-[#D6DDEB] sm:self-stretch sm:my-3" />

              {/* Location select */}
              <div className="relative flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-4 sm:w-[175px] shrink-0">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <select
                  value={location}
                  onChange={(e) => onLocationChange(e.target.value)}
                  className="w-full bg-transparent text-[#515B6F] text-base outline-none appearance-none font-normal cursor-pointer pr-6"
                >
                  <option value="">Florence, Italy</option>
                  <option value="london">London, UK</option>
                  <option value="newyork">New York, USA</option>
                  <option value="berlin">Berlin, Germany</option>
                  <option value="tokyo">Tokyo, Japan</option>
                </select>
                <svg className="absolute right-3 sm:right-4 pointer-events-none shrink-0" width="16" height="16"
                  viewBox="0 0 24 24" fill="none" stroke="#7C8493" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* CTA — full width on mobile, auto-width attached right on sm+ */}
              <button
                onClick={() => onSearchChange(search)}
                className="w-full sm:w-auto shrink-0 bg-[#4640DE] hover:bg-[#3730CB] active:bg-[#2d27a8]
                           text-white font-semibold text-base px-6 sm:px-7 py-3 sm:py-0
                           transition-colors duration-200 whitespace-nowrap"
              >
                Search my job
              </button>
            </div>

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4">
              <span className="text-[#515B6F] text-sm font-medium">Popular :</span>
              {POPULAR_SEARCHES.map((term, index) => (
                <button
                  key={term}
                  className="text-sm text-[#515B6F] hover:text-[#4640DE] transition-colors duration-200"
                >
                  {term}{index !== POPULAR_SEARCHES.length - 1 && ","}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right Column — Hero Image (lg only) ── */}
          <div className="relative hidden lg:flex items-end justify-end h-full min-h-[520px]">
            <Image
              src={HeloImage}
              alt="Hero Image"
              width={501}
              height={560}
              className="object-contain object-bottom relative z-10"
              priority
            />
          </div>

        </div>
      </div>

      {/* ── Bottom-right diagonal cut-out ── */}
      {/* Only shown on lg where the hero has two columns and enough height */}
      <div
        className="hidden lg:block absolute bottom-[156px] right-0 w-[340px] h-[180px] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <svg width="340" height="190" viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="340,0 340,180 0,180" fill="white" />
        </svg>
      </div>

      {/* ── Companies Strip ── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-[#7C8493] text-sm mb-6 sm:mb-8">Companies we helped grow</p>

          {/* Logo row — evenly spaced, muted gray, hover brightens */}
          <div className="flex flex-wrap items-center justify-between gap-y-8 gap-x-4">

            {/* ── Vodafone ── */}
            <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default" aria-label="Vodafone">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="13" stroke="#9CA3AF" strokeWidth="3.5" fill="none" />
                <path d="M16 8 C20 8, 24 12, 24 16 C24 20, 20 24, 16 24" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
              <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 400, fontSize: "18px", color: "#9CA3AF", letterSpacing: "-0.3px" }}>vodafone</span>
            </div>

            {/* ── Intel ── */}
            <div className="opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default" aria-label="Intel">
              <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 300, fontSize: "26px", color: "#9CA3AF", letterSpacing: "-1px" }}>intel.</span>
            </div>

            {/* ── Tesla ── */}
            <div className="opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default" aria-label="Tesla">
              {/* T-shield mark + wordmark */}
              <div className="flex items-center gap-2">
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
                  <path d="M0 4 Q10 0 20 4 L18 8 Q10 5 2 8 Z" fill="#9CA3AF" />
                  <rect x="8.5" y="7" width="3" height="21" rx="1" fill="#9CA3AF" />
                </svg>
                <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 600, fontSize: "20px", color: "#9CA3AF", letterSpacing: "4px" }}>TESLA</span>
              </div>
            </div>

            {/* ── AMD ── */}
            <div className="opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default" aria-label="AMD">
              <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 700, fontSize: "22px", color: "#9CA3AF", letterSpacing: "1px" }}>AMD</span>
              <span style={{ fontFamily: "Arial,sans-serif", fontWeight: 700, fontSize: "16px", color: "#9CA3AF", verticalAlign: "super" }}>▲</span>
            </div>

            {/* ── Talkit ── */}
            <div className="opacity-40 hover:opacity-70 transition-opacity duration-200 cursor-default" aria-label="Talkit">
              <span style={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "22px", color: "#9CA3AF" }}>Talkit</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}



// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import SearchFilters from "./SearchFilters";
// import HeloImage from "/public/hero-image.png";

// const POPULAR_SEARCHES = ["UI Designer", "UX Researcher", "Android", "Admin"];

// interface Props {
//   search: string;
//   category: string;
//   location: string;
//   onSearchChange: (v: string) => void;
//   onCategoryChange: (v: string) => void;
//   onLocationChange: (v: string) => void;
//   onReset: () => void;
// }


// export default function HeroSection({ search, category, location,
//   onSearchChange, onCategoryChange, onLocationChange, onReset, }: Props) {
//   const [keyword, setKeyword] = useState("");

//   return (
//     <section className="relative bg-[#F8F8FD] overflow-hidden">
//       {/* Decorative geometric lines */}
//       <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
//         <svg className="absolute left-50 top-0 opacity-20" width="600" height="400" viewBox="0 0 400 400" fill="none">
//           <rect x="80" y="40" width="400" height="200" rx="2" stroke="#4640DE" strokeWidth="1.5" transform="rotate(10 80 80)" />
//           <rect x="120" y="80" width="200" height="200" rx="2" stroke="#4640DE" strokeWidth="1" transform="rotate(10 120 80)" />
//           <rect x="160" y="120" width="200" height="200" rx="2" stroke="#26A4FF" strokeWidth="1" transform="rotate(10 160 120)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:pt-2">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="relative z-10">

//             <h1 className="font-clash font-semibold text-4xl sm:text-5xl lg:text-[72px] leading-[110%] tracking-[0%] text-[#202430] mb-6">
//               Discover <br />
//               more than <br />
//               <span className="text-[#26A4FF] squiggle-underline">
//                 5000+ Jobs
//               </span>
//             </h1>
//             <p className="text-[#515B6F] text-base sm:text-lg lg:text-[20px] font-normal leading-[160%] tracking-[0%] mb-10 max-w-md">
//               Great platform for the job seeker that searching for new career heights and passionate about startups.
//             </p>
//             <SearchFilters
//               search={search} category={category} location={location}
//               onSearchChange={onSearchChange} onCategoryChange={onCategoryChange}
//               onLocationChange={onLocationChange} onReset={onReset}
//             />

//             {/* Popular searches */}
//             <div className="flex flex-wrap items-center gap-2 mt-4">
//               <span className="text-[#515B6F] text-sm">Popular:</span>
//               {POPULAR_SEARCHES.map((term, index) => (
//                 <button
//                   key={term}
//                   className="text-sm text-[#515B6F] hover:text-[#4640DE] transition-colors"
//                 >
//                   {term}
//                   {index !== POPULAR_SEARCHES.length - 1 && ","}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right – Hero Image placeholder */}
//           <div className="relative hidden lg:flex items-end justify-end h-full">
//             <Image src={HeloImage} alt="Hero Image" width={501} height={70} className="object-contain" />
//           </div>
//         </div>
//       </div>

//       {/* Companies strip */}
//       <div className="border-t border-[#D6DDEB] bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
//           <p className="text-[#7C8493] text-sm mb-6">Companies we helped grow</p>
//           <div className="flex flex-wrap items-center gap-10">
//             {["Vodafone", "Intel", "TESLA", "AMD", "Talkit"].map((company) => (
//               <span key={company} className="text-[#515B6F] font-bold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity">
//                 {company}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
