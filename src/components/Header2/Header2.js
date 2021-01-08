// import '../Header.css';
import '../Content/Content.css';
import Exporter from '../Output/Output';

import { Link } from 'react-router-dom';

function Header2(props) {
  return ( 
    <div>      
      <div className="bg-header">
        <div className="header-bottom">  
          <p>Собери свою открытку</p>
        </div>
          <Link className="btn" to="/">НАЗАД</Link>
          <Exporter />  
        </div>    
        <div className="snowContainer"><div id="snow"></div></div>  
   </div>
   
  );
}

export default Header2;