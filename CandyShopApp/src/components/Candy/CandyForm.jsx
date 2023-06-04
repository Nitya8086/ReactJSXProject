import React,{useRef,useState,useEffect} from 'react';
import ShowCandys from './ShowCandys';
import classes from './CandyForm.module.css';


const getdata = () =>{

    const data = localStorage.getItem("candys");
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }

};

export default function CandyForm() {

    const [candies,setCandies] = useState(getdata());

    const candyRef = useRef();
    const candyDescription = useRef();
    const candyPrice= useRef();
    const candyQuantity = useRef();

    const submitHandeler = (e) =>{
        e.preventDefault();
        const candy = {
            candyName : candyRef.current.value,
            candyDescription : candyDescription.current.value,
            candyPrice : candyPrice.current.value,
            candyQuantity: candyQuantity.current.value,

        }
        setCandies([...candies,candy]);
        console.log(candies);

        candyRef.current.value='';
        candyDescription.current.value='';
        candyPrice.current.value = '';
        candyQuantity.current.value = '';

    };
    useEffect(()=>{
        localStorage.setItem("candys",JSON.stringify(candies));
    },[candies]);
    // console.log(candies);

  return (
    <div>
        <div className={classes.form}>
        <form onSubmit={submitHandeler}>
            <label>CandyName--</label>
            <input type='text' ref={candyRef} className={classes.style} required/>

            <label>Description--</label>
            <input type='text' ref={candyDescription} required className={classes.style}/>

            <label>Price--</label>
            <input type='number'ref={candyPrice} required className={classes.style}/>

            <label>Quantity--</label>
            <input type='number'ref={candyQuantity} required className={classes.style}/>
          
            <button className={classes.btn}>Add</button>
           
        </form>
        </div>
        <ShowCandys candies = {candies}/>
      
    </div>
  )
}
