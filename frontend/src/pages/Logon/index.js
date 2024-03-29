import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/build-house.png';
import logoImg from '../../assets/Impact Connect.png';

import api from '../../services/api';

export default function Logon(){
    const [ id, setId] = useState('')

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',response.data.name)

            history.push('/profile')
        }catch(err){
            alert('Falha no login, tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>
                    
                    <input 
                        placeholder="Your ID"
                        value={id}
                        onChange={e=>setId(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Log In</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#015942"/>
                        Create account
                    </Link>
                </form>
            
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}