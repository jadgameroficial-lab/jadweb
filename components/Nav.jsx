"use client";

import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20WEB%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href="#top" className="logo">
          <span className="dot" />
          JAD WEB
        </a>
        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#projetos">Projetos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="nav-cta">
          <a href="#contato" className="btn btn-ghost">
            Falar com a equipe
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Solicitar orçamento<span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
