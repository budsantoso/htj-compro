"use client";

import Image from "next/image";
import { ArrowRight, Phone, Shield, Award, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, COMPANY_STATS } from "@/data/company";

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-[92vh] pt-28 pb-20 flex items-center overflow-hidden bg-[#060911]">
      {/* Dynamic Background Grid & Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-[#6BA4E8]/10 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[#D33633]/15 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6BA4E8]/30 bg-[#6BA4E8]/10 px-4 py-1.5 text-xs font-semibold text-[#6BA4E8] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>BERPENGALAMAN SEJAK 2005 • SKALA NASIONAL</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Pengepul & Pembeli{" "}
              <span className="bg-gradient-to-r from-[#6BA4E8] via-sky-300 to-[#D33633] bg-clip-text text-transparent">
                Aset Bekas Korporasi
              </span>{" "}
              Nasional.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong>CV Harto Jaya Makmur Abadi</strong> di bawah pimpinan <strong>Bapak Hartono</strong> melayani
              penerimaan limbah besi, alat berat, mesin pabrik, dan pembelian lelang aset institusi perbankan & korporasi
              secara transparan, resmi, dan langsung dibayar.
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="size-3.5 text-[#25D366]" />
                <span>Dana Likuid Langsung</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="size-3.5 text-[#6BA4E8]" />
                <span>Armada Evakuasi Mandiri</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                <CheckCircle2 className="size-3.5 text-[#D33633]" />
                <span>Berita Acara & Legal Sah</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#6BA4E8] to-[#437bc6] px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-[#6BA4E8]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Phone className="size-4 text-slate-950" />
                <span>Konsultasi Penjualan / Lelang</span>
              </a>

              <a
                href="#layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-600 transition-all"
              >
                <span>Lihat Bidang Layanan</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Logo Emblem Presentation */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-black flex items-center justify-center shadow-inner group">
                <Image
                  src="/logo-htj.jpg"
                  alt="Emblem HTJ - CV Harto Jaya Makmur Abadi"
                  fill
                  priority
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status Highlight Banner */}
              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-4 text-left">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Shield className="size-3 text-[#6BA4E8]" /> Pengalaman
                  </span>
                  <p className="font-heading font-black text-xl text-white">20+ Tahun</p>
                  <p className="text-[11px] text-slate-400">Sejak tahun 2005</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Award className="size-3 text-[#D33633]" /> Jangkauan
                  </span>
                  <p className="font-heading font-black text-xl text-white">Nasional</p>
                  <p className="text-[11px] text-slate-400">Seluruh Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Numbers Row */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                {stat.value}
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6BA4E8]">
                {stat.label}
              </h4>
              <p className="text-[11px] text-slate-400 leading-snug">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
