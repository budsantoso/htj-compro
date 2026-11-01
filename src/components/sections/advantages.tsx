"use client";

import { ShieldCheck, Truck, Scale, BadgeDollarSign, Clock, FileText, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Advantages() {
  const points = [
    {
      icon: BadgeDollarSign,
      title: "Valuasi Kompetitif & Dana Likuid",
      desc: "Penawaran harga terbaik mengikuti standar indeks logam terkini dengan sistem pembayaran tunai atau transfer instan sebelum barang meninggalkan site.",
    },
    {
      icon: Scale,
      title: "Transparansi Timbangan Terkalibrasi",
      desc: "Penimbangan dilakukan di jembatan timbang resmi independen atau timbangan digital terverifikasi metrologi yang disaksikan bersama.",
    },
    {
      icon: Truck,
      title: "Armada & Alat Berat Mandiri",
      desc: "Didukung armada truk trailer, fuso, tronton, crane, forklift, dan peralatan pemotong gas profesional tanpa membebani fasilitas klien.",
    },
    {
      icon: FileText,
      title: "Tertib Legalitas & Berita Acara",
      desc: "Dilengkapi administrasi resmi: SPK, Berita Acara Serah Terima (BAST), invoice resmi, dan dokumen pelaporan audit aset korporasi.",
    },
    {
      icon: Clock,
      title: "Eksekusi Cepat & Tepat Waktu",
      desc: "Tim survey hadir dalam 1x24 jam untuk estimasi nilai aset dan jadwal mobilisasi evakuasi yang tepat sesuai tenggat waktu klien.",
    },
    {
      icon: ShieldCheck,
      title: "Reputasi 20+ Tahun Teruji",
      desc: "Dipercaya puluhan perbankan, hotel ternama, institusi pendidikan, dan korporasi sejak 2005 di bawah pimpinan Bapak Hartono.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-card/40 relative overflow-hidden border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D33633]/30 bg-[#D33633]/10 px-3.5 py-1 text-xs font-bold text-[#D33633]">
            <span>KEUNGGULAN UTAMA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Mengapa Klien Memilih CV Harto Jaya Makmur Abadi?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Standar profesionalisme tinggi yang membedakan kami dari pengepul konvensional pada umumnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-background border border-border/80 shadow-md hover:border-[#6BA4E8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0b0f19] text-[#6BA4E8] border border-border flex items-center justify-center mb-6 shadow-sm">
                  <p.icon className="size-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
