import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosDeOrientacaoVocacional() {


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

        <h1 classname='titulo'>serviços de orientação vocacional</h1>

        <main className="content">

          <div className='card'>
            <p>
              SERVIÇOS DE ORIENTAÇÃO VOCACIONAL AJUDAM A IDENTIFICAR INTERESSES E HABILIDADES POR MEIO DE AVALIAÇÕES, EXPLORAM OPÇÕES DE CARREIRA E OFERECEM SUPORTE NA ELABORAÇÃO DE CURRÍCULOS E PREPARAÇÃO PARA ENTREVISTAS. INCLUEM PLANEJAMENTO DE CARREIRA, SUPORTE EMOCIONAL E ACOMPANHAMENTO. ESTÃO DISPONÍVEIS EM ESCOLAS, UNIVERSIDADES E CENTROS DE CARREIRA.
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
          <div className='botao'><button>Agende Aqui</button></div>
        </main>






      </div>

    </div>
  )
}