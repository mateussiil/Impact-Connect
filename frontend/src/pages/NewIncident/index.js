import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId')

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try{
            if(title & description & value){
                await api.post('incidents', data, {
                    headers:{
                        Authorization: ongId
                    }
                })
            }

            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente')
        }

    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva detalhadamente para encontrar um heroi
                        para resolver o caso.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        onChange = {e => setTitle(e.target.value)}
                        value={title}
                    />
                    <textarea 
                        placeholder="Descrição"
                        onChange = {e => setDescription(e.target.value)}
                        value={description}
                    />
                    <input
                        placeholder="Valores em reais"
                        onChange = {e => setValue(e.target.value)}
                        value={value}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}