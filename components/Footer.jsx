const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20WEB%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#top" className="logo">
              <span className="dot" />
              JAD WEB
            </a>
            <p style={{ maxWidth: 280, marginTop: 18, fontSize: 14, color: "var(--ink-60)", lineHeight: 1.6 }}>
              Estúdio de soluções digitais sob medida para empresas que querem crescer através da tecnologia.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#processo">Processo</a>
              <a href="#projetos">Projetos</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="#contato">Solicitar orçamento</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JAD WEB. Todos os direitos reservados.</span>
          <span>Blumenau, SC</span>
        </div>
      </div>
    </footer>
  );
}
