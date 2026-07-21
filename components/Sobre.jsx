export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container sobre-grid">
        <div className="sobre-copy reveal">
          <div className="eyebrow">Sobre a JAD WEB</div>
          <p style={{ marginTop: 22 }}>
            Não vendemos apenas sites. Desenvolvemos soluções digitais completas para empresas que decidiram
            crescer através da tecnologia.
          </p>
          <p>
            Atuamos como um time técnico dedicado, cuidando de arquitetura, performance e experiência com o
            mesmo padrão de exigência de uma equipe de produto internacional.
          </p>
          <p>
            De uma landing page a um SaaS completo, cada entrega nasce de um objetivo de negócio real: vender
            mais, atender melhor ou automatizar o que hoje consome horas do seu time.
          </p>
        </div>
        <div className="reveal">
          <div className="stat-list">
            <div className="stat-item">
              <b>98%</b>
              <span>Lighthouse Performance médio</span>
            </div>
            <div className="stat-item">
              <b>&lt;1.2s</b>
              <span>Tempo de carregamento (LCP)</span>
            </div>
            <div className="stat-item">
              <b>+40</b>
              <span>Projetos em produção</span>
            </div>
            <div className="stat-item">
              <b>100%</b>
              <span>Responsivo, sem exceções</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
