import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LegalIndex from "./LegalIndex";
import "@/app/legal.css";

export default function LegalLayout({ eyebrow = "Documento legal", title, updatedDate, sections, children }) {
  return (
    <>
      <Nav />
      <main className="legal-main">
        <div className="container">
          <header className="legal-header">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <p className="legal-updated">Última atualização: {updatedDate}</p>
          </header>

          <div className="legal-grid">
            <LegalIndex sections={sections} />
            <article className="legal-article">{children}</article>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
