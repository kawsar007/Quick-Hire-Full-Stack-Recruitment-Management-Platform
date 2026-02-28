"use client";
import Image from "next/image";
import { useState } from "react";
import SearchFilters from "./SearchFilters";
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


export default function HeroSection({ search, category, location,
  onSearchChange, onCategoryChange, onLocationChange, onReset, }: Props) {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="relative bg-[#F8F8FD] overflow-hidden">
      {/* Decorative geometric lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        <svg className="absolute left-50 top-0 opacity-20" width="600" height="400" viewBox="0 0 400 400" fill="none">
          <rect x="80" y="40" width="400" height="200" rx="2" stroke="#4640DE" strokeWidth="1.5" transform="rotate(10 80 80)" />
          <rect x="120" y="80" width="200" height="200" rx="2" stroke="#4640DE" strokeWidth="1" transform="rotate(10 120 80)" />
          <rect x="160" y="120" width="200" height="200" rx="2" stroke="#26A4FF" strokeWidth="1" transform="rotate(10 160 120)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">

            <h1 className="font-clash font-semibold text-4xl sm:text-5xl lg:text-[72px] leading-[110%] tracking-[0%] text-[#202430] mb-6">
              Discover <br />
              more than <br />
              <span className="text-[#26A4FF] squiggle-underline">
                5000+ Jobs
              </span>
            </h1>
            <p className="text-[#515B6F] text-base sm:text-lg lg:text-[20px] font-normal leading-[160%] tracking-[0%] mb-10 max-w-md">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>
            <SearchFilters
              search={search} category={category} location={location}
              onSearchChange={onSearchChange} onCategoryChange={onCategoryChange}
              onLocationChange={onLocationChange} onReset={onReset}
            />

            {/* Popular searches */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-[#515B6F] text-sm">Popular:</span>
              {POPULAR_SEARCHES.map((term, index) => (
                <button
                  key={term}
                  className="text-sm text-[#515B6F] hover:text-[#4640DE] transition-colors"
                >
                  {term}
                  {index !== POPULAR_SEARCHES.length - 1 && ","}
                </button>
              ))}
            </div>
          </div>

          {/* Right – Hero Image placeholder */}
          <div className="relative hidden lg:flex items-end justify-end h-full">
            <Image src={HeloImage} alt="Hero Image" width={501} height={70} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Companies strip */}
      <div className="border-t border-[#D6DDEB] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <p className="text-[#7C8493] text-sm mb-6">Companies we helped grow</p>
          <div className="flex flex-wrap items-center gap-10">
            {["Vodafone", "Intel", "TESLA", "AMD", "Talkit"].map((company) => (
              <span key={company} className="text-[#515B6F] font-bold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
