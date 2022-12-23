
import './App.css';
import React from 'react';
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    // abaixo daq ta o useState
//
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({value: event.target.value});
   
  
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch(`https://viacep.com.br/ws/${this.state.value}/json`)
    .then(res => res.json())
    .then(data => { 
      
    
    alert(data.localidade + "estado" + data.uf)


  })}
  
  render() {
    return (
  
      <form onSubmit={this.handleSubmit}>
          <input type="text" className='input-text' value={this.state.value} onChange={this.handleChange} />
        <input type="submit" className='button-submit' value="Enviar"/>
        <div>
 
     
    </div>
        
        
      </form> 
      
    );
    
  }
 
}
export default Form;