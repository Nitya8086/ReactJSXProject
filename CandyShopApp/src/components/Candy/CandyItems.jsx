import React, {useContext } from 'react'
import classes from './CandyItems.module.css';
import CandyContext from '../Store/CandyContext';

export default function CandyItems(props) {

    const cartCtx = useContext(CandyContext);

    const addItem = (Quantity) =>{
        cartCtx.addItem({
            id  : props.candyName,
            name : props.candyName,
            description : props.candyDescription,
            price : +props.candyPrice,
           Quantity :+Quantity,

        });
        
    };

    const buyOneHandeler = () =>{
       addItem(1);
      

    };
    const buyTwoHandeler = () =>{
        addItem(2);
       

    };

    const buyThreeHandeler = () =>{
        addItem(3);
      
    };
   
    
    // console.log(props);
  return (
    
   
    <tr className={classes.table}>
        <td>{props.candyName}</td>
        <td>{props.candyDescription}</td>
        <td>{props.candyPrice}</td>
        <td>{props.candyQuantity}</td>
        <td> 
         <button onClick={buyOneHandeler} className={classes.button1}>Buy1</button>
        <button onClick={buyTwoHandeler} className={classes.button2}>Buy2</button>
        <button onClick={buyThreeHandeler} className={classes.button3}>Buy3</button>
        </td>

    </tr>
   
    
        
      

  )
}
