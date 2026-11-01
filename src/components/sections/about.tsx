"use client";

import { Calendar, User, MapPin, CheckCircle, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function About() {
  return (
    <section id="tentang" className="py-24 bg-card/60 relative overflow-hidden border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D33633]/30 bg-[#D33633]/10 px-3.5 py-1 text-xs font-bold text-[#D33633]">
              <span>TENTANG PERUSAHAAN</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
              Mitra Strategis & Terpercaya Pengelolaan Aset Non-Produktif Perusahaan
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong>CV Harto Jaya Makmur Abadi</strong> adalah entitas usaha nasional yang bergerak secara terintegrasi
                dalam bidang penerimaan dan pembelian limbah besi, sisa material logam manufaktur, mesin pabrik bekas,
                alat berat konstruksi, hingga aset hasil lelang resmi institusi korporasi.
              </p>
              <p>
                Didirikan sejak tahun <strong>2005</strong> di bawah kepemimpinan langsung <strong>Bapak Hartono</strong>,
                kami telah menorehkan rekam jejak integritas tinggi bersama berbagai institusi perbankan besar (Bank Indonesia, Mandiri, BNI, Danamon, Permata),
                jaringan hotel bertaraf internasional (Aston, Mercure), lembaga pendidikan (UPH), hingga instansi perwakilan negara sahabat (Kedutaan Besar Singapura).
              </p>
              <p>
                Dengan kesiapan modal likuid, sistem penimbangan transparan, armada penjemputan mandiri, dan legalitas berita acara serah terima
                yang tertib, kami menjamin seluruh proses likuidasi aset Anda berjalan aman, profesional, dan menguntungkan.
              </p>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border">
                <Scale className="size-4 text-[#6BA4E8] shrink-0" />
                <span className="text-xs font-semibold text-foreground">Timbangan Transparan</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border">
                <ShieldCheck className="size-4 text-[#D33633] shrink-0" />
                <span className="text-xs font-semibold text-foreground">Legalitas Berita Acara</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border">
                <CheckCircle className="size-4 text-[#25D366] shrink-0" />
                <span className="text-xs font-semibold text-foreground">Pembayaran Cepat</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-md flex items-start gap-4 hover:border-[#6BA4E8]/50 transition-colors">
              <div className="p-3 rounded-xl bg-[#0b0f19] text-[#6BA4E8] border border-border shrink-0">
                <Calendar className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Sejarah Pendirian</span>
                <h3 className="font-heading font-black text-2xl text-foreground mt-0.5">Tahun 2005</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Konsisten melayani transaksi lelang & scrap industri selama lebih dari 2 dekade.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-md flex items-start gap-4 hover:border-[#D33633]/50 transition-colors">
              <div className="p-3 rounded-xl bg-[#0b0f19] text-[#D33633] border border-border shrink-0">
                <User className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Pimpinan Usaha</span>
                <h3 className="font-heading font-black text-2xl text-foreground mt-0.5">{COMPANY_INFO.founder}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Menjamin langsung setiap kesepakatan harga, transparansi timbangan, dan kepastian pembayaran.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-md flex items-start gap-4 hover:border-[#6BA4E8]/50 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="p-3 rounded-xl bg-[#0b0f19] text-[#6BA4E8] border border-border shrink-0">
                <MapPin className="size-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Wilayah Operasional</span>
                <h3 className="font-heading font-black text-2xl text-foreground mt-0.5">Seluruh Indonesia</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Didukung jaringan logistik laut dan darat untuk evakuasi aset borongan di berbagai pulau.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
