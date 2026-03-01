"use client";

import Link from "next/link";
import { useState } from "react";

// ── Social icon components ────────────────────────────────────────────────────

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const SOCIAL_LINKS = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: DribbbleIcon, label: "Dribbble", href: "#" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: TwitterIcon, label: "Twitter", href: "#" },
];

// ── Nav data ──────────────────────────────────────────────────────────────────

const ABOUT_LINKS = [
  { label: "Companies", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Advice", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const RESOURCE_LINKS = [
  { label: "Help Docs", href: "#" },
  { label: "Guide", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Contact Us", href: "#" },
];

// ── Footer component ──────────────────────────────────────────────────────────

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    // Handle subscribe logic here
    setEmail("");
  };

  return (
    <footer style={{ backgroundColor: "#1E2028" }}>

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="17" cy="17" r="15" stroke="#4640DE" strokeWidth="3" fill="none" />
                <circle cx="17" cy="17" r="7" fill="#4640DE" />
                <circle cx="17" cy="17" r="3.5" fill="white" />
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">
                QuickHire
              </span>
            </Link>

            {/* Tagline */}
            <p style={{ color: "#9CA3AF" }} className="text-sm leading-relaxed max-w-[260px]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* ── Col 2: About ── */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              About
            </h3>
            <ul className="flex flex-col gap-3.5">
              {ABOUT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ color: "#9CA3AF" }}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Resources ── */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5">
              Resources
            </h3>
            <ul className="flex flex-col gap-3.5">
              {RESOURCE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ color: "#9CA3AF" }}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Newsletter ── */}
          <div>
            <h3 className="text-white font-semibold text-base mb-3">
              Get job notifications
            </h3>
            <p style={{ color: "#9CA3AF" }} className="text-sm leading-relaxed mb-5">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            {/* Email input + Subscribe button — inline attached */}
            <div className="flex h-[52px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Email Address"
                style={{
                  backgroundColor: "#2A2D36",
                  color: "white",
                  border: "1px solid #3D4049",
                  borderRight: "none",
                  outline: "none",
                }}
                className="flex-1 min-w-0 px-4 text-sm placeholder:text-[#6B7280] rounded-l-[4px]"
              />
              <button
                onClick={handleSubscribe}
                style={{ backgroundColor: "#4640DE" }}
                className="shrink-0 px-5 text-white font-semibold text-sm rounded-r-[4px] hover:bg-[#3730CB] transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid #2D3039" }}
      />

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p style={{ color: "#6B7280" }} className="text-sm">
            © {new Date().getFullYear()} QuickHire. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                style={{ backgroundColor: "#2D3039", color: "#9CA3AF" }}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:text-white hover:bg-[#4640DE] transition-all duration-200"
              >
                <Icon />
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}