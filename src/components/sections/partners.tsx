"use client";

import { Building2, Landmark, GraduationCap, Globe2 } from "lucide-react";
import { CLIENT_PARTNERS } from "@/data/company";

// Category icon helper
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Perbankan":
      return Landmark;
    case "Hospitality":
      return Building2;
    case "Pendidikan":
      return GraduationCap;
    case "Institusi / Asing":
      return Globe2;
    default:
      return Building2;
  }
};

export function Partners() {
  // Row 1: Partners 0 - 4
  const row1 = CLIENT_PARTNERS.slice(0, 5);
  // Row 2: Partners 5 - 9
  const row2 = CLIENT_PARTNERS.slice(5, 10);

  // Duplicate for seamless infinite marquee loop
  const row1Extended = [...row1, ...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="mitra" className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Kepercayaan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Rekanan Kerjasama
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dipercaya oleh institusi perbankan, perhotelan, pendidikan, dan lembaga internasional terkemuka.
          </p>
        </div>
      </div>

      {/* 2-Row Infinite Marquee Carousel Container */}
      <div className="relative w-full space-y-4">
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* ROW 1: Slides Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-4 py-2">
            {row1Extended.map((partner, index) => {
              const IconComp = getCategoryIcon(partner.category);
              return (
                <div
                  key={`row1-${index}`}
                  className="flex items-center gap-3.5 bg-white border border-slate-200/90 rounded-xl px-5 py-3.5 shadow-2xs hover:shadow-md hover:border-orange-500/60 transition-all duration-300 shrink-0 w-64 sm:w-72"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <IconComp className="size-5 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {partner.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate font-medium">
                      {partner.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROW 2: Slides Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-4 py-2">
            {row2Extended.map((partner, index) => {
              const IconComp = getCategoryIcon(partner.category);
              return (
                <div
                  key={`row2-${index}`}
                  className="flex items-center gap-3.5 bg-white border border-slate-200/90 rounded-xl px-5 py-3.5 shadow-2xs hover:shadow-md hover:border-orange-500/60 transition-all duration-300 shrink-0 w-64 sm:w-72"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <IconComp className="size-5 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {partner.name}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate font-medium">
                      {partner.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
