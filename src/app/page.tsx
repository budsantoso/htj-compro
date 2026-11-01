import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Advantages } from "@/components/sections/advantages";
import { Partners } from "@/components/sections/partners";
import { Gallery } from "@/components/sections/gallery";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { COMPANY_INFO } from "@/data/company";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.shortName,
    "description": COMPANY_INFO.metaDescription,
    "url": "https://htj.switchcode.id",
    "telephone": "+6281280868070",
    "founder": {
      "@type": "Person",
      "name": COMPANY_INFO.founder,
    },
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Partners />
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
