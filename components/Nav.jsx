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
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Falar com a equipe
            <span className="btn-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.4 21.6l4.8-1.2A9.8 9.8 0 1 0 12 2.2Zm0 1.8a8 8 0 1 1 0 16 7.9 7.9 0 0 1-4-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 0 1 12 4Zm-3.1 3.9c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4l-1.8-.9c-.2-.1-.4-.2-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4Z" />
              </svg>
            </span>
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Solicitar orçamento<span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
