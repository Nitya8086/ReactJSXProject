import React,{useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './SignUPPage.css';

const  SignUPPage = () =>{

    const emailRef = useRef();
    const passwaodRef = useRef();
    const confPasswordRef = useRef();


    const navigate = useNavigate();
 
    const handleSubmit  = () => {

        const password = passwaodRef.current.value;
        const email = emailRef.current.value;
        const confirmPassword  =  confPasswordRef.current.value;

        if(password != confirmPassword){
            toast.error('passward is too short !!')
            return;

        }
        else{
            const User = {
                email ,
                password
               
            }
            toast.success('Account creating Sucessfully')
            
            console.log(User);
            console.log('Account creating Sucessfully');
            setTimeout(() =>{
                navigate("/home");
            },3000);
           
        }
       
    }



    return(
        <div className="form">
            <ToastContainer/>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" >Name : </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
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
                <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
            </div>
            </div>
            );
}

export default SignUPPage;