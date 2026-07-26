import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PartnerLogos from "@/components/PartnerLogos";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Processo from "@/components/Processo";
import TechMarquee from "@/components/TechMarquee";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveals from "@/components/ScrollReveals";

export default function Home() {
  return (
    <>
      <ScrollReveals />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <PartnerLogos />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Processo />
        <TechMarquee />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
