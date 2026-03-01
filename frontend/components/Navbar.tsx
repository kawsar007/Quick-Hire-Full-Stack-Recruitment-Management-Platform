"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#D6DDEB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            {/* Ring + dot logo matching the reference */}
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="15" stroke="#4640DE" strokeWidth="3" fill="none" />
              <circle cx="17" cy="17" r="7" fill="#4640DE" />
              <circle cx="17" cy="17" r="3.5" fill="white" />
            </svg>
            <span className="text-xl font-bold text-[#202430] tracking-tight">QuickHire</span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#515B6F] font-medium text-base hover:text-[#4640DE] transition-colors duration-200"
            >
              Find Jobs
            </Link>
            <Link
              href="/admin"
              className="text-[#515B6F] font-medium text-base hover:text-[#4640DE] transition-colors duration-200"
            >
              Browse Companies
            </Link>
          </div>

          {/* ── Desktop Auth Buttons ── */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#4640DE] font-semibold text-base hover:text-[#3730CB] transition-colors duration-200 px-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#4640DE] text-white font-semibold text-base px-6 py-2.5 rounded hover:bg-[#3730CB] transition-colors duration-200 whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              /* X icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#202430" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#202430" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D6DDEB] bg-white px-6 py-5 flex flex-col gap-5 shadow-md">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-[#515B6F] font-medium text-base hover:text-[#4640DE] transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/admin"
            onClick={() => setMobileOpen(false)}
            className="text-[#515B6F] font-medium text-base hover:text-[#4640DE] transition-colors"
          >
            Browse Companies
          </Link>

          <div className="border-t border-[#D6DDEB] pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-[#4640DE] font-semibold text-base hover:text-[#3730CB] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="bg-[#4640DE] text-white font-semibold text-base px-6 py-3 rounded hover:bg-[#3730CB] transition-colors text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <nav className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-9 h-9 bg-[#4640DE] rounded-full flex items-center justify-center">
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                 <path d="M10 3L17 7.5V12.5L10 17L3 12.5V7.5L10 3Z" fill="white" />
//                 <circle cx="10" cy="10" r="3" fill="#4640DE" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold text-[#202430]">QuickHire</span>
//           </Link>

//           {/* Nav Links */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link href="/" className="text-[#515B6F] font-medium hover:text-[#4640DE] transition-colors">
//               Find Jobs
//             </Link>
//             <Link href="/admin" className="text-[#515B6F] font-medium hover:text-[#4640DE] transition-colors">
//               Admin
//             </Link>
//           </div>

//           {/* Auth Buttons */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/login"
//               className="text-[#4640DE] font-semibold hover:text-[#3730CB] transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="bg-[#4640DE] text-white font-semibold px-5 py-2.5 rounded hover:bg-[#3730CB] transition-colors"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }