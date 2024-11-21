import './index.scss';

import { Link } from 'react-router-dom';


export default function ServicosDeOrientacaoProfissional() {


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

        <h1 classname='titulo'>serviços de orientação profissional</h1>

        <main className="content">

          <div className='card'>
            <p>OS SERVIÇOS DE ORIENTAÇÃO PROFISSIONAL AJUDAM INDIVÍDUOS A TOMAR DECISÕES SOBRE SUAS CARREIRAS, IDENTIFICANDO INTERESSES, HABILIDADES E VALORES. POR MEIO DE TESTES VOCACIONAIS E CONSULTAS INDIVIDUAIS, ESSES SERVIÇOS OFERECEM SUPORTE NA ESCOLHA DE CURSOS, ESTÁGIOS E EMPREGOS. ALÉM DISSO, AJUDAM NA ELABORAÇÃO DE CURRÍCULOS E NA PREPARAÇÃO PARA ENTREVISTAS. O OBJETIVO É CAPACITAR OS CLIENTES A FAZER ESCOLHAS INFORMADAS E SATISFATÓRIAS, PROMOVENDO SEU DESENVOLVIMENTO PESSOAL E PROFISSIONAL.

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