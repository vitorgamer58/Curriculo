import Nullstack from 'nullstack';
import './Application.scss';
import Curriculo from './Curriculo.njs';
import Programador from './Programador.njs';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Curriculo route="/" />
        <Programador route="/programador" />
      </main>
    )
  }

}

export default Application;