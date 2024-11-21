import './index.scss'
import { Link } from 'react-router-dom';

export default function Cabecalho(props) {
  return (
    <header className="com-cabecalho">
      <img src="./assets/image/logo.png" alt="logo" className="logo" />
      <nav className="menu-opcoes">
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/agendamento'}>AGENDAMENTO</Link></li>
        <li><Link to={'/portifolio'}>PORTFOLIO</Link></li>
        <li><Link to={'/serviços'}>SERVIÇOS</Link></li>
      </nav>
    </header>

  )

}