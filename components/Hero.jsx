"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(linesRef.current, { yPercent: 120, duration: 1.1, stagger: 0.08 })
      .from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.6 }, "-=1.0")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.7")
      .from(".hero-cta .btn", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, "-=0.5")
      .from(".hero-meta", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere">
        <div className="glow-a" />
        <div className="vignette" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">Parceira estratégica de transformação digital</div>
          <h1>
            <div className="line"><span ref={(el) => (linesRef.current[0] = el)}>Tecnologia que</span></div>
            <div className="line"><span ref={(el) => (linesRef.current[1] = el)}>parece feita por</span></div>
            <div className="line"><span ref={(el) => (linesRef.current[2] = el)}>uma <em>gigante</em></span></div>
            <div className="line"><span ref={(el) => (linesRef.current[3] = el)}>de software.</span></div>
          </h1>
          <p className="hero-sub">
            Criamos sites, sistemas, SaaS e e-commerces sob medida para empresas que querem crescer todos os dias.
            Do primeiro protótipo ao produto em produção, cuidamos de cada detalhe.
          </p>
          <div className="hero-cta">
            <a
              href="https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20WEB%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Começar um projeto<span className="btn-arrow">→</span>
            </a>
            <a href="#processo" className="btn btn-ghost">
              Ver como trabalhamos
            </a>
          </div>
          <div className="hero-meta">
            <div className="avatars">
              <span>JS</span>
              <span>TS</span>
              <span>AI</span>
            </div>
            <div className="meta-text">
              <b>+40 projetos</b>
              <small>entregues e em produção</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-visual-frame">
            <Image
              src="/hero-ai-face.png"
              alt="Rosto digital formado por fragmentos de dados, representando inteligência artificial"
              width={700}
              height={1243}
              priority
              sizes="(max-width: 980px) 70vw, 650px"
              className="hero-visual-image"
            />
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="stick" />
      </div>
    </section>
  );
}
