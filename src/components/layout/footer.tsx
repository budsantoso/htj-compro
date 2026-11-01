import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, User, ShieldCheck, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#060911] text-slate-300 pt-20 pb-12 border-t-2 border-[#D33633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-800 bg-black shrink-0">
                <Image
                  src="/logo-htj.jpg"
                  alt="Logo HTJ"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight flex items-center gap-2">
                  <span>CV HARTO JAYA</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#D33633] text-white">
                    MA
                  </span>
                </span>
                <p className="text-xs text-slate-400">Pengepul & Pembeli Aset Bekas Nasional</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Mitra resmi dan tepercaya korporasi, perbankan, manufaktur, dan institusi pemerintahan
              dalam penerimaan limbah besi, pembongkaran pabrik, alat berat, dan lelang aset nasional sejak 2005.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-[#6BA4E8]">
              <ShieldCheck className="size-4 text-[#6BA4E8]" />
              <span>BERDIRI SEJAK 2005 • KREDIBEL & TERVERIFIKASI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Navigasi Layanan</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#layanan" className="hover:text-[#6BA4E8] transition-colors">Limbah Besi & Scrap Logam</a></li>
              <li><a href="#layanan" className="hover:text-[#6BA4E8] transition-colors">Mesin Bekas Industri</a></li>
              <li><a href="#layanan" className="hover:text-[#6BA4E8] transition-colors">Alat Berat & Armada Bekas</a></li>
              <li><a href="#layanan" className="hover:text-[#6BA4E8] transition-colors">Pembelian Hasil Lelang</a></li>
              <li><a href="#layanan" className="hover:text-[#6BA4E8] transition-colors">Evakuasi & Angkutan Aset</a></li>
              <li><a href="#mitra" className="hover:text-[#6BA4E8] transition-colors">Klien & Mitra Rekanan</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Kontak Langsung</h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#D33633] border border-slate-800 shrink-0">
                  <User className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-500">Pimpinan</span>
                  <strong className="text-white text-sm">{COMPANY_INFO.founder}</strong>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#25D366] border border-slate-800 shrink-0">
                  <Phone className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-500">Telepon / WhatsApp</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6BA4E8] font-bold text-sm transition-colors flex items-center gap-1"
                  >
                    <span>{COMPANY_INFO.phoneDisplay}</span>
                    <ArrowUpRight className="size-3 text-[#6BA4E8]" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-[#6BA4E8] border border-slate-800 shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-500">Alamat & Operasional</span>
                  <p className="text-slate-300 leading-snug">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <span>Standar Transaksi Transparan & Cepat</span>
            <span>•</span>
            <span className="text-[#6BA4E8]">Subdomain Resmi htj.switchcode.id</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
