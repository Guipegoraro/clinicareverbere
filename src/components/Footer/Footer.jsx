import React from 'react';
import { Link, Router, Route } from 'react-router-dom';
import './Footer.css';
import FooterContact from './FooterContact';
import FooterProfessionals from './FooterProfessionals';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul className='footerList'>
          <li className='footerListItem'>
            <Link to="/">Home</Link>
          </li>
          <li className='footerListItem'>
            <Link to="/Professionals">Para Profissionais</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;