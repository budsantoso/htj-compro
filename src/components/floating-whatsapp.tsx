"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Bantuan Cepat WhatsApp" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Bapak Hartono via WhatsApp"
        className="group relative flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5c] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="size-7" />

        {/* Pulse aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10" />

        {/* Desktop Tooltip */}
        <span className="absolute right-full mr-3.5 px-3.5 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:flex items-center gap-1.5">
          <span>Chat Langsung dengan Pak Hartono</span>
          <span className="text-[10px] text-[#25D366] font-mono">• Online</span>
        </span>
      </a>
    </aside>
  );
}
