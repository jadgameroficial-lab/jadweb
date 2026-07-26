import LegalLayout from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Política de Cookies | JAD Platform OS",
  description:
    "Entenda o que são cookies, quais categorias a JAD Platform OS utiliza e como gerenciar suas preferências de navegação no site.",
};

const sections = [
  { id: "introducao", title: "1. Introdução" },
  { id: "o-que-sao-cookies", title: "2. O que são cookies?" },
  { id: "para-que-utilizamos", title: "3. Para que utilizamos cookies?" },
  { id: "categorias-de-cookies", title: "4. Categorias de cookies" },
  { id: "cookies-terceiros", title: "5. Cookies de terceiros" },
  { id: "tempo-de-armazenamento", title: "6. Tempo de armazenamento" },
  { id: "gerenciamento", title: "7. Gerenciamento de cookies" },
  { id: "como-desativar", title: "8. Como desativar cookies" },
  { id: "seguranca", title: "9. Segurança" },
  { id: "dados-pessoais", title: "10. Dados pessoais" },
  { id: "atualizacoes", title: "11. Atualizações" },
  { id: "contato", title: "12. Contato" },
  { id: "consentimento", title: "13. Consentimento" },
];

export default function PoliticaDeCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updatedDate="26 de julho de 2026" sections={sections}>
      <section id="introducao">
        <h2>1. Introdução</h2>
        <p>
          A JAD Platform OS utiliza cookies e tecnologias semelhantes para proporcionar uma melhor experiência
          de navegação, melhorar o desempenho do site, analisar métricas de acesso e oferecer conteúdos mais
          relevantes.
        </p>
        <p>
          Esta Política explica o que são cookies, quais utilizamos, por que os utilizamos e como você pode
          gerenciá-los.
        </p>
        <p>
          Ao acessar nosso site, você poderá escolher quais categorias de cookies deseja permitir, respeitando a
          legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </section>
      <hr />

      <section id="o-que-sao-cookies">
        <h2>2. O que são cookies?</h2>
        <p>Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo quando você visita um site.</p>
        <p>
          Eles permitem que determinadas informações sejam lembradas durante a navegação, tornando a experiência
          mais rápida, segura e personalizada.
        </p>
        <p>Os cookies não danificam seu dispositivo e não executam programas.</p>
      </section>
      <hr />

      <section id="para-que-utilizamos">
        <h2>3. Para que utilizamos cookies?</h2>
        <p>Utilizamos cookies para:</p>
        <ul>
          <li>garantir o funcionamento correto do site;</li>
          <li>melhorar a velocidade e a estabilidade da navegação;</li>
          <li>lembrar preferências do usuário;</li>
          <li>compreender como o site é utilizado;</li>
          <li>identificar erros técnicos;</li>
          <li>medir desempenho;</li>
          <li>realizar análises estatísticas;</li>
          <li>melhorar continuamente nossos serviços;</li>
          <li>personalizar conteúdos quando aplicável.</li>
        </ul>
      </section>
      <hr />

      <section id="categorias-de-cookies">
        <h2>4. Categorias de cookies</h2>

        <h3>4.1 Cookies Essenciais</h3>
        <p>Esses cookies são indispensáveis para o funcionamento do site.</p>
        <p>Sem eles, determinadas funcionalidades poderão não funcionar corretamente.</p>
        <p>Exemplos:</p>
        <ul>
          <li>autenticação de sessão;</li>
          <li>segurança;</li>
          <li>balanceamento de carga;</li>
          <li>preferências básicas;</li>
          <li>prevenção contra ataques.</li>
        </ul>
        <p>Esses cookies não podem ser desativados pelo banner de consentimento.</p>

        <h3>4.2 Cookies de Desempenho</h3>
        <p>Permitem compreender como os visitantes utilizam o site.</p>
        <p>Esses dados são utilizados apenas para melhorar a experiência do usuário.</p>
        <p>Podem registrar informações como:</p>
        <ul>
          <li>páginas mais visitadas;</li>
          <li>tempo de navegação;</li>
          <li>origem do acesso;</li>
          <li>velocidade do site;</li>
          <li>erros encontrados.</li>
        </ul>
        <p>As informações são tratadas de forma agregada sempre que possível.</p>

        <h3>4.3 Cookies Funcionais</h3>
        <p>Permitem lembrar escolhas feitas pelo usuário.</p>
        <p>Exemplos:</p>
        <ul>
          <li>idioma;</li>
          <li>tema claro ou escuro;</li>
          <li>preferências de navegação;</li>
          <li>formulários parcialmente preenchidos;</li>
          <li>configurações de acessibilidade.</li>
        </ul>
        <p>Esses cookies tornam a experiência mais personalizada.</p>

        <h3>4.4 Cookies de Marketing</h3>
        <p>
          Quando utilizados, permitem apresentar conteúdos ou anúncios mais relevantes ao usuário.
        </p>
        <p>Também podem medir a eficiência de campanhas publicitárias.</p>
        <p>Esses cookies somente serão utilizados quando houver consentimento, quando exigido pela legislação.</p>
      </section>
      <hr />

      <section id="cookies-terceiros">
        <h2>5. Cookies de terceiros</h2>
        <p>Nosso site poderá utilizar serviços fornecidos por terceiros.</p>
        <p>Esses serviços podem armazenar seus próprios cookies conforme suas políticas.</p>
        <p>Entre eles poderão estar:</p>
        <ul>
          <li>Google Analytics;</li>
          <li>Google Tag Manager;</li>
          <li>Google Ads;</li>
          <li>Meta Pixel;</li>
          <li>Microsoft Clarity;</li>
          <li>YouTube;</li>
          <li>Vimeo;</li>
          <li>Stripe;</li>
          <li>Mercado Pago;</li>
          <li>outros serviços tecnológicos utilizados pela JAD Platform OS.</li>
        </ul>
        <p>Cada fornecedor possui sua própria Política de Privacidade e Política de Cookies.</p>
        <p>Recomendamos que o usuário consulte tais documentos.</p>
      </section>
      <hr />

      <section id="tempo-de-armazenamento">
        <h2>6. Tempo de armazenamento</h2>
        <p>Os cookies poderão permanecer armazenados por períodos diferentes.</p>

        <h3>Cookies de sessão</h3>
        <p>São removidos automaticamente quando o navegador é fechado.</p>

        <h3>Cookies persistentes</h3>
        <p>Permanecem armazenados por um período determinado ou até serem removidos manualmente pelo usuário.</p>
        <p>O prazo pode variar conforme a finalidade de cada cookie.</p>
      </section>
      <hr />

      <section id="gerenciamento">
        <h2>7. Gerenciamento de cookies</h2>
        <p>Ao acessar nosso site pela primeira vez, poderá ser apresentado um banner de consentimento.</p>
        <p>O usuário poderá:</p>
        <ul>
          <li>aceitar todos os cookies;</li>
          <li>rejeitar cookies não essenciais;</li>
          <li>personalizar categorias permitidas.</li>
        </ul>
        <p>A qualquer momento será possível alterar suas preferências, quando essa funcionalidade estiver disponível.</p>
      </section>
      <hr />

      <section id="como-desativar">
        <h2>8. Como desativar cookies</h2>
        <p>Também é possível controlar os cookies diretamente pelo navegador.</p>
        <p>Os principais navegadores permitem:</p>
        <ul>
          <li>bloquear cookies;</li>
          <li>excluir cookies existentes;</li>
          <li>impedir cookies de terceiros;</li>
          <li>apagar dados de navegação.</li>
        </ul>
        <p>A desativação poderá afetar o funcionamento de determinadas funcionalidades do site.</p>
      </section>
      <hr />

      <section id="seguranca">
        <h2>9. Segurança</h2>
        <p>
          Os cookies utilizados pela JAD Platform OS não têm como objetivo acessar arquivos pessoais do usuário
          nem coletar informações além daquelas necessárias às finalidades descritas nesta Política.
        </p>
        <p>Adotamos medidas para garantir que os dados coletados por meio de cookies sejam tratados com segurança.</p>
      </section>
      <hr />

      <section id="dados-pessoais">
        <h2>10. Dados pessoais</h2>
        <p>Alguns cookies podem coletar informações consideradas dados pessoais pela LGPD.</p>
        <p>Quando isso ocorrer, o tratamento será realizado conforme nossa Política de Privacidade.</p>
      </section>
      <hr />

      <section id="atualizacoes">
        <h2>11. Atualizações</h2>
        <p>Esta Política poderá ser alterada sempre que necessário para refletir mudanças:</p>
        <ul>
          <li>na legislação;</li>
          <li>nos serviços utilizados;</li>
          <li>na infraestrutura tecnológica;</li>
          <li>nas práticas da empresa.</li>
        </ul>
        <p>A versão mais recente estará sempre disponível neste site.</p>
      </section>
      <hr />

      <section id="contato">
        <h2>12. Contato</h2>
        <p>
          Caso tenha dúvidas sobre esta Política de Cookies ou sobre o tratamento de dados realizado pela JAD
          Platform OS, entre em contato pelos canais oficiais informados em nosso site.
        </p>
      </section>
      <hr />

      <section id="consentimento">
        <h2>13. Consentimento</h2>
        <p>
          Ao clicar em &ldquo;Aceitar&rdquo; no banner de cookies ou continuar utilizando os recursos do site
          conforme as configurações escolhidas, o usuário declara estar ciente desta Política de Cookies.
        </p>
        <p>
          Sempre que exigido pela legislação aplicável, os cookies não essenciais somente serão utilizados após
          a manifestação de consentimento do usuário.
        </p>
      </section>
    </LegalLayout>
  );
}
