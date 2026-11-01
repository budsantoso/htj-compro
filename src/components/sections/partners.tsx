"use client";

import Image from "next/image";
import { CLIENT_PARTNERS } from "@/data/company";

export function Partners() {
  // Row 1: 5 partners
  const row1 = CLIENT_PARTNERS.slice(0, 5);
  // Row 2: 5 partners
  const row2 = CLIENT_PARTNERS.slice(5, 10);

  // Repeat for continuous seamless infinite loop
  const row1Extended = [...row1, ...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="mitra" className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Kepercayaan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Trusted by leading organizations, corporate banks, and institutions across Indonesia.
          </p>
        </div>
      </div>

      {/* 2-Row Infinite Marquee Carousel Container (Borderless, Clean, Logo-First) */}
      <div className="relative w-full space-y-6">
        {/* Left & Right Gradient Shadows for seamless fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* ROW 1: Slides Left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-10 sm:gap-14 py-3">
            {row1Extended.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center justify-center shrink-0 w-40 sm:w-48 h-14 sm:h-16 px-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
                title={`${partner.name} (${partner.category})`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Slides Right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-10 sm:gap-14 py-3">
            {row2Extended.map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center justify-center shrink-0 w-40 sm:w-48 h-14 sm:h-16 px-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
                title={`${partner.name} (${partner.category})`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
