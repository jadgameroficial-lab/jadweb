"use client";

import { useState } from "react";

const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20Platform%20OS%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico.";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", fone: "", tipo: "Diagnóstico geral", msg: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    let texto = `Olá! Meu nome é ${form.nome}. Tenho interesse em um projeto de ${form.tipo}.`;
    if (form.msg) texto += ` Detalhes: ${form.msg}.`;
    texto += ` Meu WhatsApp para contato: ${form.fone}.`;
    window.open(`https://wa.me/5547991100596?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <section id="contato">
      <div className="container cta-final-grid">
        <div className="cta-final-copy reveal">
          <div className="eyebrow">Vamos conversar</div>
          <h2 style={{ marginTop: 18 }}>Sua empresa não precisa apenas de um site.</h2>
          <p>
            Ela precisa de um sistema completo para crescer. Preencha o formulário ao lado ou fale direto com a
            equipe pelo WhatsApp — retornamos com um diagnóstico claro, sem enrolação.
          </p>
          <div className="cta-badges">
            <span>Resposta em até 1 dia útil</span>
            <span>Diagnóstico sem compromisso</span>
          </div>
          <div className="hero-cta" style={{ marginTop: 34 }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Quero um diagnóstico estratégico<span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        <form className="quote-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label>Nome</label>
              <input type="text" name="nome" required placeholder="Seu nome" value={form.nome} onChange={handleChange} />
            </div>
            <div className="field">
              <label>WhatsApp</label>
              <input type="tel" name="fone" required placeholder="(47) 9 0000-0000" value={form.fone} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label>Tipo de projeto</label>
            <select name="tipo" value={form.tipo} onChange={handleChange}>
              <option>Diagnóstico geral</option>
              <option>Site institucional</option>
              <option>Landing page</option>
              <option>Sistema SaaS</option>
              <option>Aplicativo</option>
              <option>Inteligência artificial</option>
              <option>Automações</option>
              <option>Gestão de tráfego</option>
              <option>Mentoria</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="field">
            <label>Conte um pouco sobre o projeto</label>
            <textarea name="msg" placeholder="O que você precisa desenvolver?" value={form.msg} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar e continuar no WhatsApp<span className="btn-arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
