import './Contact.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [profissional, setProfissional] = useState('livre Escolha');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [tipoDeAtendimento, setTipoDeAtendimento] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [nomeValidated, setNomeValidated] = useState(true);
  const [idadeValidated, setIdadeValidated] = useState(true);
  const [emailValidated, setEmailValidated] = useState(true);
  const [telefoneValidated, setTelefoneValidated] = useState(true);
  const [tipoDeAtendimentoValidated, setTipoDeAtendimentoValidated] = useState(true);
  const [mensagemValidated, setMensagemValidated] = useState(true);
  const [formsubmited, setFormSubmited] = useState(false);
  const [calendarSize, setCalendarSize] = useState('');
  function validateAppointment() {
    let validatedFunc = 0;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(String(email).toLowerCase())) {
      validatedFunc += 1;
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
    if (nome.length > 3) {
      validatedFunc += 1;
      setNomeValidated(true);
    } else {
      setNomeValidated(false);
    }
    if (mensagem.length > 0) {
      validatedFunc += 1;
      setMensagemValidated(true);
    } else {
      setMensagemValidated(false);
    }
    if (telefone.replace(/\D/g, "").length === 11) {
      validatedFunc += 1;
      setTelefoneValidated(true);
    } else {
      setTelefoneValidated(false);
    }
    if (idade !== "") {
      validatedFunc += 1;
      setIdadeValidated(true);
    } else {
      setIdadeValidated(false);
    }
    if (tipoDeAtendimento === "online" || tipoDeAtendimento === "presencial") {
      validatedFunc += 1;
      setTipoDeAtendimentoValidated(true);
    } else {
      setTipoDeAtendimentoValidated(false);
    }
    if (validatedFunc === 6) {
      setFormSubmited(true);
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/gui.peg@hotmail.com', {
        nome: nome,
        telefone: telefone,
        email: email,
        idade: idade,
        profissional: profissional,
        tipoDeAtendimento: tipoDeAtendimento,
        assunto: assunto,
        mensagem: mensagem
      })
        .then(response => {
          console.log(response);
          window.location.replace('https://tp4-projetobloco.pedrohenriq1389.repl.co/obrigado.html');
        })
        .catch(error => console.log(error));
      console.log('formulario enviado')
    }
  }

  function handleWindowResizeCalendar() {

    if (window.innerWidth > 800) {
      setCalendarSize('https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5');
    } else {

      setCalendarSize('https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%23C0CA33&ctz=America%2FSao_Paulo&mode=AGENDA&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=1&showTitle=0&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResizeCalendar);
    handleWindowResizeCalendar();
    return () => window.removeEventListener('resize', handleWindowResizeCalendar);
  }, []);




  return (
    <section className="contact_section" id="Contact">
      <div className="contact_container">
        <div className="greate_services_section_heading"><h1>Agende Sua Consulta</h1></div>
        <div className="contact_section_heading">
          <p>Atendimentos de 9:00 às 22:00. <a href="https://calendar.google.com/calendar/u/0?cid=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ" target="blank" className="hoverzin">Horários DISPONÍVEIS.</a></p>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); }}>
          <div className="data_form_fields">
            <label htmlFor="text"></label>
            <input type="text" className={nomeValidated ? '' : 'deniedForm'} onChange={(event) => { setNome(event.target.value) }} name="Nome" id="text" required placeholder="Nome" />
            <label htmlFor="idade"></label>
            <input type="number" className={idadeValidated ? '' : 'deniedForm'} onChange={(event) => { setIdade(event.target.value) }} name="idade" id="idade" required placeholder="Idade" />
            <label htmlFor="email"></label>
            <input type="email" className={emailValidated ? '' : 'deniedForm'} onChange={(event) => { setEmail(event.target.value) }} name="email" id="email" required placeholder="Email" />
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
            <input type="number" className={telefoneValidated ? '' : 'deniedForm'} required onChange={(event) => { setTelefone(event.target.value) }} name="number" id="number" placeholder="Telefone" />
            <label htmlFor="text"></label>
            <input type="text" name="assunto" onChange={(event) => { setAssunto(event.target.value) }} id="assunto" required placeholder="Assunto" />
            <label htmlFor="tipo-de-atendimento"></label>
            <select id="tipo-de-atendimento" className={tipoDeAtendimentoValidated ? '' : 'deniedForm'} onChange={(event) => { setTipoDeAtendimento(event.target.value) }} name="tipo-de-atendimento">
              <option value="selecione">Selecione uma opção</option>
              <option value="online">Consulta Online</option>
              <option value="presencial">Consulta Presencial</option>
            </select>
            <input type="hidden" name="_next" value="https://tp4-projetobloco.pedrohenriq1389.repl.co/" />
          </div>
          <div className="message_form_fields">
            <textarea required className={mensagemValidated ? '' : 'deniedForm'} name="mensagem" onChange={(event) => { setMensagem(event.target.value) }} placeholder="Escreva aqui sua mensagem, incluindo Data e Hora que deseja marcar sua consulta. Em seguida, enviaremos uma mensagem no whatsapp para confirmar."></textarea>
          </div>

          { /*<p>Se o <strong>Calendário</strong> estiver muito <strong>pequeno</strong> clique <a className='aqui' target={'_blank'} href='https://calendar.google.com/calendar/embed?src=pedmachado27%40gmail.com&ctz=America%2FSao_Paulo'>AQUI</a></p> */ }
          <div className='responsiveIframe'>
          <iframe id='iframeCalendar' src={calendarSize} style={{ borderWidth: 0 }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>


          <div className="form_submit_btn">
            {formsubmited ? <p>Formulário enviado!</p> : <button onClick={() => { validateAppointment() }} >ENVIAR</button>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;