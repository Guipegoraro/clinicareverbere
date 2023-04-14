import './Contact.css';
import React, { useState } from 'react';
function Contact () {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [profissional, setProfissional] = useState('livreEscolha');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [tipoDeAtendimento, setTipoDeAtendimento] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [validated, setValidated] = useState('');
    const [nomeValidated, setNomeValidated] = useState('');
    const [idadeValidated, setIdadeValidated] = useState('');
    const [emailValidated, setEmailValidated] = useState('');
    const [telefoneValidated, setTelefoneValidated] = useState('');
    const [tipoDeAtendimentoValidated, setTipoDeAtendimentoValidated] = useState('');

    function validateAppointment() {
      let validated = 0;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regexEmail.test(String(email).toLowerCase())) {
        validated += 1;
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
      }
      if (nome.length > 3) {
        validated += 1;
        setNomeValidated(true);
      } else {
        setNomeValidated(false);
      }
      if (telefone.replace(/\D/g, "").length === 11) {
        validated += 1;
        setTelefoneValidated(true);
      } else {
        setTelefoneValidated(false);
      }
      if (idade != "") {
        validated += 1;
        setIdadeValidated(true);
      } else {
        setIdadeValidated(false);
      }
      if (tipoDeAtendimento != "") {
        validated += 1;
        setTipoDeAtendimentoValidated(true);
      } else {
        setTipoDeAtendimentoValidated(false);
      }
      setValidated(validated === 5);
    }

    



  return (
     <section className="contact_section" id="Contact">
       <div className="contact_container">
       <div className="greate_services_section_heading"><h1>Agende Sua Consulta</h1></div>
       <div className="contact_section_heading">
          <p>Atendimentos de 9:00 às 22:00. <a href="https://calendar.google.com/calendar/u/0?cid=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ" target="blank" class="hoverzin">Horários DISPONÍVEIS.</a></p>
    </div> 
    
   
    <form {...validated ? `action="https://formsubmit.co/gui.peg@hotmail.com" method="POST"` : ""}>
            <div className="data_form_fields">
              <label htmlFor="text"></label>
              <input type="text" onChange={(event) => { setNome(event.target.value) }} name="Nome" id="text" required placeholder="Nome" />
              <label htmlFor="idade"></label>
              <input type="number" onChange={(event) => { setIdade(event.target.value) }} name="idade" id="idade" required placeholder="Idade" />
              <label htmlFor="email"></label>
              <input type="email" onChange={(event) => { setEmail(event.target.value) }} name="email" id="email" required placeholder="Email" />
              <label htmlFor="profissional"></label>
              <select onChange={(event) => { setProfissional(event.target.value) }} id="profissional" name="profissional">
                <option value="livreEscolha">Escolha Por Mim</option>
              <option value="Profissinal1">Profissional1</option>
              <option value="Profissional2">Profissional2</option>
              <option value="Profissional3">Profissional3</option>
              
              </select>
            </div>
              <div className="data_form_fields">
             <label htmlFor="number"></label>   
             <input type="number" required onChange={(event) => { setTelefone(event.target.value) }} name="number" id="number" placeholder="Telefone" />
             <label htmlFor="text"></label>
             <input type="text" name="assunto" onChange={(event) => { setAssunto(event.target.value) }} id="assunto" required placeholder="Assunto" />
              <label htmlFor="tipo-de-atendimento"></label>
              <select id="tipo-de-atendimento" onChange={(event) => { setTipoDeAtendimento(event.target.value) }} name="tipo-de-atendimento">
              <option value="online">Consulta Online</option>
              <option value="presencial">Consulta Presencial</option>
              </select>
                <input type="hidden" name="_next" value="https://tp4-projetobloco.pedrohenriq1389.repl.co/" />
           </div>
              <div className="message_form_fields">
                 <textarea required name="mensagem" onChange={(event) => { setMensagem(event.target.value) }} placeholder="Escreva aqui sua mensagem, incluindo Data e Hora que deseja marcar sua consulta. Em seguida, enviaremos uma mensagem no whatsapp para confirmar."></textarea>
              </div>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FSao_Paulo&showTitle=1&showNav=1&mode=WEEK&showPrint=0&showTabs=0&showCalendars=1&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5" style={{borderWidth:0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          
          <div className="form_submit_btn">
              <button onClick={(e) => {e.preventDefault; validateAppointment()}} >ENVIAR</button>
          </div>
          </form>
  </div>
</section>
  )
}

export default Contact;