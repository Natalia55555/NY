import './Header.css';
import '../Content/Content.css';

import { Link } from 'react-router-dom';

function Header(props) {
  return ( 
    <div>      
      <div className="bg-header">
        <div className="header-bottom">  
          <p>Конструктор Новгодних открыток</p>
        </div>     
          <Link className="btn" to="/card">НАЧАТЬ</Link>          
        </div>
      <div className="snowContainer"><div id="snow"></div></div> 
   </div>
   
  );
}

export default Header;