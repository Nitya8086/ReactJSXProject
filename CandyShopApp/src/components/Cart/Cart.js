import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CandyContext from '../Store/CandyContext';
import CartItem from './CartItem';

const Cart = props =>{

    const cartCtx = useContext(CandyContext);

    const totalAmount =`₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length>0;
    
    // console.log(cartCtx.items);

    const cartItemAddHandeler = item => {
        cartCtx.addItem({...item,Quantity : 1});
    }
    const cartItemRemoveHandeler =  id =>{
        cartCtx.removeItem(id);

    }

    const CartItems =cartCtx.items.map((item) =>{
    
      
        return( 
        <CartItem
        key = {item.name}
        name ={item.name}
        descriptipn = {item.description}
        price = {item.price}
        Quantity = {item.Quantity}
        onAdd = {cartItemAddHandeler.bind(null,item)}
        onRemove = {cartItemRemoveHandeler.bind(null,item.name)}
        
        />
        )

    });
    return(
        <Modal onClose={props.onClose}>
           <ul> {CartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItem && <button className={classes}>Order</button>}
        </div>
        </Modal>
    );

};
export default Cart;