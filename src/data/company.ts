export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ClientPartner {
  name: string;
  category: "Perbankan" | "Hospitality" | "Institusi / Asing" | "Pendidikan";
}

export const COMPANY_INFO = {
  name: "CV Harto Jaya Makmur Abadi",
  shortName: "CV HTJ",
  brandCode: "HTJ",
  tagline: "Pengepul & Pembeli Aset Bekas Nasional Terpercaya",
  foundedYear: 2005,
  founder: "Bapak Hartono",
  phoneDisplay: "0812-8086-8070",
  whatsappUrl: "https://wa.me/6281280868070?text=Halo%20Bapak%20Hartono%20%28CV%20Harto%20Jaya%20Makmur%20Abadi%29,%20saya%20ingin%20berkonsultasi%20mengenai%20penjualan/lelang%20aset%20perusahaan",
  address: "Jakarta, Indonesia (Cakupan Nasional Seluruh Indonesia)",
  email: "kontak@htj.switchcode.id",
  metaTitle: "CV Harto Jaya Makmur Abadi | Pengepul & Pembeli Aset Bekas Nasional",
  metaDescription: "Mitra resmi dan profesional penerimaan limbah besi, alat berat, mesin industri, dan hasil lelang aset korporasi di seluruh Indonesia sejak 2005 di bawah pimpinan Bapak Hartono.",
};

export const SERVICES: Service[] = [
  {
    id: "limbah-besi",
    title: "Limbah Besi & Logam Industri",
    subtitle: "Scrap & Metal Management",
    description: "Penerimaan dan pembelian segala tonase limbah besi, baja, tembaga, aluminium, dan logam bekas dari pabrik, pergudangan, maupun kontraktor konstruksi.",
    icon: "Recycle",
    highlights: ["Timbangan Akurat & Transparan", "Pembayaran Tunai / Transfer Cepat", "Penjemputan Armada Khusus"],
  },
  {
    id: "mesin-bekas",
    title: "Mesin Pabrik & Industri Bekas",
    subtitle: "Industrial Machinery Buyback",
    description: "Pembelian mesin lini produksi, genset kapasitas tinggi, chiller, boiler, kompresor, dan mesin manufaktur non-produktif dengan valuasi nilai sisa terbaik.",
    icon: "Cpu",
    highlights: ["Valuasi On-Site Profesional", "Dismantling/Bongkar Aman", "Segala Merk & Kondisi"],
  },
  {
    id: "alat-berat",
    title: "Alat Berat & Armada Bekas",
    subtitle: "Heavy Equipment & Fleet",
    description: "Pembelian unit excavator, bulldozer, loader, forklift, dump truck, dan kendaraan operasional proyek yang sudah habis masa depresiasi.",
    icon: "Truck",
    highlights: ["Unit Tunggal & Borongan", "Evakuasi Alat Terintegrasi", "Legalitas Dokumen Lengkap"],
  },
  {
    id: "aset-lelang",
    title: "Pembelian Aset Hasil Lelang",
    subtitle: "Official Corporate Auction Partner",
    description: "Partisipasi aktif dalam lelang terbuka maupun tertutup dari perbankan, BUMN, perhotelan, hingga lembaga negara secara sah dan tertib administrasi.",
    icon: "Gavel",
    highlights: ["Mitra Bank & BUMN", "Dokumentasi Berita Acara Sah", "Dana Likuid Siap Bayar"],
  },
  {
    id: "evakuasi-logistik",
    title: "Jasa Angkut & Evakuasi Lapangan",
    subtitle: "Turnkey Site Demolition & Clearing",
    description: "Pembersihan area pabrik, pembongkaran struktur baja (demolition), serta evakuasi material scrap langsung dari site klien menuju gudang kami.",
    icon: "Boxes",
    highlights: ["SOP K3 & Keselamatan Kerja", "Alat Potong & Crane Mandiri", "Area Bersih Siap Pakai"],
  },
  {
    id: "jangkauan-nasional",
    title: "Jangkauan Layanan Nasional",
    subtitle: "Nationwide Logistics Network",
    description: "Melayani transaksi dan evakuasi aset di seluruh pulau Indonesia (Jawa, Sumatera, Kalimantan, Sulawesi, hingga wilayah Indonesia Timur).",
    icon: "MapPin",
    highlights: ["Lintas Pulau & Pelabuhan", "Jaringan Logistik Terpadu", "Kecepatan Respon Lapangan"],
  },
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  { name: "Bank Indonesia", category: "Perbankan" },
  { name: "Bank Mandiri", category: "Perbankan" },
  { name: "Bank BNI", category: "Perbankan" },
  { name: "Bank Danamon", category: "Perbankan" },
  { name: "Bank Permata", category: "Perbankan" },
  { name: "Hotel Mercure", category: "Hospitality" },
  { name: "PT Aston International", category: "Hospitality" },
  { name: "Universitas Pelita Harapan (UPH)", category: "Pendidikan" },
  { name: "Kedutaan Besar Singapura", category: "Institusi / Asing" },
];

export const COMPANY_STATS = [
  { value: "2005", label: "Tahun Berdiri", detail: "Lebih dari 20 tahun pengalaman konsisten" },
  { value: "100%", label: "Jangkauan", detail: "Seluruh wilayah Indonesia dari Sabang sampai Merauke" },
  { value: "Bpk. Hartono", label: "Pimpinan Perusahaan", detail: "Komitmen integritas & kredibilitas transaksi" },
  { value: "300+", label: "Proyek & Lelang", detail: "Aset korporasi, perbankan, dan manufaktur tuntas dievakuasi" },
];
