"use client";

import { ShieldCheck, Truck, Scale, BadgeDollarSign, Clock, FileText } from "lucide-react";

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
    <section id="keunggulan" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Keunggulan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Mengapa Memilih CV HJMA?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Standar profesionalisme tinggi yang membedakan kami dari pengepul konvensional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6">
                  <p.icon className="size-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
