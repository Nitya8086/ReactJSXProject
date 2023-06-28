import React,{useRef,useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import './CartItem.css';

const CartItem = (props) => {
    let placeholder = 0;
    const Quantity = useRef('');

    const ctx = useContext(CartContext);
    placeholder = placeholder+props.Quantity;

    const removeHandeler = (id) =>{
       ctx.removeItem(id)
    }
  
  return (

 
    <tr>
        <td>
         <span className='cartItem'>
            <img src={props.image} className='cartItemImg'/>
         </span>
         <span>{props.title}</span>
        </td>
        <td>
            <div>{props.price}</div>
        </td>
        <td>
            <div>
                <span>
                    <input type='text' min = {1} ref={Quantity} placeholder ={placeholder} size = "2"/>
                </span>
                <span>
                    <Button onClick={() => removeHandeler(props.id)}>Remove</Button>
                </span>
            </div>
        </td>
    </tr>
  )
}

export default CartItem