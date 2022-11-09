import "./login.css";
import {useRef,useContext} from "react";
import Axios from "axios"
import { Context } from "../../context/Context";




export default function Login() {
  const emailRef=useRef();
  const passwordRef=useRef();

  const { dispatch, isFetching} = useContext(Context);

      const loginHandler=async (e)=>{
        e.preventDefault();

        dispatch({type:"LOGIN_START"});

        try{
                const res= await Axios.post('http://localhost:3001/api/users/login',{
                  email:emailRef.current.value,
                  password:passwordRef.current.value
                });
                dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        }catch(err){
          dispatch({type:"LOGIN_FAILURE"})
        }
      }


console.log(isFetching);


 const goToRegister =()=>{
  window.location.href = '/register'
 }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={loginHandler}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." ref={emailRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton" onClick={goToRegister} disabled={isFetching}>Register</button>
    </div>
  );
}
