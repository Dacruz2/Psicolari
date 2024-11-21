import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Portfolio() {


    return(

<div className='Pagina-portfolio'>
    
<Cabecalho />
     <div className='fundo'>
     <img src="./assets/image/fundo-azul.png" alt="" />
     
     <div className='perfil'>
      
<img src="./assets/image/perfil.png" alt="" />
<h2>LARISSA DE JESUS FERREIRA </h2>

<p >Psicóloga com formação em Psicologia pela Universidadede Santo Amaro – UNISA, cursando pós-graduação em Psicologia Hospitalar pela Universidade Anhanguera. Tenho atuado no atendimento clínico online individual, para casais e famílias, oferecendo suporte para questões como ansiedade, depressão, transtornos de humor, relacionamentos, uso de álcool e drogas entre outros. Utilizo a abordagem psicanalítica como base teórica para compreensão e elaboração de planos terapêuticos. Minha prática é guiada por um compromisso profundo com o desenvolvimento humano e o cuidado integral, buscando sempre acolher e apoiar meus clientes em suas jornadas de autoconhecimento e superação.</p>
     </div>
     
     
     
     </div>
 
    

      
</div>




    )
}