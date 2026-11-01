"use client";

import { ImageIcon } from "lucide-react";

export function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Dokumentasi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Galeri Kegiatan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dokumentasi aktivitas penimbangan, pengangkutan limbah, dan penerimaan aset di berbagai lokasi mitra.
          </p>
        </div>

        {/* 2x2 Grid of Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="placeholder-pattern border-2 border-dashed border-slate-300 rounded-2xl h-72 sm:h-80 flex flex-col items-center justify-center text-slate-400 p-6 text-center hover:border-orange-500 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-xs flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ImageIcon className="size-8 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>
              <span className="font-semibold text-slate-600 text-sm sm:text-base">
                Foto Kegiatan {num}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                Area operasional, armada, &amp; penimbangan
              </span>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            * Dokumentasi foto di lapangan saat proses timbang dan muat aset korporasi mitra.
          </p>
        </div>
      </div>
    </section>
  );
}
