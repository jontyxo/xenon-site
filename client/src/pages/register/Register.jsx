import "./register.css"
import {useRef,useState} from "react"
import Axios from "axios";
import axios from "axios";
import { axiosInstance } from "../../config";


export default function Register() {
  const usernameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const [err,setErr] =useState(false);
  const errmessage=()=>{
setErr(true);
  }

 const registerHandler=(e)=>{
  e.preventDefault();
   axiosInstance.post('/users/register',{
     name:usernameRef.current.value,
     email:emailRef.current.value,
     password:passwordRef.current.value
   }).then(()=>{
    window.location.href = '/login'
   }).catch(errmessage)
 }
  
 const goToLogin=()=>{
  window.location.href = '/login'
 }



    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={registerHandler}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." ref={usernameRef} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." ref={emailRef} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton" onClick={goToLogin}>Login</button>
        {err && <span>Something went wrong!</span>}
    </div>
    )
}
