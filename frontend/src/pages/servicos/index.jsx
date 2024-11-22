import './index.scss';

import { Link } from 'react-router-dom';
import { useState } from 'react'

import { useNavigate } from "react-router-dom"

export default function Servicos () {
  const navigate = useNavigate();
  
  async function Profissional() {
    navigate("/serviçosDeOrientacaoProfissional");
  }

  async function Individual() {
    navigate("/serviçosPsicoterapiaIndividual");
      }

      async function Vocacional() {
        navigate("/serviçosDeOrientacaoVocacional");
          }

    return(

      <div className="app">
      <header className="header">
        <img src="./assets/image/logo.png" alt="Psicolari Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/portifolio">PORTFÓLIO</a></li>
            <li><a href="/agendamento">AGENDAMENTO</a></li>
          </ul>
        </nav>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      
      <main className="main">
      
        
        <div className="services">
          <button onClick={Individual} className='service-button'>Psicoterapia individual para adolescentes e adultos na abordagem psicanalítica </button>
          <button onClick={Profissional} className="service-button">serviços de orientação profissional</button>
          <button onClick={Vocacional} className="service-button">serviços de orientação vocacional</button>
        </div>
      </main>
    </div>
    )
}