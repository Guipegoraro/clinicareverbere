import './Header.css';
import Logo from './REVERBERE_logo_png.png';
import Clinica from './clinica.jpg';

const Header = () => {
  return (
    <section className="header">
          
            <header>
                <div className="container">
                    <nav className="nav_checkbox">
                        <a href="#" className="logo">
                            <img className="imgLogo" src={Logo} alt="logo" />                           
                        </a>
                        <input type="checkbox" id="tab-nav" className="tab-nav" />
                        <label htmlFor='tab-nav' className="label">
                            <div className="burger"></div>
                            <div className="burger"></div>
                            <div className="burger"></div>
                        </label>
                        <ul className="content_nav">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">INSTITUIÇÃO</a></li>
                            <li><a href="#">CORPO CLÍNICO</a></li>
                            <li><a href="#">AGENDE SUA CONSULTA</a></li>
                            <li><a href="#">PARA PROFISSIONAIS</a></li>
                        </ul>
                    </nav>
                </div>               
            </header>
                  
                <div className="banner">
                    <img className="bannerImg" src={Clinica} alt="Imagem" />
                    <div className="textBanner"><strong>Reverbere, cuidando de você e da sua família.</strong></div>
                </div>
    </section>
  );
}





export default Header;
