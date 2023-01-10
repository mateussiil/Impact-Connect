import React from 'react';

import './index.css';

import heroesImg from '../../assets/hero-removebg-preview.png';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import Image from '../../components/Image';
import NameApp from '../../assets/Impact Connect.png';

function Home() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={NameApp} alt="logo"/>
          <h1>Connect with NGOs and make a difference</h1>
          <br/>
          <p>Our app helps you find the right NGO for your cause and make a difference. Browse through a variety of NGOs and their projects, read reviews, and join campaigns that matter to you. </p>
          <br/>
          <p>These organizations may be focused on various causes such as environmental protection, human rights, animal welfare, and community development.</p>
          <Link className="button" to="/login">
            Entrar
          </Link>
          <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#015942"/>
              Não tenho cadastro
          </Link>
        </section>
        <div className='logon-image'>
          <Image src={heroesImg} alt="Heroes"/>
        </div>
    </div>
  )
}

export default Home;