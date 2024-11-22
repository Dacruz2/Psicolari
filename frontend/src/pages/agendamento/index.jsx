import './index.scss';
import { Link } from 'react-router-dom';



export default function Agendamento(){

return(
<div className='Pagina-agendamento'>
<header className="header">
    <img src="logo.png" alt="Psicolari Logo" className="logo" />
    <nav className="nav">
      <ul>
        <li><a href="/home">HOME</a></li>
        <li><a href="/portifolio">PORTFÓLIO</a></li>
        <li><a href="/servicos">SERVIÇOS</a></li>
      </ul>
    </nav>
    
  </header>

  <div className='conteudo-agendamento'>
    <img src="./assets/image/fundo-azul.png" alt="" />
    <h2>Selecione um dia</h2>

    <div className='dias'>
      <h3>21 agosto</h3>
      <h3>22 de agosto</h3>
      <h3>Outro dia</h3>
    </div>
  </div>

  <div className='cliente-container'>
    <div className='cliente-um'>
      <div className='perfil'>
        <img src="./assets/image/perfil.png" alt="" />
      </div>
      <h3>Unidade <br /> <br /> 574 R.Italia</h3>
      <h3>Horario <br /> <br /> 9:00</h3>
      <h3>Nome</h3>
    </div>

    <div className='cliente-dois'>
      <div className='perfil'>
        <img src="./assets/image/perfil.png" alt="" />
      </div>
      <h3>Unidade <br /> <br /> 574 R.Italia</h3>
      <h3>Horario <br /> <br /> 9:45</h3>
      <h3>Nome</h3>
    </div>

    <div className='cliente-tres'>
      <div className='perfil'>
        <img src="./assets/image/perfil.png" alt="" />
      </div>
      <h3>Unidade <br /> <br /> 574 R.Italia</h3>
      <h3>Horario <br /> <br /> 10:30</h3>
      <h3>Nome</h3>
    </div>
  </div>
</div>
)





}