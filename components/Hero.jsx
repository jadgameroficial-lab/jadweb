"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroEcosystem from "./HeroEcosystem";

const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20Platform%20OS%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico.";

export default function Hero() {
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-badge", { opacity: 0, y: 10, duration: 0.6 })
      .from(linesRef.current, { yPercent: 120, duration: 1.1, stagger: 0.08 }, "-=0.3")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.7")
      .from(".hero-cta .btn, .hero-cta .hero-play", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, "-=0.5")
      .from(".hub", { opacity: 0, scale: 0.94, duration: 1, ease: "power2.out" }, "-=0.9");
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere">
        <div className="grid-overlay" />
        <div className="glow-a" />
        <div className="grain" />
        <div className="vignette" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <div className="eyebrow">Sistema operacional para empresas</div>
            </div>
            <h1>
              <div className="line"><span ref={(el) => (linesRef.current[0] = el)}>Transformamos sua</span></div>
              <div className="line"><span ref={(el) => (linesRef.current[1] = el)}>empresa em uma <em>máquina</em></span></div>
              <div className="line"><span ref={(el) => (linesRef.current[2] = el)}><em>de vendas.</em></span></div>
            </h1>
            <p className="hero-sub">
              Criamos toda a infraestrutura digital para atrair clientes, automatizar processos e escalar sua
              empresa. Tudo integrado em um único ecossistema.
            </p>
            <div className="hero-cta">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Agendar diagnóstico<span className="btn-arrow">→</span>
              </a>
              <a href="#servicos" className="hero-play">
                <span className="hero-play-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                Conhecer a plataforma
              </a>
            </div>
          </div>

          <HeroEcosystem />
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="stick" />
      </div>
    </section>
  );
}
