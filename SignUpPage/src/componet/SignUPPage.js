import React,{useRef, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './SignUPPage.css';
import { RotatingLines } from 'react-loader-spinner';

const  SignUPPage = () =>{

    const [isLoading,setIsLoading] = useState(false);


    const nameRef = useRef();
    const emailRef = useRef();
    const passwaodRef = useRef();
    const confPasswordRef = useRef();


    const navigate = useNavigate();
 
    const handleSubmit  = async() => {
       
     setIsLoading(true);
        const name = nameRef.current.value;
        const password = passwaodRef.current.value;
        const email = emailRef.current.value;
        const confirmPassword  =  confPasswordRef.current.value;

        console.log(name);
        if(password != confirmPassword){
            toast.error('passward does not match!!')
            setIsLoading(false);
            return;

        }
       try{

        const User = {
            displayName:name,
            email ,
            password,
            returnSecureToken : true,
        }

        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6dRZPWDv4aOQjv9kv6q0ZJl1BOq2iHgk',User);

        localStorage.setItem('displayName',response.data.displayName)
        localStorage.setItem('email',response.data.email);
        localStorage.setItem('token',response.data.idToken);
        toast.success('Registration Sucess');
        setIsLoading(false);
        console.log("keshav",response);
        navigate('/home');
        
       }
       catch(e){
        toast.error(e.response.data.error.message);
        setIsLoading(false);
         console.log(e.response.data.error);
       }
       
    };



    return(
        <div className="form">
            <ToastContainer/>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" >Name : </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name" ref={nameRef}/>
                </div>
                <div className="email">
                    <label className="form__label">Email : </label>
                    <input  type="email" id="email" className="form__input" placeholder="Email"  ref = {emailRef}/>
                </div>
                <div className="password">
                    <label className="form__label" >Password : </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"  ref={passwaodRef}/>
                </div>
                <div className="confirm-password">
                    <label className="form__label">Confirm Password : </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" ref={confPasswordRef} />
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" className="btn">{isLoading ? <RotatingLines
  strokeColor="black"
  strokeWidth="5"
  animationDuration="0.75"
  width="25px"
  visible={true}
/>: "Register"}</button>
            </div>
            </div>
            );
}

export default SignUPPage;