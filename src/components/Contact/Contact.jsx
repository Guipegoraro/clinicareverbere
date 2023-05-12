import './Contact.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [formsubmited, setFormSubmited] = useState({
    withSuccess: false,
    withError: false,
  });
  const [calendarSize, setCalendarSize] = useState('');
  const [isFormInputValid, setisFormInputValid] = useState({
    nome: true,
    idade: true,
    email: true,
    telefone: true,
    tipoDeAtendimento: true,
    mensagem: true,
  });
  const [userForm, setUserForm] = useState({
    nome: '',
    idade: '',
    email: '',
    profissional: 'livre Escolha',
    telefone: '',
    assunto: '',
    tipoDeAtendimento: '',
    mensagem: '',
  });


  function handleOnChange(event) {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  function validateAppointment() {
    let validatedFunc = 0;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(String(userForm.email).toLowerCase())) {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, email: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, email: false });
    };
    if (userForm.nome.length > 3) {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, nome: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, nome: false });
    };
    if (userForm.mensagem.length > 0) {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, mensagem: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, mensagem: false });
    };
    if (userForm.telefone.replace(/\D/g, "").length === 11) {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, telefone: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, telefone: false });
    };
    if (userForm.idade !== "") {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, idade: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, idade: false });
    };
    if (userForm.tipoDeAtendimento === "online" || userForm.tipoDeAtendimento === "presencial") {
      validatedFunc += 1;
      setisFormInputValid({ ...isFormInputValid, tipoDeAtendimento: true });
    } else {
      setisFormInputValid({ ...isFormInputValid, tipoDeAtendimento: false });
    };
    if (validatedFunc === 6) {

      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/gui.peg@hotmail.com', {
        nome: userForm.nome,
        telefone: userForm.telefone,
        email: userForm.email,
        idade: userForm.idade,
        profissional: userForm.profissional,
        tipoDeAtendimento: userForm.tipoDeAtendimento,
        assunto: userForm.assunto,
        mensagem: userForm.mensagem
      })
        .then((response) => {
          if (response.status === 200) {
            window.location.replace('https://tp4-projetobloco.pedrohenriq1389.repl.co/obrigado.html');
            setFormSubmited({
              withSuccess: true,
              withError: false,
            });
          }
        })
        .catch(error => {
          console.log(error); alert('Erro ao enviar formulário, tente novamente mais tarde.');
          alert("Erro ao enviar formulário! entre em contato para marcar sua consulta, pedimos desculpa pelo transtorno!")
          setFormSubmited({
            withSuccess: false,
            withError: true,
          });
        });
    }
  }

  function handleWindowResizeCalendar() {

    if (window.innerWidth > 800) {
      setCalendarSize('https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5');
    } else {

      setCalendarSize('https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%23C0CA33&ctz=America%2FSao_Paulo&mode=AGENDA&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=1&showTitle=0&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5');
    };
  };

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
            <input type="text" className={isFormInputValid.nome ? '' : 'deniedForm'} onChange={(event) => handleOnChange(event)} name="nome" id="text" required placeholder="Nome" />
            <label htmlFor="idade"></label>
            <input type="number" className={isFormInputValid.idade ? '' : 'deniedForm'} onChange={(event) => handleOnChange(event)} name="idade" id="idade" required placeholder="Idade" />
            <label htmlFor="email"></label>
            <input type="email" className={isFormInputValid.email ? '' : 'deniedForm'} onChange={(event) => handleOnChange(event)} name="email" id="email" required placeholder="Email" />
            <label htmlFor="profissional">Profissional que irá lhe atender:</label>
            <select onChange={(event) => handleOnChange(event)} id="profissional" name="profissional">
              <option value="livreEscolha">Escolha Por Mim</option>
              <option value="Profissinal1">Gizeli Cunha</option>
              <option value="Profissional2">Keli Godoi</option>
              <option value="Profissional3">Ronilda Brusch</option>
            </select>
          </div>
          <div className="data_form_fields">
            <label htmlFor="number"></label>
            <input type="number" className={isFormInputValid.telefone ? '' : 'deniedForm'} required onChange={(event) => handleOnChange(event)} name="telefone" id="number" placeholder="Telefone" />
            <label htmlFor="text"></label>
            <input type="text" name="assunto" onChange={(event) => handleOnChange(event)} id="assunto" required placeholder="Assunto" />
            <label htmlFor="tipo-de-atendimento">Método de atendimento:</label>
            <select id="tipo-de-atendimento" className={isFormInputValid.tipoDeAtendimento ? '' : 'deniedForm'} onChange={(event) => handleOnChange(event)} name="tipoDeAtendimento">
              <option value="selecione">Selecione uma opção</option>
              <option value="online">Consulta Online</option>
              <option value="presencial">Consulta Presencial</option>
            </select>
            <input type="hidden" name="_next" value="https://tp4-projetobloco.pedrohenriq1389.repl.co/" />
          </div>
          <div className="message_form_fields">
            <textarea required className={isFormInputValid.mensagem ? '' : 'deniedForm'} name="mensagem" onChange={(event) => handleOnChange(event)} placeholder="Escreva aqui sua mensagem, incluindo Data e Hora que deseja marcar sua consulta. Em seguida, enviaremos uma mensagem no whatsapp para confirmar."></textarea>
          </div>

          { /*<p>Se o <strong>Calendário</strong> estiver muito <strong>pequeno</strong> clique <a className='aqui' target={'_blank'} href='https://calendar.google.com/calendar/embed?src=pedmachado27%40gmail.com&ctz=America%2FSao_Paulo'>AQUI</a></p> */}
          <div className='responsiveIframe'>
            <iframe id='iframeCalendar' src={calendarSize} style={{ borderWidth: 0 }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>

          <p style={{ margin: "0 auto", textAlign: "center" }}>Lembre de incluir <b>data e hora da consulta</b> na sua mensagem! Enviaremos confirmação por WhatsApp em até 1 dia útil</p>
          {formsubmited.withError ? <h4 style={{ color: "red" }}>Ocorreu um erro interno ao enviar o formulário! entre em contato pelo número xx xxxxx-xxxx para marcar sua consulta.</h4> : ''}
          <div className="form_submit_btn">
            {formsubmited.withSuccess ? <p>Formulário enviado!</p> : <button onClick={() => { validateAppointment() }} >ENVIAR</button>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;