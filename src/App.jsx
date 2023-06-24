import React from "react";
import './App.css';
import './css/Style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Content2 from './components/Content/Content2';
import Contact from './components/Contact/Contact';
import Nav from "./components/Header/Nav";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <main className='area'>
      <Nav />
      <Routes>
        <Route path="/clinicareverbere" element={<Header />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>  <div className="social_medias" >
        <a className="test" href="https://api.whatsapp.com/send/?phone=48999999999" target="_blank" >
          <FaWhatsapp />
          Whatsapp
        </a>
        <span className="test">
          <BsTelephone /> 48999999999
        </span>
        <span className="test">
          <FaInstagram />
          clinica_reverbere
        </span>

        {/* lista com telefone, local e midias */}
      </div>
        <div className="endereco">
          <span className="test2">
            <FiMapPin /> Edifício Daux Boabaid - R. Mal. Guilherme, 147 - sala 401
            - Centro, Florianópolis - SC, 88015-000
          </span>
        </div>

      </div>
    </main>
  );
}