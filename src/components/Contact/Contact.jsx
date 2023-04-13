import './Contact.css';

function Contact () {
  return (
     <section className="contact_section" id="Contact">
       <div className="contact_container">
       <div className="greate_services_section_heading"><h1>Agende Sua Consulta</h1></div>
       <div className="contact_section_heading">
          <p>Atendimentos de 9:00 às 22:00. <a href="https://calendar.google.com/calendar/u/0?cid=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ" target="blank" class="hoverzin">Horários DISPONÍVEIS.</a></p>
    </div> 

          <form action="https://formsubmit.co/gui.peg@hotmail.com" method="POST">
            <div className="data_form_fields">
              <label htmlFor="text"></label>
              <input type="text" name="Nome" id="text" required placeholder="Nome" />
              <label htmlFor="idade"></label>
              <input type="number" name="idade" id="idade" required placeholder="Idade" />
              <label htmlFor="email"></label>
              <input type="email" name="email" id="email" required placeholder="Email" />
              <label htmlFor="profissional"></label>
              <select id="profissional" name="profissional">
                <option value="random">Escolha Por Mim</option>
              <option value="Profissinal1">Profissional1</option>
              <option value="Profissional2">Profissional2</option>
              <option value="Profissional3">Profissional3</option>
              
              </select>
            </div>
              <div className="data_form_fields">
             <label htmlFor="number"></label>   
             <input type="number" name="number" id="number" placeholder="Telefone" />
             <label htmlFor="text"></label>
             <input type="text" name="assunto" id="assunto" required placeholder="Assunto" />
              <label htmlFor="tipo-de-atendimento"></label>
              <select id="tipo-de-atendimento" name="tipo-de-atendimento">
              <option value="online">Consulta Online</option>
              <option value="presencial">Consulta Presencial</option>
              </select>
                <input type="hidden" name="_next" value="https://tp4-projetobloco.pedrohenriq1389.repl.co/" />
           </div>
              <div className="message_form_fields">
                 <textarea name="mensagem" placeholder="Escreva aqui sua mensagem, incluindo Data e Hora que deseja marcar sua consulta. Em seguida, enviaremos uma mensagem no whatsapp para confirmar."></textarea>
              </div>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23039BE5&ctz=America%2FSao_Paulo&showTitle=1&showNav=1&mode=WEEK&showPrint=0&showTabs=0&showCalendars=1&src=cGVkbWFjaGFkbzI3QGdtYWlsLmNvbQ&color=%23039BE5" style={{borderWidth:0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
          
          <div className="form_submit_btn">
              <button>ENVIAR</button>
          </div>
          </form>
  </div>
</section>
  )
}

export default Contact;