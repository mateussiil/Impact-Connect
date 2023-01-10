import React, {useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/Impact Connect.png';

import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsApp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso:${response.data.id}`);

            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
        }

  
    }

    return( 
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Registration</h1>
                    <p>
                        Make your registration, enter the platform and help people to
                         find the cases of their NGO.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        I already have registration
                    </Link>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="NGO name"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={email}  
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="Abbreviations" 
                            width="80"
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
)}