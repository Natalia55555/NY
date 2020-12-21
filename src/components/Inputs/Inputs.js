import React, { Component } from 'react';
import './Inputs.css';

class Input extends Component {
    state = { 
        tagged: false,
        message: '',    
        input: '',
    }

    handleClick(e) {
        this.setState({tagged: true});
        e.preventDefault();        
    }

    handleInputChange = (e, name) => {
      this.setState({
       [name]: e.target.value
     })
    }

    render() {                                                
        return (
            <div id="id">                
                <textarea                   
                    placeholder="Введите текст" 
                    type="text"
                   onChange={(e) => this.handleInputChange(e, 'input')}
               >
                </textarea>
                <br></br>
                <button className="btn-input"
                    onClick={(e) => this.handleClick(e)}>
                    {this.state.tagged ? 'Добавить' : 'Добавить' } 
                </button>
                <div className='congratulations'>
                    {this.state.tagged ? this.state.input : 'Текст поздравления' }
                </div>
            </div>    
        )
    }
}
export default Input;