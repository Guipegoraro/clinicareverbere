import "../../css/Style.css";
import funcionario from "./funcionario.jpg";
import clinica from "./REVERBERE.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Content = () => {
  return (
    <section className="content" id='content'>
      <div className="instituition">
        <div className="instituition_call" >
          <h1 >A Instituição</h1>
        </div>
      <div className="imgInstituition">
        <img className="logoInst" src={clinica} />
      </div>
        <div className="instituiton_content">
          <div className="instituition_text_container">
            <h3>Propósito da Clínica Reverbere</h3>
            <strong>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
            at ducimus vitae. Illo, libero dolor autem perferendis sequi dicta
            sit pariatur explicabo! Quas ut repudiandae fuga nam consequatur
            assumenda maxime modi incidunt nostrum sed libero excepturi
            accusantium doloremque, repellat est in itaque dolor nobis ab velit.
            Exercitationem, similique necessitatibus!"</strong>
          </div>
          {/* textos sobre instituição e imagem */}
          <div id='content2'></div>
        </div>
      </div>
      <div className="social_medias" >      
         <a className="test" href="#" target="_blank" >
          <FaWhatsapp />
          Whatsapp
        </a>
        <span className="test">
          <BsTelephone /> 48996881212
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
      
      <div className="main_team_cards">
        <div className='sectionCorpo'>
        <div className="instituition_call corpo" >
          <h1 >Corpo Clínico</h1>
        </div>
         </div>
        <div className="team_card">
          <h3><strong>Gizeli Cunha</strong></h3>
          <ul>
            <li><span>CRP 12/13826</span></li>
            <li>➔ <strong>Graduada</strong> em psicologia no ano de 2014 pela Faculdade <strong>CESUSC</strong> </li>
            <li>➔ Complexo de ensino superior de Santa Catarina. </li>
            <li>➔ <strong>Pós graduanda</strong> em <strong>Gestão da aprendizagem e educação cognitiva</strong> pela Faculdade Unicesumar. </li>
            <li>➔ Atendimentos pela abordagem da terapia cognitivo comportamental. </li>
            <li>➔ Atendimento a <strong>adolescentes e adultos</strong> que buscam acolhimento e tratamento psicológico para <strong>Transtornos de Humor (depressão e bipolaridade), transtornos de ansiedade generalizada (TAG), Fobias (específicas, social, agorafobia), transtorno de pânico, burnout, estresse pós-traumático, transtornos mentais e comportamentais relacionados ao uso de abusivo de drogas, luto, Transtorno Obsessivo-compulsivo (TOC)</strong>, entre outras demandas psicológicas. </li>
            <li>➔ Avaliação Psicológica para cirurgia de <strong>vasectomia.</strong> </li>
            <li>➔ Atendimentos para <strong>crianças a partir de 7 anos, adolescentes, adultos e idosos.</strong> Atendimento com criança somente presencial e os demais podem ser realizados on-line. </li>
            
            </ul>
        </div>
        <div className="team_card">
          <h3><strong>Segundo Nome</strong></h3>
          <ul>
            <li><span>CRP 12/12834</span></li>
            <li>➔ Atuante na área clínica <strong>há seis anos</strong>, sob o foco da <strong>Psicologia Relacional Sistêmica.</strong> </li>
            <li>➔ Atendimentos voltados para <strong>adultos</strong> que buscam tratamento para <strong>transtornos depressivos e relacionados a traumas e estressores.</strong> </li>
            <li>➔ Avaliação Psicológica para cirurgia <strong>bariátrica e vasectomia</strong> </li>
            <li>➔ <strong>Atende adultos.</strong> </li>
            </ul>
        </div>
        <div className="team_card">
          <h3>Ronilda Etter Brusch</h3>
          <ul>
            <li><span>CRP 07/21926</span></li>
            <li>➔ <strong>Graduada</strong> pela <strong>Universidade Feevale-RS.</strong> </li>
            <li>➔ <strong>Pós-graduanda</strong> em <strong>Psicologia Positiva e Coaching</strong> pela Unileyal. </li>
            <li>➔ <strong>Pós graduanda</strong> em <strong>Psicologia do Trabalho e das organizações</strong> pela Estácio. </li>
            <li>➔ Formação voltada à Psicoterapia e controle do Estresse, Transtornos de Ansiedade e Síndrome do Pânico.</li>
            <li>➔ Atendimentos voltados a pacientes que sofrem de <strong>Transtorno Obsessivo-Compulsivo (TOC), Transtornos de Humor (depressão e bipolaridade), Fobias (específicas, social, agorafobia) e Transtornos Alimentares.</strong> </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
