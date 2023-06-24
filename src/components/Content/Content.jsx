import "../../css/Style.css";
import clinica from "./REVERBERE.png";

const Content = () => {
  return (
    <section className="content" id='content'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="instituition">
      <div className="imgInstituition">
        <img className="logoInst" src={clinica} />
      </div>

      <div className="intituiton_container">

        <div className="instituiton_content">

          <div className="instituition_text_container borderRight">    
            <h3>Quem somos?</h3>
            <ul className="instituition_list">
              <li><strong>1 -</strong> Primeiramente você deve escolher um de nossos profissionais licenciados.</li>
              <li><strong>2 -</strong> Em seguida, confira nosso <a href="#">Calendário</a> e escolha uma data e um horário disponível.</li>
              <li><strong>3 -</strong>Preencha o restante dos campos (nome, idade, email, telefone e assunto).</li>
              <li><strong>4 -</strong>Agora é só aguardar que entraremos em contato para confirmar sua consulta.</li>
            </ul>
          </div>

          <div className="instituition_text_container  borderRight">
            <h3>Nossos valores</h3>
            <ul className="instituition_list">
              <li><strong>1 -</strong> Primeiramente você deve escolher um de nossos profissionais licenciados.</li>
              <li><strong>2 -</strong> Em seguida, confira nosso <a href="#">Calendário</a> e escolha uma data e um horário disponível.</li>
              <li><strong>3 -</strong>Preencha o restante dos campos (nome, idade, email, telefone e assunto).</li>
              <li><strong>4 -</strong>Agora é só aguardar que entraremos em contato para confirmar sua consulta.</li>
            </ul>
          </div>

          <div className="instituition_text_container">
            <h3>Como eu marco minha consulta?</h3>
            <ul className="instituition_list">
              <li><strong>1 -</strong> Primeiramente você deve escolher um de nossos profissionais licenciados.</li>
              <li><strong>2 -</strong> Em seguida, confira nosso <a href="#">Calendário</a> e escolha uma data e um horário disponível.</li>
              <li><strong>3 -</strong>Preencha o restante dos campos (nome, idade, email, telefone e assunto).</li>
              <li><strong>4 -</strong>Agora é só aguardar que entraremos em contato para confirmar sua consulta.</li>
            </ul>
          </div>


          {/* textos sobre instituição e imagem */}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Content;
