import React, { useState } from 'react';

import Clinica from './clinica.jpg';
import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <div className='full'>
      <div className='leftText'>
        <h2 className='firstText'>Psicólogos e terapia online ao seu alcance</h2>
        <div className='secondText'>
          <p >Agora você pode conversar com um psicólogo online a qualquer hora com sigilo e segurança</p>
        </div>
        <div className='btnHeader'>
          <a href='#Contact'> <button className='btnHeaderItem'>Agende já sua consulta</button></a>
        </div>
        
      </div>

      <div className="banner">
        <img className="bannerImg" src={Clinica} alt="Imagem" />
      </div>
      <div className="textBanner">
          <strong>Reverbere, cuidando de você e da sua família.</strong>
      </div>
      </div>
    </section>
  );
};

export default Header;
