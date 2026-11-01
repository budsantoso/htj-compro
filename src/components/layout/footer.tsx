import Link from "next/link";
import { Phone, MapPin, User, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              CV <span className="text-orange-500">HJMA</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Mitra terpercaya penerima dan pembeli limbah besi, hasil lelang, mesin, dan alat berat bekas skala nasional sejak 2005.
            </p>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#tentang" className="hover:text-orange-500 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-500 transition-colors">
                  Layanan &amp; Usaha
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-orange-500 transition-colors">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#mitra" className="hover:text-orange-500 transition-colors">
                  Rekanan Kerjasama
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Kontak Kami
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <User className="size-4 text-orange-500 shrink-0" />
                <span>{COMPANY_INFO.founder}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-orange-500 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="size-4 text-orange-500 shrink-0 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>CV Harto Jaya Makmur Abadi — Pengepul &amp; Pembeli Aset Bekas Nasional</p>
        </div>
      </div>
    </footer>
  );
}
