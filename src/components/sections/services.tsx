"use client";

import { Recycle, Cpu, Truck, Gavel, Boxes, MapPin, Check, ArrowRight } from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Recycle,
  Cpu,
  Truck,
  Gavel,
  Boxes,
  MapPin,
};

export function Services() {
  return (
    <section id="layanan" className="py-24 bg-background relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6BA4E8]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6BA4E8]/30 bg-[#6BA4E8]/10 px-3.5 py-1 text-xs font-bold text-[#6BA4E8]">
            <span>BIDANG USAHA & LAYANAN</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
            Solusi Menyeluruh Likuidasi & Pengelolaan Aset
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Dari penerimaan scrap rutin hingga proyek pembersihan pabrik dan lelang multi-miliar rupiah,
            kami hadir dengan kesiapan modal, alat berat, dan tim evakuasi profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.icon] || Boxes;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#6BA4E8]/60 hover:bg-card/95 hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon & Subtitle Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0b0f19] border border-border flex items-center justify-center text-[#6BA4E8] group-hover:bg-[#6BA4E8] group-hover:text-slate-950 transition-colors duration-300 shadow-md">
                      <IconComp className="size-7" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-md bg-secondary border border-border/50">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-[#6BA4E8] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet */}
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-foreground/90">
                        <Check className="size-3.5 text-[#25D366] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-border/50">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#6BA4E8] group-hover:text-[#D33633] transition-colors"
                  >
                    <span>Ajukan Penawaran Layanan</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
