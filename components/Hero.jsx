"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20WEB%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const features = [
  {
    title: "Alta Performance",
    desc: "Soluções rápidas, seguras e escaláveis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2.2 2 3.6 4.8 3.6 8 0 2.4-.8 4.4-1.9 6.1L12 22l-1.7-5.9C9.2 14.4 8.4 12.4 8.4 10c0-3.2 1.4-6 3.6-8Z" />
        <circle cx="12" cy="9.5" r="1.8" />
        <path d="M8.6 14.5 5.8 16c-.3 1.4-.3 2.9 0 4.3 1.4.3 2.9.3 4.3 0l1.5-2.8" />
        <path d="M15.4 14.5 18.2 16c.3 1.4.3 2.9 0 4.3-1.4.3-2.9.3-4.3 0l-1.5-2.8" />
      </svg>
    ),
  },
  {
    title: "Tecnologia Moderna",
    desc: "Utilizamos o que há de melhor em desenvolvimento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5.5v6c0 5 3.4 8.4 8 9.5 4.6-1.1 8-4.5 8-9.5v-6L12 2Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Código Limpo",
    desc: "Estruturas sólidas para manutenção e crescimento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 6-6 6 6 6" />
        <path d="m15 6 6 6-6 6" />
      </svg>
    ),
  },
  {
    title: "Suporte Especializado",
    desc: "Acompanhamento próximo em todas as etapas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
        <path d="M20 13v3a2 2 0 0 1-2 2h-1" strokeLinecap="round" />
        <rect x="3" y="13" width="4" height="5" rx="1.4" />
        <rect x="17" y="13" width="4" height="5" rx="1.4" />
        <path d="M13 18h-2a2 2 0 0 0 0 4h2" />
      </svg>
    ),
  },
];

export default function Hero() {
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(linesRef.current, { yPercent: 120, duration: 1.1, stagger: 0.08 })
      .from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.6 }, "-=1.0")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.7")
      .from(".hero-cta .btn, .hero-cta .hero-play", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, "-=0.5")
      .from(".hero-features", { opacity: 0, y: 16, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-atmosphere">
        <div className="glow-a" />
        <div className="vignette" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-eyebrow">Parceira estratégica de transformação digital</div>
            <h1>
              <div className="line"><span ref={(el) => (linesRef.current[0] = el)}>Tecnologia que</span></div>
              <div className="line"><span ref={(el) => (linesRef.current[1] = el)}>parece feita por</span></div>
              <div className="line"><span ref={(el) => (linesRef.current[2] = el)}>uma <em>gigante</em></span></div>
              <div className="line"><span ref={(el) => (linesRef.current[3] = el)}>de software.</span></div>
            </h1>
            <p className="hero-sub">
              Desenvolvemos soluções digitais personalizadas que escalam seu negócio e transformam ideias em
              produtos de alta performance.
            </p>
            <div className="hero-cta">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Solicitar orçamento<span className="btn-arrow">→</span>
              </a>
              <a href="#processo" className="hero-play">
                <span className="hero-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7Z" />
                  </svg>
                </span>
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-glow" aria-hidden="true" />
            <Image
              src="/hero-ai-face-cutout.png"
              alt="Rosto digital formado por fragmentos de dados, representando inteligência artificial"
              fill
              priority
              sizes="(max-width: 980px) 55vw, 38vw"
              className="hero-visual-img"
            />
          </div>
        </div>

        <div className="hero-features">
          {features.map((f) => (
            <div className="hero-feature" key={f.title}>
              <span className="hero-feature-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="stick" />
      </div>
    </section>
  );
}
