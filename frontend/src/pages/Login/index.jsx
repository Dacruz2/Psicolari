import React from "react";
import './index.scss'
import { useState } from 'react'



import { useNavigate } from "react-router-dom"

import axios from 'axios'

export default function Secao1() {
    const [usuario, setusuario] = useState('');
    const [senha, setsenha] = useState('');
   
    const navigate = useNavigate();
   
    async function Clicar() {
    let paramcorpo = {
        "nome" : usuario,
        "senha" : senha
    }
    
    
    const url = 'http://4.172.207.208:5011/valido'
    let resposta = await axios.post(url, paramcorpo);

    const { token } = resposta.data;

    localStorage.setItem("usuario", token);

    navigate("/home");
    }

    return (
        <div className="Secao1">

        
            <div className="login-section">
                <h2>Login</h2>
                <form>

                    <div className="input-group">
                        <label >E-mail</label>
                        <input type="text" value={usuario} onChange={e => setusuario (e.target.value)} placeholder="Digite seu E-mail" required/>
                    </div>

                    <div className="input-group">
                        <label >Senha</label>  
                        <input type='text' value={senha} onChange={e => setsenha(e.target.value)} placeholder="Digite sua    Senha" required />
                    </div>
                    <button onClick={Clicar} type="submit">Login</button>
                </form>
            </div>


            <div className="image-section">
                <img src="./assets/image/imagem-moca.png" alt="Login" />
            </div>




        </div>
    );
}
