import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosPsicoterapiaIndividual() {


  return (


    <div className="pagina-servico">
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