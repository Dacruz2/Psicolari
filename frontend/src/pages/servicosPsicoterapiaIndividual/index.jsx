import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosPsicoterapiaIndividual() {


  return (


    <div className="pagina-servico">
      <header className="cabeçalho">
        <img src="./assets/image/logo.png" alt="logo" className="logo" />
        <nav className="menu-opcoes">
          <li><Link to={'/'}>HOME</Link></li>
          <li><Link to={'/agendamento'}>AGENDAMENTO</Link></li>
          <li><Link to={'/portifolio'}>PORTFOLIO</Link></li>
          <li><Link to={'/serviços'}>SERVIÇOS</Link></li>
        </nav>
      </header>





      <div className='container'>

        <img src="/assets/image/fundo-azul.png" alt="" />

        <h1 classname='titulo'>Psicoterapia individual para adolescentes e adultos na abordagem psicanalítica</h1>

        <main className="content">

          <div className='card'>
            <p>
              A PSICOTERAPIA PSICANALÍTICA INDIVIDUAL EXPLORA O INCONSCIENTE E AS EMOÇÕES, FOCANDO NA HISTÓRIA PESSOAL DO PACIENTE, NA INTERPRETAÇÃO DE SONHOS E NA TRANSFERÊNCIA DE SENT- IMENTOS. TRABALHA COM CONFLITOS INTERNOS, COMO MEDOS E ANSIEDADES, E VISA AUMENTAR A AUTOCONSCIÊNCIA. O AMB- IENTE TERAPÊUTICO OFERECE SEGURANÇA PARA A EXPRESSÃO LIVRE, PROMOVENDO MUDANÇAS DURADOURAS.
            </p>
          </div>
          <div className="card1">
            <img src="./assets/image/perfil.png" alt="" />
            <h3>Dr. Larissa de Jesus</h3>
            <ul>
              <li>Consulta Online</li>
              <li>Consulta Presencial</li>
              <li>1ª Consulta - Valor de R$130,00</li>
            </ul>
          </div>
          <button> Agende Aqui</button>
        </main>






      </div>

    </div>
  )
}