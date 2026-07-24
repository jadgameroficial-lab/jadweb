"use client";

import { useRef, useState } from "react";

const faqs = [
  {
    q: "Quanto tempo leva para desenvolver um projeto?",
    a: "Depende do escopo. Uma landing page costuma ficar pronta em 1 a 2 semanas, sites institucionais em 2 a 4 semanas, e sistemas ou SaaS completos variam de 4 a 12 semanas conforme a complexidade.",
  },
  {
    q: "Como funciona o diagnóstico estratégico?",
    a: "Você preenche o formulário abaixo ou fala com a gente pelo WhatsApp, entendemos a operação e os objetivos da sua empresa e retornamos com um plano claro de solução, escopo e prazo.",
  },
  {
    q: "Vocês oferecem suporte depois da entrega?",
    a: "Sim. Todo projeto sai com um período de suporte incluído, e seguimos disponíveis para evoluções, novas funcionalidades e manutenção depois disso.",
  },
  {
    q: "Consigo pedir alterações depois do site no ar?",
    a: "Sim. O código é seu, é organizado e documentado, o que torna qualquer evolução futura simples, seja com a nossa equipe ou com outro time técnico.",
  },
  {
    q: "Vocês atendem empresas de qualquer porte?",
    a: "Sim. Já desenvolvemos projetos para pequenos negócios, clínicas, escritórios e também para operações maiores que precisavam de sistemas mais robustos.",
  },
];

function FaqItem({ item, open, onToggle }) {
  const ref = useRef(null);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="faq-plus" />
      </button>
      <div className="faq-a" ref={ref} style={{ maxHeight: open ? ref.current?.scrollHeight ?? 200 : 0 }}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Perguntas frequentes</div>
          <h2>Tudo o que você precisa saber antes de começar.</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} item={f} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
