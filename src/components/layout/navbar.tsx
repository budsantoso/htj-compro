"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Galeri", href: "#galeri" },
    { label: "Mitra", href: "#mitra" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-slate-200 bg-black shrink-0 shadow-xs">
                <Image
                  src="/logo-htj.jpg"
                  alt="Logo CV Harto Jaya Makmur Abadi (HTJ)"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                <span>CV</span>
                <span className="text-orange-500 font-extrabold">HJMA</span>
                <span className="hidden sm:inline-block text-[11px] font-medium text-slate-400 border-l border-slate-300 pl-2 ml-1">
                  HTJ
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-orange-500 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-orange-500/20 transition-all duration-300"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="size-3.5 ml-1.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full animate-in slide-in-from-top-1">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-md"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowRight className="size-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
