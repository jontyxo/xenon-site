import "./contact.css"
import Axios from "axios";
import {useRef} from "react";

import React from 'react'

function Contact() {
  const nameRef=useRef();
  const emailRef=useRef();
  const descRef=useRef();

  const handleSubmit=(e) =>{
    e.preventDefault();
   
    Axios.post('http://localhost:3001/api/contactform',{
                  name:nameRef.current.value,
                  email:emailRef.current.value,
                  desc:descRef.current.value
                })
  }
  

  return (
    <div>
      <div className="contactUs">
      <span className="contactHeader">Hey!! Fill the Form to get in touch with us</span>
      <form className="contactform" onSubmit={handleSubmit}>
        <label className="labelcontact">Your Name</label>
        <input className="loginInput" type="text" placeholder="Enter your Name" ref={nameRef}/>
        <label className="labelcontact">Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." ref={emailRef}/>
        <label className="labelcontact">Car Name with Company</label>
        <input className="loginInput" type="text" placeholder="Your Car name" ref={descRef}/>
        <button className="loginButton">Submit</button>
      </form>
       
    </div>
    </div>
  )
}

export default Contact;