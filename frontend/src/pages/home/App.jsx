import './App.scss';
import Cabecalho from "../../components/cabecalho";

export default function App() {
  return (
    <div className="pagina-inicial">
<div className="home">
<Cabecalho/>
      <div className="main-image">
          <img src="./assets/image/Fundohome.png" alt="Interior Design" />
        </div>
      <main className="main">
        <div className="main-content">
          <h1>WELCOME A PSICOLARI!!</h1>
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
