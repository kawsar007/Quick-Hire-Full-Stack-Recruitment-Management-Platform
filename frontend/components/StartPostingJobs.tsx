"use client";

import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// StartPostingJobs
//
// Desktop  (lg+): Purple banner with diagonal corner cuts, text on the left,
//                 dashboard image overflowing upward on the right.
// Mobile   (<lg): Purple card — centered text + button on top,
//                 dashboard image clipped below (top portion visible).
// ─────────────────────────────────────────────────────────────────────────────

export default function StartPostingJobs() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Banner wrapper ── */}
        <div className="relative bg-[#4640DE] rounded-xl overflow-hidden">

          {/* ── Diagonal corner cuts — desktop only ── */}
          {/* Top-left white triangle */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{ zIndex: 3 }}
            aria-hidden="true"
          >
            {/* Smaller on mobile, larger on desktop */}
            <svg className="w-[80px] h-[60px] sm:w-[100px] sm:h-[75px] lg:w-[120px] lg:h-[90px]" viewBox="0 0 120 90" fill="none" preserveAspectRatio="none">
              <polygon points="0,0 120,0 0,90" fill="white" />
            </svg>
          </div>
          {/* Bottom-right white triangle */}
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{ zIndex: 3 }}
            aria-hidden="true"
          >
            {/* Smaller on mobile, larger on desktop */}
            <svg className="w-[80px] h-[60px] sm:w-[100px] sm:h-[75px] lg:w-[120px] lg:h-[90px]" viewBox="0 0 120 90" fill="none" preserveAspectRatio="none">
              <polygon points="120,0 120,90 0,90" fill="white" />
            </svg>
          </div>

          {/* ════════════════════════════════════════
              DESKTOP  (lg+)
          ════════════════════════════════════════ */}
          <div className="hidden lg:flex items-end min-h-[380px]">

            {/* Left — CTA */}
            <div className="flex-shrink-0 w-[42%] px-14 xl:px-20 py-14 relative z-10 self-center">
              <h2 className="font-clash font-bold text-[52px] xl:text-[58px] leading-[105%] text-white mb-5">
                Start posting<br />jobs today
              </h2>
              <p className="text-white/75 text-[18px] mb-10 leading-relaxed">
                Start posting jobs for only $10.
              </p>
              <button
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white
                           text-white font-semibold text-base rounded-[4px]
                           hover:bg-white hover:text-[#4640DE] transition-all duration-200"
              >
                Sign Up For Free
              </button>
            </div>

            {/* Right — Dashboard image overflowing upward */}
            <div className="flex-1 relative flex items-end justify-center pr-8 xl:pr-12">
              <div
                className="relative w-full"
                style={{ marginTop: "-52px", marginBottom: "-2px" }}
              >
                <Image
                  src="/dashboard-preview.jpeg"
                  alt="Dashboard preview"
                  width={780}
                  height={520}
                  className="w-full h-auto object-contain object-bottom rounded-xl
                             shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════
              MOBILE  (<lg)
          ════════════════════════════════════════ */}
          <div className="lg:hidden flex flex-col">

            {/* Top — CTA text + button */}
            <div className="px-6 sm:px-10 pt-10 pb-8 text-center">
              <h2 className="font-clash font-bold text-[36px] sm:text-[44px] leading-[108%] text-white mb-4">
                Start posting jobs<br />today
              </h2>
              <p className="text-white/75 text-base sm:text-lg mb-8 leading-relaxed">
                Start posting jobs for only $10.
              </p>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center
                           px-8 py-4 border-2 border-white text-white font-semibold
                           text-base rounded-[4px]
                           hover:bg-white hover:text-[#4640DE] transition-all duration-200"
              >
                Sign Up For Free
              </button>
            </div>

            {/* Bottom — Dashboard image, only top portion visible */}
            <div className="relative w-full px-4 sm:px-8 overflow-hidden" style={{ maxHeight: "240px" }}>
              <Image
                src="/dashboard-preview.jpeg"
                alt="Dashboard preview"
                width={780}
                height={520}
                className="w-full h-auto object-top rounded-t-xl
                           shadow-[0_-8px_40px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}