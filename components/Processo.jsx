const steps = [
  { num: "01", title: "Descoberta", desc: "Entendemos seu negócio, seu público e o resultado que o projeto precisa entregar antes de desenhar qualquer tela." },
  { num: "02", title: "Design", desc: "Criamos uma identidade visual exclusiva, alinhada com o padrão que a sua marca precisa transmitir." },
  { num: "03", title: "Desenvolvimento", desc: "Codificamos com tecnologia moderna, priorizando performance, acessibilidade e um código que dura." },
  { num: "04", title: "Testes e ajustes", desc: "Validamos em todos os dispositivos, revisamos performance e refinamos cada detalhe antes da entrega." },
  { num: "05", title: "Lançamento e suporte", desc: "Publicamos o projeto e seguimos por perto para ajustes, evolução e novas funcionalidades." },
];

export default function Processo() {
  return (
    <section id="processo">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Como trabalhamos</div>
          <h2>Um processo direto, do briefing ao ar.</h2>
          <p>Sem etapas escondidas. Você acompanha cada fase e sabe exatamente onde o projeto está.</p>
        </div>
        <div className="process-list reveal">
          {steps.map((s) => (
            <div className="process-item" key={s.num}>
              <span className="pnum">{s.num}</span>
              <h3>{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
