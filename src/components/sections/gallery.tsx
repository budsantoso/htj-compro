"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon, Video, Play, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "/gallery/dokumentasi-1.jpg",
    title: "Pengangkutan & Evakuasi Muatan Aset Kantor",
    description: "Armada operasional HTJ proses muat dan pengikatan aman di area Jakarta Selatan.",
    tag: "Evakuasi & Angkut",
  },
  {
    id: "g2",
    type: "image",
    src: "",
    title: "Penimbangan Limbah Besi & Logam Industri",
    description: "Proses verifikasi jembatan timbang resmi akurat dan transparan.",
    tag: "Timbang Logam",
  },
  {
    id: "g3",
    type: "video",
    src: "",
    title: "Dokumentasi Video Lapangan Operasional",
    description: "Mobilisasi tim dan peralatan evakuasi di lokasi mitra korporasi.",
    tag: "Video Lapangan",
  },
  {
    id: "g4",
    type: "image",
    src: "",
    title: "Pembongkaran & Pembersihan Site Pergudangan",
    description: "Pelepasan konstruksi baja dan material scrap industri siap angkut.",
    tag: "Bongkaran Gudang",
  },
];

export function Gallery() {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 bg-orange-500/10 text-orange-600 font-semibold rounded-full text-sm mb-4">
            Dokumentasi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Galeri Kegiatan &amp; Video
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dokumentasi nyata aktivitas penimbangan, pengangkutan limbah, dan evakuasi aset di lokasi mitra.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Semua Dokumentasi
            </button>
            <button
              onClick={() => setFilter("image")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "image"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <ImageIcon className="size-4" />
              <span>Foto Kegiatan</span>
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                filter === "video"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Video className="size-4" />
              <span>Video Lapangan</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const hasMedia = Boolean(item.src);

            return (
              <div
                key={item.id}
                className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {hasMedia ? (
                    item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )
                  ) : (
                    <div className="placeholder-pattern w-full h-full border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                      <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        {item.type === "video" ? (
                          <Video className="size-7 text-slate-400 group-hover:text-orange-500 transition-colors" />
                        ) : (
                          <ImageIcon className="size-7 text-slate-400 group-hover:text-orange-500 transition-colors" />
                        )}
                      </div>
                      <span className="font-semibold text-slate-600 text-xs sm:text-sm">
                        {item.type === "video" ? "Slot Video Dokumentasi" : "Slot Foto Dokumentasi"}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        Siap diupdate dengan file dokumentasi berikutnya
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold rounded-md border border-white/10 shadow-sm flex items-center gap-1.5">
                    {item.type === "video" ? (
                      <>
                        <Play className="size-3 text-orange-400 fill-orange-400" />
                        <span>{item.tag}</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="size-3 text-orange-400" />
                        <span>{item.tag}</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 italic">
            * Dokumentasi foto &amp; video diambil langsung di lapangan saat proses bongkar, timbang, dan evakuasi aset mitra korporasi.
          </p>
        </div>
      </div>
    </section>
  );
}
