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
    return(
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
        <p>Endereço: {oculto}</p>
        <p>Telefone</p>
      </div>
        
    )
  }

  renderFormacao() {
    return (
    <div>
      <h2>
          Formação acadêmica
      </h2>
      <p>
          Ensino médio - Escola Estadual Professora Carolina Cintra da Silveira (2015 - 2017)
      </p>
      <p>Técnico em administração - ETEC Carolina Carinhato Sampaio (2019 - 2020)</p>
      <p>Tecnólogo em gestão financeira - Universidade Paulista (2020 - 2021) <em>em andamento</em></p>
    </div>
    )
  }

  renderCursosLivres() {
    return (
      <div>
        <h2>Cursos livres</h2>
          <p>Gerência e qualidade de software - Univesp</p>
          <p>Testes de Aplicações modernas com Cypress - Udemy
          <br></br>
          <Link href="">Certificado</Link>
          </p>
      </div>
    )
  }

  renderOutrasCertificacoes() {
    return (
    <div>
      <h2>Outras certificações</h2>
      <div class="cert">
          <img src="/anbima-logo.png" width='10%' />
          <ul>
              <li>CPA 20</li>
              <li><Link href="">Certificado</Link></li>
          </ul>
      </div>
      <div class="cert">
          <img src="/mcgraw.png" width='10%' />
          <ul>
              <li>Nível A1 de Inglês - Buusu</li>
              <li><Link href="">Certificado</Link></li>
          </ul>
      </div>
    </div>
    )
  }

  renderFooter() {
    return(
    <footer>
      <Link href="https://nullstack.app/pt-br/waifu">
        <img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" width="15%" align="middle"/>
      </Link>
      <p>Feito com amor usando Nullstack</p>
    </footer>)
  }

  renderBootstrapJs() {
    return(
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
        </article>
        <Footer />
        <BootstrapJs />
      </section>
    )
  }

}

export default Curriculo;