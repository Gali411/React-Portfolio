import React, { useState } from 'react';
import '/src/App.css';


export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  const checkIfEmpty = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === '') {
      setMessage("Please provide your name.");
    } 
    if (email.trim() === ''){
      setMessage("Please provide your email.");
    }
    if (msg.trim() === ''){
      setMessage("Please fill out a message.");
    }
   if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
    } 
    if (name.trim() === '' || email.trim() === ''|| msg.trim() === ''){
      setMessage('All fields are empty');
    };
  };

  return (
    <div className="background">
      <h1>Contact</h1>

      <p>Name: </p>

      <input  
      type="text"
      value={name}
      onChange={handleNameChange}></input>

      <p>Email: </p>
      
      <input   
      type="text"
      value={email}
      onChange={handleEmailChange}></input>

      <p>Message: </p>
      <textarea
      type="text"
      value={msg}
      onChange={handleMsgChange}></textarea>

      <button onClick={checkIfEmpty}>Submit</button>
      
      <p id='error'>{message}</p>
    </div>
  );
}
