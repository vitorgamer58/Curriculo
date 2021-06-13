import Curriculo from './Curriculo.njs';
import './Curriculo.scss';

class Programador extends Curriculo {
    render() {
        return(
            <section>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">NAVBAR</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li><a class="nav-link" href="/">Economia </a></li>
                    <li class="nav-item active"><a class="nav-link" href="/programador">Programador <span class="sr-only">(Página atual)</span></a></li>
                  </ul>
                </div>
              </nav>
            <article>
                <h1>Curriculo</h1>
                <DadosPessoais />
                <Formacao /> 
                <div>
                    <h2>Linguagens e Tecnologias</h2>
                    <ul>
                        <li><img src='/piton.png' width="20px" /> Python - básico</li>
                        <li>Javascript - Básico</li>
                        <li>HTML - Intermediário</li>
                        <li>CSS - Básico</li>
                    </ul>
                </div>
                <CursosLivres />
                <OutrasCertificacoes />
                <Footer />
            </article>
            <BootstrapJs />
            </section>
            
        )
    }
}

export default Programador;