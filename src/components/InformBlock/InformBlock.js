import './InformBlock.css';
import Inputs from '../Inputs/Inputs';
import Draggable from '../Draggable/Draggable';

import React, { Component } from 'react';
import '../Bg/Bg.css';
import classnames from 'classnames';

// function InformBlock(){
  class  InformBlock extends Component{
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this); 
        this.onClick3 = this.onClick3.bind(this);       
        this.state = {
          show: false,
          show2: false,
          show3: false,

        };
      }
       onClick() {
        this.setState({ show: !this.state.show });       
      }; 
      onClick2() {
        this.setState({ show2: !this.state.show2 });       
      }; 
      onClick3() {
        this.setState({ show3: !this.state.show3 });       
      };
      render() {  
        const { show } = this.state; 
        const { show2 } = this.state; 
        const { show3 } = this.state; 
       
        let active;
          if (this.state.show){            
              active = 'one';
          }
          else if(this.state.show2){
           
           active = 'two';
          }
          else if(this.state.show3){            
            active = 'three';
          }
          else{            
           active = 'left_block';
          }
       
          return (       
            <div className='main_block'>
            <div className={ active }  >
              <div className='left_block_text'>             
              </div>
            </div>
            <div className='right_block'>
              <p>1. Выберете фон</p>
               <button  onClick={this.onClick} className={classnames('bg_btn1 bg_btn',  { 'change-class': show })} ></button>
               <button  onClick={this.onClick2} className={classnames('bg_btn2 bg_btn',  { 'change-class': show2 })} ></button> 
               <button  onClick={this.onClick3} className={classnames('bg_btn3 bg_btn',  { 'change-class': show3 })} ></button>              
              <p>2. Перетащите стикеры на открытку</p>  
              <Draggable />
              <p>3. Добавьте текст</p>  
              <Inputs/>    
            </div>
          </div> 
    );
  };
};
  
  export default InformBlock;






