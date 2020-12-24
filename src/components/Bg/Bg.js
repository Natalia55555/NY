import React, { Component } from 'react';
// import Img1 from './img/16844.jpg';
import './Bg.css';
import classnames from 'classnames';


class  Bg extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
          show: false,
        };
      }
    onClick() {
        this.setState({ show: !this.state.show });
      };
      
    render() {  
        const { show } = this.state;
          return (

    <div>   
      
     <button  onClick={this.onClick} className={classnames('bg_btn1 bg_btn', leftBg = { 'change-class': show })} >
     
     </button>
     <button className='bg_btn2 bg_btn' onClick='/'>
     
     </button>
     <button className='bg_btn3 bg_btn' onClick='/'>
     
     </button>
  </div>
    );
  };
};
  
  export default Bg;
  