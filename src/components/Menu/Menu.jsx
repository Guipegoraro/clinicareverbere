
import "../../css/Style.css";

const Menu = (props) => {

  // const textLinks = props.textLinks.map((textLink,index) =>{
  //     <li key={index}><a href="#">props.links[index]</a></li>
  //   });

  



 
  return (
    <nav className="nav_checkbox" id="nav_checkbox">
        <input type="checkbox" id="tab-nav" className="tab-nav" />
        <label htmlFor="tab-nav" className="label">
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </label>
        <ul className="content_nav" id="responsive-menu">
            {/* {textLinks} */}

        </ul>
    </nav>            
  );
};

export default Menu;
