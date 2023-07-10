import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css";
import React,{useRef, useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner'

const LoginPage = () => {


  const navigate = useNavigate();

  const [isLoading ,setIsLoading] = useState(false);

  const emailRef = useRef();
  const passwardRef = useRef();

 

  const loginHandeler = async() =>{
    setIsLoading(true);  
    const email = emailRef.current.value;
    const password = passwardRef.current.value;
    if(password.length <=6){
     toast.error('passward is too short !!')
     setIsLoading(false);
     return;

    }
    
    try{

      const User = {
        email,
        password,
        returnSecureToken : true,
      }
   
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6dRZPWDv4aOQjv9kv6q0ZJl1BOq2iHgk',User);

      console.log(response);
      localStorage.setItem('email',response.data.email );
      localStorage.setItem('token',response.data.idToken);
      localStorage.setItem('displayName',response.data.displayName);
      navigate('/home');

      toast.success('login sucessfull');

      setIsLoading(false);

    }
    catch(e){
      toast.error(e.response.data.error.message);
      setIsLoading(false);
      

    }
    
   }
  
  return(
    <div className="form">
      <ToastContainer/>
        <div className="form-body">
            <div className="username">
                <label className="form__label">Email : </label>
                <input className="form__input" type="email" id="email" placeholder="email" ref={emailRef}/>
            </div>
            <div className="lastname">
                <label className="form__label">Passward : </label>
                <input  type="password" name="" id="password"  className="form__input"placeholder="passwaod" ref={passwardRef}/>
            </div>
            <button onClick={loginHandeler}>{isLoading ? <RotatingLines
  strokeColor="black"
  strokeWidth="5"
  animationDuration="0.75"
  width="25px"
  visible={true}
/>: "Login"}</button>
            </div>
          </div>
            );
   };
export default LoginPage;
