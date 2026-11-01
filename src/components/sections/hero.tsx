"use client";

import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Hero() {
  return (
    <header className="relative pt-20 bg-slate-900 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/4"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="400" fill="url(#gradient)" />
          <defs>
            <radialGradient
              id="gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4">
          Sejak 2005
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          CV HARTO JAYA MAKMUR ABADI
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Pengepul & Pembeli Aset Bekas Nasional
        </p>
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>Hubungi Kami</span>
          <ArrowRight className="size-5 ml-2" />
        </a>
      </div>
    </header>
  );
}
