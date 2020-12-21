import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Draggable.css';
import Spruce1 from './img/Spruce1.png';
import Spruce2 from './img/Spruce2.png';
import Spruce3 from './img/Spruce3.png';
import Spruce4 from './img/Spruce4.png';
import Prise from './img/prise.png';
import Rudolf from './img/rudolf.png';
import Santa from './img/Santa.png';
import Snowman from './img/snowman.png';



class Dragg extends Component {
    
   
    render() {
      return (
        <div>
        <div className="handlebox">
        <Draggable 
         
          position={null}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Spruce1}  alt={"Spruce1"}/></div>             
        </Draggable>
        <Draggable          
          handle=".handle"        
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Spruce2} alt={"Spruce2"}/></div>             
        </Draggable>      
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}         
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Spruce3} alt={"Spruce3"}/></div>             
        </Draggable>
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Spruce4} alt={"Spruce4"}/></div>             
        </Draggable>
        </div>

        <div className="handlebox">
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Prise} alt={"Prise"}/></div>             
        </Draggable>
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Rudolf} alt={"Rudolf"}/></div>             
        </Draggable>
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Santa} alt={"Santa"}/></div>             
        </Draggable>
        <Draggable 
          handle=".handle"  
          defaultPosition={{x: 0, y: 0}}
          position={null}          
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>          
            <div className="handle"><img src={Snowman} alt={"Snowman"}/></div>             
        </Draggable>
        </div>      
        </div>   
      );
    }
  }
   
  export default Dragg;