"use client";

import { CalendarCheck, UserCheck, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
              Tentang Perusahaan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Mitra Terpercaya Pengelolaan Aset & Limbah
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-justify text-sm sm:text-base">
              CV Harto Jaya Makmur Abadi adalah perusahaan yang bergerak di bidang pembelian dan penerimaan limbah besi serta aset bekas perusahaan, termasuk hasil lelang aset korporasi, mesin bekas, dan alat berat bekas.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-justify text-sm sm:text-base">
              Berdiri sejak tahun 2005 di bawah pimpinan Bapak Hartono, perusahaan ini telah membangun kepercayaan dari berbagai institusi perbankan, korporasi, hotel, dan lembaga pemerintahan maupun asing dalam proses pengadaan dan pembelian aset non-produktif secara profesional, transparan, dan sesuai prosedur.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
              Dengan cakupan layanan yang menjangkau seluruh wilayah Indonesia, CV Harto Jaya Makmur Abadi hadir sebagai mitra terpercaya.
            </p>
          </div>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-lg flex items-center justify-center text-2xl mb-4 shadow-inner">
                <CalendarCheck className="size-7 text-white" />
              </div>
              <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                Tahun Berdiri
              </h3>
              <p className="text-2xl font-bold text-slate-900">2005</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-lg flex items-center justify-center text-2xl mb-4 shadow-inner">
                <UserCheck className="size-7 text-white" />
              </div>
              <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                Pimpinan
              </h3>
              <p className="text-xl font-bold text-slate-900 mt-1">{COMPANY_INFO.founder}</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-xs flex flex-col items-center text-center hover:shadow-md transition-shadow sm:col-span-2">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-lg flex items-center justify-center text-2xl mb-4 shadow-inner">
                <MapPin className="size-7 text-white" />
              </div>
              <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                Cakupan Layanan
              </h3>
              <p className="text-xl font-bold text-slate-900 mt-1">Seluruh Indonesia (Nasional)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
