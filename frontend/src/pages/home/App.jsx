import './App.scss';
import Cabecalho from "../../components/cabecalho";

export default function App() {
  return (
    <div className="pagina-inicial">
<div className="home">
<header className="header">
    <img src="./assets/image/logo.png" alt="Psicolari Logo" className="logo" />
    <nav className="nav">
      <ul>
        <li><a href="/home">HOME</a></li>
        <li><a href="/portifolio">PORTFÓLIO</a></li>
        <li><a href="/servicos">SERVIÇOS</a></li>
        <li><a href="/agendamento">AGENDAMENTO</a></li>
      </ul>
    </nav>
    
  </header>
      <div className="main-image">
          <img src="./assets/image/Fundohome.png" alt="Interior Design" />
        </div>
      <main className="main">
      <h1>WELCOME A PSICOLARI!!</h1>
        <div className="main-content">
          
          <p>TRANSFORME SUA MENTE, TRANSFORME SUA VIDA. O AUTOCONHECIMENTO É O PRIMEIRO PASSO PARA A VERDADEIRA LIBERDADE EMOCIONAL.</p>
        </div>

       
      </main>

      <footer className="footer">
        <p>&copy; 2023 Psicolari. All rights reserved.</p>
      </footer>
    </div>
  

    </div>

  );
}
