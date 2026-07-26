import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Termos de Uso | JAD Platform OS",
  description:
    "Condições de utilização do site institucional e dos serviços da JAD Platform OS: cadastro, propriedade intelectual, disponibilidade, responsabilidades e foro.",
};

const sections = [
  { id: "apresentacao", title: "1. Apresentação" },
  { id: "sobre", title: "2. Sobre a JAD Platform OS" },
  { id: "aceitacao", title: "3. Aceitação dos Termos" },
  { id: "utilizacao", title: "4. Utilização do site" },
  { id: "cadastro", title: "5. Cadastro" },
  { id: "propriedade-intelectual", title: "6. Propriedade Intelectual" },
  { id: "direitos-autorais", title: "7. Direitos Autorais" },
  { id: "conteudo-do-site", title: "8. Conteúdo do site" },
  { id: "disponibilidade", title: "9. Disponibilidade" },
  { id: "servicos-terceiros", title: "10. Serviços de terceiros" },
  { id: "links-externos", title: "11. Links externos" },
  { id: "limitacao-responsabilidade", title: "12. Limitação de responsabilidade" },
  { id: "seguranca", title: "13. Segurança" },
  { id: "privacidade", title: "14. Privacidade" },
  { id: "comunicacoes", title: "15. Comunicações" },
  { id: "modificacoes", title: "16. Modificações" },
  { id: "suspensao-acesso", title: "17. Suspensão de acesso" },
  { id: "lei-aplicavel", title: "18. Lei aplicável" },
  { id: "foro", title: "19. Foro" },
  { id: "disposicoes-finais", title: "20. Disposições finais" },
  { id: "contato", title: "21. Contato" },
];

export default function TermosDeUsoPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedDate="26 de julho de 2026" sections={sections}>
      <section id="apresentacao">
        <h2>1. Apresentação</h2>
        <p>Seja bem-vindo à JAD Platform OS.</p>
        <p>
          Estes Termos de Uso estabelecem as condições para utilização do site institucional da JAD Platform OS
          e dos serviços disponibilizados por meio dele.
        </p>
        <p>
          Ao acessar, navegar ou utilizar este site, o usuário declara que leu, compreendeu e concorda
          integralmente com estes Termos.
        </p>
        <p>Caso não concorde com qualquer disposição, recomendamos que não utilize o site.</p>
      </section>
      <hr />

      <section id="sobre">
        <h2>2. Sobre a JAD Platform OS</h2>
        <p>A JAD Platform OS é uma empresa de tecnologia especializada no desenvolvimento de:</p>
        <ul>
          <li>Sites institucionais;</li>
          <li>Sistemas web;</li>
          <li>Aplicativos para Android e iOS;</li>
          <li>Plataformas SaaS;</li>
          <li>Automações;</li>
          <li>Soluções com Inteligência Artificial;</li>
          <li>Produtos digitais.</li>
        </ul>
        <p>
          O objetivo deste site é apresentar nossos serviços, soluções, projetos, conteúdos e canais de contato.
        </p>
      </section>
      <hr />

      <section id="aceitacao">
        <h2>3. Aceitação dos Termos</h2>
        <p>Ao acessar este site, o usuário declara possuir capacidade civil para aceitar estes Termos.</p>
        <p>Caso represente uma empresa, declara possuir poderes suficientes para agir em nome da organização.</p>
      </section>
      <hr />

      <section id="utilizacao">
        <h2>4. Utilização do site</h2>
        <p>
          O usuário compromete-se a utilizar o site de maneira ética, responsável e conforme a legislação
          brasileira.
        </p>
        <p>É proibido:</p>
        <ul>
          <li>praticar qualquer atividade ilícita;</li>
          <li>tentar invadir sistemas;</li>
          <li>explorar vulnerabilidades;</li>
          <li>distribuir vírus ou códigos maliciosos;</li>
          <li>utilizar robôs para coleta não autorizada de dados;</li>
          <li>copiar conteúdos para fins comerciais sem autorização;</li>
          <li>comprometer a estabilidade do site;</li>
          <li>interferir na experiência de outros usuários.</li>
        </ul>
        <p>O descumprimento poderá resultar no bloqueio do acesso e na adoção das medidas legais cabíveis.</p>
      </section>
      <hr />

      <section id="cadastro">
        <h2>5. Cadastro</h2>
        <p>Algumas funcionalidades poderão exigir o fornecimento de informações pessoais.</p>
        <p>O usuário declara que fornecerá dados verdadeiros, completos e atualizados.</p>
        <p>É responsabilidade do usuário manter suas informações corretas.</p>
      </section>
      <hr />

      <section id="propriedade-intelectual">
        <h2>6. Propriedade Intelectual</h2>
        <p>Todo o conteúdo disponível neste site pertence à JAD Platform OS ou é utilizado mediante autorização.</p>
        <p>Incluem-se:</p>
        <ul>
          <li>marca;</li>
          <li>logotipo;</li>
          <li>identidade visual;</li>
          <li>layout;</li>
          <li>textos;</li>
          <li>artigos;</li>
          <li>imagens;</li>
          <li>vídeos;</li>
          <li>ícones;</li>
          <li>ilustrações;</li>
          <li>códigos;</li>
          <li>componentes;</li>
          <li>softwares;</li>
          <li>materiais institucionais.</li>
        </ul>
        <p>
          Nenhum conteúdo poderá ser reproduzido, copiado, distribuído, comercializado ou modificado sem
          autorização prévia e por escrito.
        </p>
      </section>
      <hr />

      <section id="direitos-autorais">
        <h2>7. Direitos Autorais</h2>
        <p>
          Todo o conteúdo está protegido pela legislação brasileira de direitos autorais e propriedade
          intelectual.
        </p>
        <p>Qualquer utilização não autorizada poderá resultar em medidas judiciais e administrativas.</p>
      </section>
      <hr />

      <section id="conteudo-do-site">
        <h2>8. Conteúdo do site</h2>
        <p>A JAD Platform OS busca manter todas as informações corretas e atualizadas.</p>
        <p>Entretanto, não garantimos que:</p>
        <ul>
          <li>todo conteúdo esteja sempre atualizado;</li>
          <li>não existam erros de digitação;</li>
          <li>não ocorram interrupções;</li>
          <li>todas as informações permaneçam inalteradas ao longo do tempo.</li>
        </ul>
        <p>Reservamo-nos o direito de modificar qualquer conteúdo sem aviso prévio.</p>
      </section>
      <hr />

      <section id="disponibilidade">
        <h2>9. Disponibilidade</h2>
        <p>Nos esforçamos para manter o site disponível continuamente.</p>
        <p>Todavia, poderão ocorrer interrupções decorrentes de:</p>
        <ul>
          <li>manutenção;</li>
          <li>atualizações;</li>
          <li>falhas técnicas;</li>
          <li>problemas de infraestrutura;</li>
          <li>ataques cibernéticos;</li>
          <li>fatores externos.</li>
        </ul>
        <p>A JAD Platform OS não garante disponibilidade ininterrupta.</p>
      </section>
      <hr />

      <section id="servicos-terceiros">
        <h2>10. Serviços de terceiros</h2>
        <p>Este site poderá integrar ou utilizar serviços de terceiros, incluindo, entre outros:</p>
        <ul>
          <li>Google Analytics;</li>
          <li>Google Tag Manager;</li>
          <li>Meta Pixel;</li>
          <li>Google Fonts;</li>
          <li>serviços de hospedagem;</li>
          <li>plataformas de pagamento;</li>
          <li>provedores de e-mail;</li>
          <li>ferramentas de automação.</li>
        </ul>
        <p>Cada serviço possui seus próprios termos e políticas.</p>
        <p>A JAD Platform OS não se responsabiliza pelo conteúdo ou funcionamento desses serviços.</p>
      </section>
      <hr />

      <section id="links-externos">
        <h2>11. Links externos</h2>
        <p>Nosso site poderá conter links para páginas externas.</p>
        <p>Esses links são fornecidos apenas para conveniência do usuário.</p>
        <p>Não somos responsáveis pelas políticas, conteúdos ou práticas adotadas por terceiros.</p>
      </section>
      <hr />

      <section id="limitacao-responsabilidade">
        <h2>12. Limitação de responsabilidade</h2>
        <p>Na máxima extensão permitida pela legislação, a JAD Platform OS não será responsável por:</p>
        <ul>
          <li>perdas indiretas;</li>
          <li>lucros cessantes;</li>
          <li>danos decorrentes da indisponibilidade do site;</li>
          <li>falhas causadas por terceiros;</li>
          <li>ataques cibernéticos;</li>
          <li>uso inadequado do site pelo usuário;</li>
          <li>decisões tomadas exclusivamente com base em informações publicadas.</li>
        </ul>
      </section>
      <hr />

      <section id="seguranca">
        <h2>13. Segurança</h2>
        <p>Adotamos medidas técnicas e administrativas para proteger o ambiente digital.</p>
        <p>Entretanto, nenhum sistema conectado à internet é completamente livre de riscos.</p>
        <p>O usuário também é responsável por manter seus dispositivos protegidos contra softwares maliciosos.</p>
      </section>
      <hr />

      <section id="privacidade">
        <h2>14. Privacidade</h2>
        <p>O tratamento de dados pessoais ocorre conforme nossa Política de Privacidade.</p>
        <p>Recomendamos sua leitura antes da utilização do site.</p>
      </section>
      <hr />

      <section id="comunicacoes">
        <h2>15. Comunicações</h2>
        <p>
          Quando o usuário entrar em contato conosco, poderá receber respostas por e-mail ou outros meios de
          comunicação informados.
        </p>
        <p>
          Essas comunicações ocorrerão apenas para atendimento das solicitações realizadas ou quando houver
          autorização para envio de informações.
        </p>
      </section>
      <hr />

      <section id="modificacoes">
        <h2>16. Modificações</h2>
        <p>A JAD Platform OS poderá alterar estes Termos a qualquer momento.</p>
        <p>A versão mais recente estará sempre disponível neste site.</p>
        <p>O uso contínuo da plataforma após alterações representa concordância com os novos Termos.</p>
      </section>
      <hr />

      <section id="suspensao-acesso">
        <h2>17. Suspensão de acesso</h2>
        <p>Poderemos restringir ou impedir o acesso ao site quando identificarmos:</p>
        <ul>
          <li>utilização fraudulenta;</li>
          <li>atividades ilegais;</li>
          <li>tentativa de invasão;</li>
          <li>violação destes Termos;</li>
          <li>qualquer comportamento que coloque em risco a segurança da plataforma.</li>
        </ul>
      </section>
      <hr />

      <section id="lei-aplicavel">
        <h2>18. Lei aplicável</h2>
        <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
      </section>
      <hr />

      <section id="foro">
        <h2>19. Foro</h2>
        <p>
          Fica eleito o foro da comarca da sede da JAD Platform OS para dirimir eventuais controvérsias
          decorrentes destes Termos, salvo disposição legal em contrário.
        </p>
      </section>
      <hr />

      <section id="disposicoes-finais">
        <h2>20. Disposições finais</h2>
        <p>
          Caso qualquer cláusula destes Termos seja considerada inválida ou inexequível, as demais permanecerão
          plenamente válidas.
        </p>
        <p>
          A eventual tolerância quanto ao descumprimento de qualquer disposição não constituirá renúncia de
          direito.
        </p>
      </section>
      <hr />

      <section id="contato">
        <h2>21. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelos canais oficiais da JAD Platform
          OS disponibilizados neste site.
        </p>
      </section>
    </LegalLayout>
  );
}
