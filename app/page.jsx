import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Processo from "@/components/Processo";
import TechMarquee from "@/components/TechMarquee";
import Projetos from "@/components/Projetos";
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
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Processo />
        <TechMarquee />
        <Projetos />
        <Depoimentos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
