import "./Content.css";
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
            <h3>Valores</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
            at ducimus vitae. Illo, libero dolor autem perferendis sequi dicta
            sit pariatur explicabo! Quas ut repudiandae fuga nam consequatur
            assumenda maxime modi incidunt nostrum sed libero excepturi
            accusantium doloremque, repellat est in itaque dolor nobis ab velit.
            Exercitationem, similique necessitatibus!
          </div>
          {/* textos sobre instituição e imagem */}
          <div className="instituition_text_container">
            <h3>Missão</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quibusdam assumenda, praesentium est eos quod? Ut ducimus quia,
            assumenda quod provident molestiae dolore distinctio inventore nulla
            quo nam natus laborum eum magnam. Neque numquam repellendus maxime?
            Ullam temporibus accusamus praesentium harum vel accusantium,
            debitis neque molestiae laudantium quasi itaque numquam!
          </div>
          {/* textos sobre instituição e imagem */}
          <div className="instituition_text_container">
            <h3 >Visão</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            perferendis cum magnam et nihil, ipsam magni aliquid vero excepturi
            quae consequuntur, impedit repellat quibusdam perspiciatis
            recusandae assumenda minima, iste possimus repellendus reiciendis
            tenetur molestiae culpa. Vitae, aperiam. In, accusantium ad magni
            incidunt ea doloremque omnis maxime aliquam cum distinctio
            perspiciatis.
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
       
        <span className="test2">
          <FiMapPin /> Edifício Daux Boabaid - R. Mal. Guilherme, 147 - sala 401
          - Centro, Florianópolis - SC, 88015-000
        </span>
        {/* lista com telefone, local e midias */}
      </div>
      <div className="main_team_cards">
        
        {/* funcionarios */}
        <div className="team_card">
          <h3>Gizeli Cunha</h3>
          <ul>
            <li><span>CRP 12/13826</span></li>
            <li>– Graduada em psicologia no ano de 2014 pela Faculdade CESUSC </li>
            <li>– Complexo de ensino superior de Santa Catarina. </li>
            <li>– Pós graduanda em Gestão da aprendizagem e educação cognitiva pela Faculdade Unicesumar. </li>
            <li>– Atendimentos pela abordagem da terapia cognitivo comportamental. </li>
            <li>– Atendimento a adolescentes e adultos que buscam acolhimento e tratamento psicológico para Transtornos de Humor (depressão e bipolaridade), transtornos de ansiedade generalizada (TAG), Fobias (específicas, social, agorafobia), transtorno de pânico, burnout, estresse pós-traumático, transtornos mentais e comportamentais relacionados ao uso de abusivo de drogas, luto, Transtorno Obsessivo-compulsivo (TOC), entre outras demandas psicológicas. </li>
            <li>– Avaliação Psicológica para cirurgia de vasectomia. Atendimentos para crianças a partir de 7 anos, adolescentes, adultos e idosos. Atendimento com criança somente presencial e os demais podem ser realizados on-line.</li>
            
            </ul>
        </div>
        <div className="team_card">
          <h3>Keli Adriana M. Godoi</h3>
          <ul>
            <li>– Graduada em psicologia no ano de 2014 pela Faculdade CESUSC </li>
            <li>– Complexo de ensino superior de Santa Catarina. </li>
            <li>– Pós graduanda em Gestão da aprendizagem e educação cognitiva pela Faculdade Unicesumar. </li>
            <li>– Atendimentos pela abordagem da terapia cognitivo comportamental. </li>
            <li>– Atendimento a adolescentes e adultos que buscam acolhimento e tratamento psicológico para Transtornos de Humor (depressão e bipolaridade), transtornos de ansiedade generalizada (TAG), Fobias (específicas, social, agorafobia), transtorno de pânico, burnout, estresse pós-traumático, transtornos mentais e comportamentais relacionados ao uso de abusivo de drogas, luto, Transtorno Obsessivo-compulsivo (TOC), entre outras demandas psicológicas. </li>
            <li>– Avaliação Psicológica para cirurgia de vasectomia. Atendimentos para crianças a partir de 7 anos, adolescentes, adultos e idosos. Atendimento com criança somente presencial e os demais podem ser realizados on-line.</li>
            
            </ul>
        </div>
        <div className="team_card">
          <h3>Ronilda Etter Brusch</h3>
          <ul>
            <li>– Graduada em psicologia no ano de 2014 pela Faculdade CESUSC </li>
            <li>– Complexo de ensino superior de Santa Catarina. </li>
            <li>– Pós graduanda em Gestão da aprendizagem e educação cognitiva pela Faculdade Unicesumar. </li>
            <li>– Atendimentos pela abordagem da terapia cognitivo comportamental. </li>
            <li>– Atendimento a adolescentes e adultos que buscam acolhimento e tratamento psicológico para Transtornos de Humor (depressão e bipolaridade), transtornos de ansiedade generalizada (TAG), Fobias (específicas, social, agorafobia), transtorno de pânico, burnout, estresse pós-traumático, transtornos mentais e comportamentais relacionados ao uso de abusivo de drogas, luto, Transtorno Obsessivo-compulsivo (TOC), entre outras demandas psicológicas. </li>
            <li>– Avaliação Psicológica para cirurgia de vasectomia. Atendimentos para crianças a partir de 7 anos, adolescentes, adultos e idosos. Atendimento com criança somente presencial e os demais podem ser realizados on-line.</li>
            
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
