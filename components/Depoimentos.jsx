const testimonials = [
  {
    text: "O site ficou muito acima do que eu esperava. A equipe entendeu o negócio antes de desenhar qualquer tela e isso fez toda diferença no resultado.",
    name: "Rafael Costa",
    role: "Diretor comercial",
    initials: "RC",
  },
  {
    text: "Migramos um processo manual para um sistema automatizado em poucas semanas. Hoje a equipe economiza horas todo dia com o que antes era feito na planilha.",
    name: "Mariana Lopes",
    role: "Fundadora",
    initials: "ML",
  },
  {
    text: "Comunicação direta do início ao fim, prazos cumpridos e um resultado que realmente parece de outro patamar. Já indicamos para outras empresas do grupo.",
    name: "Diego Prado",
    role: "Gerente de operações",
    initials: "DP",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Depoimentos</div>
          <h2>Quem trabalhou com a gente conta como foi.</h2>
        </div>
        <div className="testi-grid reveal">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="testi-who">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
