import './App.scss';

export default function App() {
  return (
    <div className="pagina-inicial">
<div className="home">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="logo.png" alt="Psicolari Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">CONTATO</a>
              </li>
              <li>
                <a href="#">AGENDAMENTO</a>
              </li>
              <li>
                <a href="#">SERVIÇOS</a>
              </li>
              <li>
                <a href="#">PORTFÓLIO</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="main-content">
          <h1>WELCOME A PSICOLARI!!</h1>
          <p>TRANSFORME SUA MENTE, TRANSFORME SUA VIDA. O AUTOCONHECIMENTO É O PRIMEIRO PASSO PARA A VERDADEIRA LIBERDADE EMOCIONAL.</p>
        </div>

        <div className="main-image">
          <img src="./assets/image/Fundohome.png" alt="Interior Design" />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Psicolari. All rights reserved.</p>
      </footer>
    </div>
  

    </div>

  );
}
