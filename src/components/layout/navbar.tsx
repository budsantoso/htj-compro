"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Mitra & Klien", href: "#mitra" },
    { label: "Dokumentasi", href: "#galeri" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <Link href="#beranda" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-border shadow-md bg-black shrink-0 group-hover:border-[#6BA4E8] transition-colors">
              <Image
                src="/logo-htj.jpg"
                alt="Logo HTJ - CV Harto Jaya Makmur Abadi"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-foreground flex items-center gap-1.5">
                <span>CV HARTO JAYA</span>
                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#D33633] text-white tracking-widest">
                  MA
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-wide">
                Pengepul & Pembeli Aset Bekas Nasional
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-xs font-semibold text-foreground/80 hover:text-[#6BA4E8] rounded-lg hover:bg-secondary/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Hubungi */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6BA4E8] to-[#5185cb] px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-[#6BA4E8]/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="size-3.5 text-slate-950" />
              <span>Hubungi Pak Hartono</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-border bg-card/60 text-foreground hover:bg-secondary focus:outline-none"
              aria-label="Buka Menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-border bg-card/95 backdrop-blur-2xl px-6 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold text-foreground hover:text-[#6BA4E8] hover:bg-secondary rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-border">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6BA4E8] to-[#5185cb] py-3 text-xs font-bold text-slate-950 shadow-md"
            >
              <Phone className="size-3.5 text-slate-950" />
              <span>Hubungi Pak Hartono (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
