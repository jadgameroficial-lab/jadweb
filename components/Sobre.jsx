export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container sobre-grid">
        <div className="sobre-copy reveal">
          <div className="eyebrow">Sobre a JAD Platform OS</div>
          <p style={{ marginTop: 22 }}>
            Não criamos apenas sites. Construímos a infraestrutura digital que faz empresas crescerem: sites,
            sistemas, IA, automação e tráfego, tudo dentro de um único ecossistema.
          </p>
          <p>
            Atuamos como o time técnico e estratégico da sua operação, cuidando de arquitetura, performance e
            experiência com o mesmo padrão de exigência de uma equipe de produto internacional.
          </p>
          <p>
            De uma landing page a um sistema operacional completo, cada entrega nasce de um objetivo de negócio
            real: vender mais, atender melhor e crescer de forma previsível.
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
