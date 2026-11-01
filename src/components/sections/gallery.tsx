"use client";

import { Camera, CheckCircle2, ShieldAlert, Sparkles, Image as ImageIcon } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Gallery() {
  const galleryItems = [
    {
      title: "Evakuasi & Angkut Limbah Besi Scrap Manufaktur",
      location: "Kawasan Industri Cikarang & Karawang",
      tag: "Scrap Logam",
    },
    {
      title: "Pembelian & Dismantling Unit Mesin Produksi Pabrik",
      location: "Area Pergudangan Tangerang & Surabaya",
      tag: "Mesin Industri",
    },
    {
      title: "Eksekusi Lelang Aset Non-Produktif Perbankan",
      location: "Gedung Kantor Pusat & Cabang Jakarta",
      tag: "Lelang Korporasi",
    },
    {
      title: "Pelepasan & Mobilisasi Alat Berat Konstruksi",
      location: "Site Project Infrastruktur Jawa - Sumatera",
      tag: "Heavy Equipment",
    },
  ];

  return (
    <section id="galeri" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6BA4E8]/30 bg-[#6BA4E8]/10 px-3.5 py-1 text-xs font-bold text-[#6BA4E8]">
            <Camera className="size-3.5" />
            <span>DOKUMENTASI KEGIATAN & OPERASIONAL</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Dokumentasi Pengambilan & Evakuasi Aset
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Rekam jejak lapangan tim CV Harto Jaya Makmur Abadi dalam memobilisasi armada truk crane,
            proses penimbangan, pembongkaran aman, hingga serah terima berita acara resmi.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-border/80 bg-card/60 p-6 shadow-md overflow-hidden hover:border-[#6BA4E8] transition-all duration-300"
            >
              {/* Pattern Frame Placeholder */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-dashed border-border/90 bg-gradient-to-br from-secondary/60 to-card flex flex-col items-center justify-center p-6 text-center group-hover:border-[#6BA4E8]/60 transition-colors">
                <div className="w-14 h-14 rounded-full bg-background/80 border border-border flex items-center justify-center text-[#6BA4E8] mb-3 shadow-inner">
                  <ImageIcon className="size-6" />
                </div>
                <span className="text-xs font-bold text-foreground">
                  Dokumentasi Lapangan Operasional #{idx + 1}
                </span>
                <span className="text-[11px] text-muted-foreground mt-1 font-mono">
                  Foto Resmi CV Harto Jaya Makmur Abadi
                </span>

                <div className="absolute top-4 right-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-mono font-bold text-[#D33633] border border-border">
                  {item.tag}
                </div>
              </div>

              {/* Caption details below */}
              <div className="mt-5 space-y-1">
                <h3 className="font-heading font-bold text-base text-foreground group-hover:text-[#6BA4E8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[#25D366]" />
                  <span>Lokasi: {item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0b0f19] via-slate-900 to-[#0b0f19] p-6 sm:p-8 border border-slate-800 shadow-xl max-w-4xl mx-auto flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#6BA4E8]/10 text-[#6BA4E8] border border-[#6BA4E8]/20 shrink-0 mt-0.5">
            <Sparkles className="size-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white block font-heading text-sm">
              SOP Keselamatan Kerja & Dokumentasi Transparan:
            </strong>
            <p>
              Setiap proses penimbangan dan evakuasi aset didokumentasikan secara rinci dengan foto penimbangan jembatan timbang resmi,
              katalog aset bernomor seri, serta penandatanganan Berita Acara Serah Terima (BAST) rangkap dua bermaterai demi kepastian audit korporasi Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
