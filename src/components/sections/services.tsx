"use client";

import { Recycle, Cog, Truck, Gavel, PackageCheck, MapPin } from "lucide-react";
import { SERVICES } from "@/data/company";

const icons = [Recycle, Cog, Truck, Gavel, PackageCheck, MapPin];

export function Services() {
  return (
    <section id="layanan" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Bidang Usaha & Layanan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Layanan profesional dan menyeluruh dalam pengelolaan aset bekas, limbah logam, dan hasil lelang korporasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => {
            const Icon = icons[idx] || Recycle;

            return (
              <div
                key={s.id}
                className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="size-8 text-slate-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
