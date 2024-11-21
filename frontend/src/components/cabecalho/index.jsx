import './index.scss'
import { Link } from 'react-router-dom';

export default function Cabecalho(props) {
  return (
      <header className="header">
    <img src="logo.png" alt="Psicolari Logo" className="logo" />
    <nav className="nav">
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#portfolio">PORTFÓLIO</a></li>
        <li><a href="#contact">CONTATO</a></li>
        <li><a href="#appointment">AGENDAMENTO</a></li>
      </ul>
    </nav>
    
  </header>

  )

}