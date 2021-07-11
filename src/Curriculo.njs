import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import './Curriculo.scss';

class Curriculo extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name}`;
    page.description = `${project.name} foi feito com Nullstack!`;
  }

  renderLink({ children, href }) {
    const link = href;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  renderNavBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">NAVBAR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="">Economia <span class="sr-only">(Página atual)</span></a>
            </li>
            <li>
              <a class="nav-link" href="/programador">Programador <span class="sr-only">(Página atual)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  renderDadosPessoais() {
    const oculto = '[DATA OCULTADA]';
    return (
      <div>
        <p>Vitor Hugo</p>
        <p>Endereço:
          <br></br>
          Telefone:</p>
      </div>

    )
  }

  renderFormacao() {
    return (
      <div>
        <h2>Formação acadêmica</h2>
        <p>Ensino médio - Escola Estadual Professora Carolina Cintra da Silveira (2015 - 2017)</p>
        <p>Técnico em administração - ETEC Carolina Carinhato Sampaio (2019 - 2020)</p>
        <p>Tecnólogo em gestão financeira - Universidade Paulista (2020 - 2021) <em>(em andamento)</em></p>
      </div>
    )
  }

  renderCursosLivres() {
    return (
      <div>
        <h2>Cursos livres</h2>
        <p>Gerência e qualidade de software - Univesp</p>
        <p>Testes de aplicações modernas com cypress - Udemy
          (<Link href="https://www.udemy.com/certificate/UC-44303109-4dbb-414a-a928-ee3af7460258/">Certificado</Link>)
        </p>
        <p>Python: do básico ao avançado - Udemy <span class="italico">(cursando)</span></p>
        <p>Curso Web completo - Udemy <span class="italico">(cursando)</span>
          <br></br>
          HTML, CSS, Javascript, Vuejs, React, Bootstrap
        </p>
        <p>API Rest em Nodejs aplicando TDD desde o princípio - Udemy <span class="italico">(cursando)</span></p>
        <p>Vue.js parte 1: Construindo single page applications - Alura</p>
        <p>HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas - Alura</p>

      </div>
    )
  }

  renderOutrasCertificacoes() {
    return (
      <div>
        <h2>Outras certificações</h2>
        <div class="cert">
          <img src="/anbima-logo.png" class="img-cert" />
          <ul>
            <li>CPA 20</li>
            <li><Link href="https://drive.google.com/file/u/1/d/1nBijmV0cxavHjhFinLS1neyVPQnKddXY/view?usp=sharing">Certificado</Link></li>
          </ul>
        </div>
        <div class="cert">
          <img src="/mcgraw.png" class="img-cert" />
          <ul>
            <li>Nível A1 de Inglês</li>
            <li><Link href="https://api.busuu.com/anon/certificates/f5595a4b65126906a06b5aee0037643a">Certificado</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  renderExerienciaProfissional() {
    return (
      <div class="experiencia">
        <h2>Experiência Profissional</h2>
        <ul>
          <li>
            Empresa: Rispar crédito
            <br></br>
            Cargo: Engenheiro de Qualidade de Software
            <br></br>
            Período: Maio/2021 - Atual
            <br></br>
            <br></br>
            Cargo: Analista de comunicação e operações
            <br></br>
            Período: Dezembro/2020 - fevereiro/2021
          </li>
          <li>
            Empresa: Hospital Mun. Dr.º Moysés Deutsch
            <br></br>
            Cargo: Jovem Aprendiz
            <br></br>
            Vinculado ao curso técnico em administração
            <br></br>
            Período: Abril/2019 - Agosto/2020
            <br></br>
            Descrição das atividades: Hotelaria:
            <br></br>
            Lançamento de dados em planilhas. Eventual criação de planilhas novas de acordo com as necessidades do setor para gerar indicadores. Abertura de chamados para a manutenção.
            <br></br>
            Central de Serviços (1 mês):
            <br></br>
            Separação das encomendas para envio por Motoboy. Separação e entrega de cartas. Solicitação de Taxi e carro para os setores solicitantes. Encadernação. Realização de Rateio por centro de custo dos serviços de taxi, correio e carro.
            <br></br>
            Durante este período na central de serviços, fiz mudanças na planilha do taxi, reduzindo o consumo da CPU do computador e permitindo a automação do processo, desta forma, os lançamentos que levavam 1 hora para fazer na mão passaram a ser lançados em 15 minutos, usando CTRL+C e CTRL+V dos dados fornecidos pela Usetaxi.
          </li>
        </ul>
      </div>
    )
  }

  renderFooter() {
    return (
      <footer>
        <Link href="https://nullstack.app/pt-br/waifu">
          <img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" align="middle" />
        </Link>
        <p>Feito com amor usando Nullstack</p>
      </footer>)
  }

  renderBootstrapJs() {
    return (
      <div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </div>
    )
  }


  render({ project }) {
    const oculto = '[DATA OCULTADA]';
    return (
      <section>
        <NavBar />
        <article>
          <h1>Curriculo</h1>
          <DadosPessoais />
          <Formacao />
          <CursosLivres />
          <OutrasCertificacoes />
          <ExerienciaProfissional />
        </article>
        <Footer />
        <BootstrapJs />
      </section>
    )
  }

}

export default Curriculo;