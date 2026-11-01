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
    id: "v1",
    type: "video",
    src: "/gallery/video-lapangan-1.mp4",
    title: "Operasional Muat & Evakuasi Barang Kantor",
    description: "Aktivitas pengangkutan dan penataan material aset kantor ke armada kendaraan di area Jakarta Selatan.",
    tag: "Video Evakuasi 1",
  },
  {
    id: "v2",
    type: "video",
    src: "/gallery/video-lapangan-2.mp4",
    title: "Proses Pengikatan & Keamanan Muatan",
    description: "Pemeriksaan ikatan tali dan pengamanan material muatan sebelum armada berangkat menuju gudang penampungan.",
    tag: "Video Evakuasi 2",
  },
  {
    id: "v3",
    type: "video",
    src: "/gallery/video-lapangan-3.mp4",
    title: "Pengecekan Akhir Armada Angkut",
    description: "Inspeksi fisik dan kesiapan armada pikap operasional HTJ di lokasi proyek.",
    tag: "Video Evakuasi 3",
  },
  {
    id: "g1",
    type: "image",
    src: "/gallery/dokumentasi-1.jpg",
    title: "Armada Pikap Muatan Aset Penuh",
    description: "Dokumentasi armada pikap Gran Max dengan muatan tumpukan material dan papan kayu siap kirim.",
    tag: "Foto Armada 1",
  },
  {
    id: "g2",
    type: "image",
    src: "/gallery/dokumentasi-2.jpg",
    title: "Pemberangkatan Armada Malam Hari",
    description: "Proses evakuasi dan pengangkutan aset mitra korporasi yang terlaksana secara tertib dan aman.",
    tag: "Foto Armada 2",
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
              Semua ({GALLERY_ITEMS.length})
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
              <span>Video Lapangan (3)</span>
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
              <span>Foto Kegiatan (2)</span>
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const hasMedia = Boolean(item.src);

            return (
              <div
                key={item.id}
                className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold rounded-md border border-white/10 shadow-sm flex items-center gap-1.5 pointer-events-none">
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
