import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css";
import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import{ Home,toastify} from './Home';

const LoginPage = () => {

  const navigate = useNavigate();
 
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleInputChange = (e) => {
    const {id , value} = e.target;
   
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }

  } 
  const loginHandeler = () =>{
    if(password.length <=6){
     toast.error('passward is too short !!')
     return;

    }
    
     toast.success('Login Sucessfully')
      const User = {
        email,
        password
      }
      console.log(User);
      setTimeout(() =>{
        navigate("/home");
      },3000);
    
   }
  
  return(
    <div className="form">
      <ToastContainer/>
        <div className="form-body">
            <div className="username">
                <label className="form__label">Email : </label>
                <input className="form__input" type="email" id="email" placeholder="email"  value={email} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <div className="lastname">
                <label className="form__label">Passward : </label>
                <input  type="password" name="" id="password"  className="form__input"placeholder="passwaod"  value={password} onChange = {(e) => handleInputChange(e)}/>
            </div>
            <button onClick={loginHandeler}>Login</button>
            </div>
          </div>
            );
   };
export default LoginPage;
