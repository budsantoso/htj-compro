"use client";

import { Building2, Landmark, GraduationCap, Globe2, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CLIENT_PARTNERS, COMPANY_INFO } from "@/data/company";

const categoryIcon: Record<string, React.ElementType> = {
  "Perbankan": Landmark,
  "Hospitality": Building2,
  "Pendidikan": GraduationCap,
  "Institusi / Asing": Globe2,
};

export function Partners() {
  return (
    <section id="mitra" className="py-24 bg-card/60 relative overflow-hidden border-y border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D33633]/30 bg-[#D33633]/10 px-3.5 py-1 text-xs font-bold text-[#D33633]">
            <span>REKANAN KERJASAMA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Dipercaya Berbagai Institusi & Korporasi Terkemuka
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Kepercayaan jangka panjang dari perbankan nasional, jaringan hotel bintang lima,
            kampus ternama, hingga kedutaan negara asing dalam transaksi pelepasan aset secara resmi.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENT_PARTNERS.map((partner, idx) => {
            const Icon = categoryIcon[partner.category] || Building2;

            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-background border border-border/80 shadow-sm flex items-center justify-between hover:border-[#6BA4E8] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-[#6BA4E8] group-hover:bg-[#6BA4E8] group-hover:text-slate-950 transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-foreground group-hover:text-[#6BA4E8] transition-colors">
                      {partner.name}
                    </h3>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Kategori: {partner.category}
                    </span>
                  </div>
                </div>

                <ShieldCheck className="size-5 text-[#25D366] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* Callout Notice */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0b0f19] to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-white">
              Ingin Mengadakan Lelang Tertutup atau Scrap Perusahaan?
            </h4>
            <p className="text-xs text-slate-400">
              Tim CV Harto Jaya Makmur Abadi siap hadir untuk survey lokasi, estimasi valuasi, dan proses tender resmi.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6BA4E8] to-[#5185cb] px-6 py-3 text-xs font-bold text-slate-950 shadow-md hover:scale-105 transition-all shrink-0"
          >
            <span>Undang Lelang / Survey</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
