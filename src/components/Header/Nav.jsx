import React, { useState } from 'react'
import Logo from './REVERBERE_logo_png.png';
import { Link } from 'react-router-dom';


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };
  


  return (
    <div className="header">      <header>
    <div className="container">
      <nav className="nav_checkbox">
        <Link to="/clinicareverbere">
          <img className="imgLogo" src={Logo} alt="logo" />
        </Link>
        <input
          type="checkbox"
          id="tab-nav"
          className="tab-nav"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="tab-nav" className="label">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </label>
        <ul className="content_nav">
          <li>
            <Link to="/clinicareverbere" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/content" onClick={closeMenu}>
              INSTITUIÇÃO
            </Link>
          </li>
          <li>
            <Link to="/content2" onClick={closeMenu}>
              CORPO CLÍNICO
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              AGENDE SUA CONSULTA
            </Link>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              PARA PROFISSIONAIS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header></div>
  )
}
