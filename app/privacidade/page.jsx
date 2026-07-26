import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Política de Privacidade | JAD Platform OS",
  description:
    "Saiba como a JAD Platform OS coleta, utiliza, armazena e protege os dados pessoais dos usuários do site, em conformidade com a LGPD.",
};

const sections = [
  { id: "introducao", title: "1. Introdução" },
  { id: "quem-somos", title: "2. Quem somos" },
  { id: "dados-que-coletamos", title: "3. Dados que coletamos" },
  { id: "cookies", title: "4. Cookies" },
  { id: "finalidade", title: "5. Finalidade do tratamento dos dados" },
  { id: "base-legal", title: "6. Base legal" },
  { id: "compartilhamento", title: "7. Compartilhamento de dados" },
  { id: "armazenamento", title: "8. Armazenamento das informações" },
  { id: "retencao", title: "9. Tempo de retenção" },
  { id: "direitos-titular", title: "10. Direitos do titular" },
  { id: "seguranca", title: "11. Segurança" },
  { id: "links-externos", title: "12. Links externos" },
  { id: "menores-idade", title: "13. Menores de idade" },
  { id: "alteracoes", title: "14. Alterações nesta Política" },
  { id: "contato", title: "15. Contato" },
  { id: "legislacao", title: "16. Legislação aplicável" },
  { id: "aceitacao", title: "17. Aceitação" },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout title="Política de Privacidade" updatedDate="26 de julho de 2026" sections={sections}>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          A JAD Platform OS valoriza a privacidade e a proteção dos dados pessoais de seus usuários. Esta
          Política de Privacidade explica como coletamos, utilizamos, armazenamos, protegemos e compartilhamos
          informações quando você acessa nosso site ou utiliza nossos serviços.
        </p>
        <p>Ao navegar em nosso site, você declara estar ciente desta Política de Privacidade.</p>
      </section>
      <hr />

      <section id="quem-somos">
        <h2>2. Quem somos</h2>
        <p>
          A JAD Platform OS é uma empresa de tecnologia dedicada ao desenvolvimento de sites, aplicações web,
          aplicativos móveis, sistemas SaaS, soluções digitais e produtos tecnológicos.
        </p>
        <p>
          Nosso compromisso é tratar todas as informações pessoais de forma transparente, segura e em
          conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
        </p>
      </section>
      <hr />

      <section id="dados-que-coletamos">
        <h2>3. Dados que coletamos</h2>
        <p>Podemos coletar diferentes categorias de informações.</p>

        <h3>Informações fornecidas pelo usuário</h3>
        <p>Quando você utiliza formulários presentes no site, poderá fornecer informações como:</p>
        <ul>
          <li>Nome;</li>
          <li>Endereço de e-mail;</li>
          <li>Telefone;</li>
          <li>Nome da empresa;</li>
          <li>Cidade e Estado;</li>
          <li>Mensagens enviadas;</li>
          <li>Informações necessárias para atendimento.</li>
        </ul>
        <p>O envio dessas informações é voluntário.</p>

        <h3>Informações coletadas automaticamente</h3>
        <p>Durante sua navegação, algumas informações podem ser coletadas automaticamente, como:</p>
        <ul>
          <li>Endereço IP;</li>
          <li>Tipo de navegador;</li>
          <li>Sistema operacional;</li>
          <li>Idioma do navegador;</li>
          <li>Data e horário do acesso;</li>
          <li>Tempo de permanência;</li>
          <li>Páginas visitadas;</li>
          <li>Origem do acesso;</li>
          <li>Identificadores do dispositivo.</li>
        </ul>
        <p>Essas informações auxiliam na segurança, estabilidade e melhoria contínua do site.</p>
      </section>
      <hr />

      <section id="cookies">
        <h2>4. Cookies</h2>
        <p>Utilizamos cookies para proporcionar uma melhor experiência ao usuário.</p>
        <p>Os cookies podem ser utilizados para:</p>
        <ul>
          <li>manter funcionalidades essenciais;</li>
          <li>lembrar preferências;</li>
          <li>medir estatísticas de acesso;</li>
          <li>compreender a utilização do site;</li>
          <li>melhorar desempenho;</li>
          <li>personalizar conteúdos.</li>
        </ul>
        <p>
          O usuário pode desabilitar os cookies diretamente em seu navegador, porém algumas funcionalidades
          poderão ser afetadas.
        </p>
      </section>
      <hr />

      <section id="finalidade">
        <h2>5. Finalidade do tratamento dos dados</h2>
        <p>Os dados coletados podem ser utilizados para:</p>
        <ul>
          <li>responder solicitações;</li>
          <li>fornecer suporte;</li>
          <li>atender pedidos de contato;</li>
          <li>melhorar nossos serviços;</li>
          <li>realizar análises estatísticas;</li>
          <li>identificar problemas técnicos;</li>
          <li>prevenir fraudes;</li>
          <li>cumprir obrigações legais;</li>
          <li>enviar comunicações quando autorizado pelo usuário.</li>
        </ul>
      </section>
      <hr />

      <section id="base-legal">
        <h2>6. Base legal</h2>
        <p>O tratamento dos dados pessoais ocorre com fundamento nas bases legais previstas na LGPD, incluindo:</p>
        <ul>
          <li>consentimento do titular;</li>
          <li>cumprimento de obrigação legal;</li>
          <li>execução de contrato;</li>
          <li>exercício regular de direitos;</li>
          <li>legítimo interesse;</li>
          <li>proteção ao crédito, quando aplicável.</li>
        </ul>
      </section>
      <hr />

      <section id="compartilhamento">
        <h2>7. Compartilhamento de dados</h2>
        <p>A JAD Platform OS não comercializa dados pessoais.</p>
        <p>
          Poderemos compartilhar informações apenas quando necessário com fornecedores responsáveis pela
          operação do site ou prestação de serviços, como:
        </p>
        <ul>
          <li>serviços de hospedagem;</li>
          <li>provedores de infraestrutura em nuvem;</li>
          <li>plataformas de análise de tráfego;</li>
          <li>ferramentas de comunicação;</li>
          <li>serviços de processamento de pagamentos (quando houver);</li>
          <li>autoridades públicas, quando exigido por lei.</li>
        </ul>
        <p>Sempre buscamos parceiros que adotem padrões adequados de segurança e proteção de dados.</p>
      </section>
      <hr />

      <section id="armazenamento">
        <h2>8. Armazenamento das informações</h2>
        <p>
          Os dados pessoais são armazenados em ambientes protegidos e com medidas técnicas e administrativas
          destinadas a evitar:
        </p>
        <ul>
          <li>acesso não autorizado;</li>
          <li>perda de informações;</li>
          <li>destruição;</li>
          <li>alteração;</li>
          <li>divulgação indevida;</li>
          <li>utilização ilícita.</li>
        </ul>
        <p>
          Apesar de adotarmos boas práticas de segurança, nenhum sistema conectado à internet é absolutamente
          inviolável.
        </p>
      </section>
      <hr />

      <section id="retencao">
        <h2>9. Tempo de retenção</h2>
        <p>
          Os dados permanecerão armazenados apenas pelo período necessário para cumprir as finalidades desta
          Política, atender obrigações legais ou exercer direitos da empresa.
        </p>
        <p>Quando não houver mais necessidade de tratamento, os dados poderão ser eliminados ou anonimizados.</p>
      </section>
      <hr />

      <section id="direitos-titular">
        <h2>10. Direitos do titular</h2>
        <p>Nos termos da LGPD, o usuário poderá solicitar:</p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de informações incorretas;</li>
          <li>atualização cadastral;</li>
          <li>anonimização;</li>
          <li>bloqueio;</li>
          <li>eliminação dos dados quando aplicável;</li>
          <li>portabilidade;</li>
          <li>revogação do consentimento;</li>
          <li>informações sobre compartilhamentos realizados.</li>
        </ul>
        <p>As solicitações poderão ser feitas pelos canais oficiais de atendimento.</p>
      </section>
      <hr />

      <section id="seguranca">
        <h2>11. Segurança</h2>
        <p>Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra:</p>
        <ul>
          <li>acessos indevidos;</li>
          <li>vazamentos;</li>
          <li>perda;</li>
          <li>destruição;</li>
          <li>alteração;</li>
          <li>uso não autorizado.</li>
        </ul>
        <p>Nosso objetivo é manter um ambiente confiável para todos os usuários.</p>
      </section>
      <hr />

      <section id="links-externos">
        <h2>12. Links externos</h2>
        <p>Nosso site poderá conter links para sites de terceiros.</p>
        <p>A presente Política não se aplica a serviços externos.</p>
        <p>
          Recomendamos que o usuário leia as respectivas políticas de privacidade antes de fornecer qualquer
          informação.
        </p>
      </section>
      <hr />

      <section id="menores-idade">
        <h2>13. Menores de idade</h2>
        <p>Nosso site não é direcionado a menores de 18 anos.</p>
        <p>
          Caso seja identificado o tratamento indevido de dados de menores sem autorização legal, adotaremos as
          medidas cabíveis para sua exclusão.
        </p>
      </section>
      <hr />

      <section id="alteracoes">
        <h2>14. Alterações nesta Política</h2>
        <p>
          Esta Política poderá ser modificada a qualquer momento para refletir alterações legais, tecnológicas
          ou operacionais.
        </p>
        <p>
          Sempre que houver mudanças relevantes, a nova versão será publicada nesta página com a data de
          atualização.
        </p>
      </section>
      <hr />

      <section id="contato">
        <h2>15. Contato</h2>
        <p>
          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais,
          entre em contato conosco pelos canais oficiais da JAD Platform OS.
        </p>
      </section>
      <hr />

      <section id="legislacao">
        <h2>16. Legislação aplicável</h2>
        <p>
          Esta Política é regida pela legislação da República Federativa do Brasil, especialmente pela Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018), pelo Marco Civil da Internet (Lei nº 12.965/2014) e
          pelas demais normas aplicáveis.
        </p>
      </section>
      <hr />

      <section id="aceitacao">
        <h2>17. Aceitação</h2>
        <p>
          Ao acessar ou utilizar o site da JAD Platform OS, o usuário declara que leu, compreendeu e concorda
          com esta Política de Privacidade.
        </p>
      </section>
    </LegalLayout>
  );
}
