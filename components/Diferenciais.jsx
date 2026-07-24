const items = [
  { num: "01", title: "Design original", desc: "Cada projeto é desenhado do zero, com identidade própria. Nada de template com sua logo em cima." },
  { num: "02", title: "Código que escala", desc: "Arquitetura pensada para crescer com o seu negócio, sem retrabalho quando a operação aumentar." },
  { num: "03", title: "IA aplicada de verdade", desc: "Automação que economiza horas reais da equipe, não apenas um chatbot de vitrine." },
  { num: "04", title: "Comunicação direta", desc: "Contato direto com quem desenvolve o projeto, sem intermediários e sem prazos perdidos em burocracia." },
];

export default function Diferenciais() {
  return (
    <section>
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Diferenciais</div>
          <h2>Por que empresas escolhem a JAD Platform OS.</h2>
        </div>
        <div className="diff-grid reveal">
          {items.map((it) => (
            <div className="diff-item" key={it.num}>
              <span className="diff-num">{it.num}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
