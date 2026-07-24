const WA_LINK =
  "https://wa.me/5547991100596?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JAD%20Platform%20OS%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico.";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#top" className="logo">
              <span className="dot" />
              JAD Platform OS
            </a>
            <p style={{ maxWidth: 280, marginTop: 18, fontSize: 14, color: "var(--ink-60)", lineHeight: 1.6 }}>
              O sistema operacional para o crescimento da sua empresa: sites, sistemas, IA, automação e tráfego,
              tudo integrado.
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
              <a href="#contato">Agendar diagnóstico</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JAD Platform OS. Todos os direitos reservados.</span>
          <span>Blumenau, SC</span>
        </div>
      </div>
    </footer>
  );
}
