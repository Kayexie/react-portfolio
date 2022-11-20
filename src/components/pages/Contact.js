import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorEmailMessage, setErrorEmailMessage]=useState('');
    const [errorMessage, setErrorMessage]=useState('');

    const handleInputChange = (event) => {
        //get the name and value from the input field onchange;
        const {name, value}=event.target;
       //asign different value to different name
        if (name === 'name'){
          setName(value);//if the input field is the name, grap the value from the input, and set it as the name state property. 
        } if (name === 'email'){
          setEmail(value)
        } if (name === 'message'){
          setMessage(value)
        }
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
      if (!validateEmail(email) || !name){
        setErrorEmailMessage('Please input a valid email address and username.');
        return;
      } if (!message){
        setErrorMessage('This field cannot be empty!');
        return;
      }

      setName('');
      setEmail('');
      setMessage('');
    };


  return (
    <section class='contact'>
    <form class='formA'>
    <div class="formC">
      <label class="label">Name</label>
      <input  class ='input' name='name' 
      value={name} 
      onChange={handleInputChange} type="name"/>
    </div>
    <div class="formC">
      <label >Email</label>
      <input class="inputC" name='email' 
      value={email} 
      onChange={handleInputChange} type="email"/>  
    </div>
 
    {errorEmailMessage && (
         <p id="emailHelp">{errorEmailMessage}</p>)}

    <div class="formC">
      <label name='message' 
      value={message} 
      onChange={handleInputChange}>Message</label>
      <textarea rows="5"></textarea>
      {errorMessage && (<div id="emailHelp" class="form-text xsd">{errorMessage}</div>)}
    </div>
    <button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
  </form>
  </section>
  );
}

export default Form;