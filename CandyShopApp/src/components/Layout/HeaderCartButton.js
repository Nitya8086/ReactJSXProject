import React,{useContext} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CandyContext from '../Store/CandyContext';

const HeaderCartButton = (props) =>{

    const cartCtx = useContext(CandyContext);

    const numberOfCartItem =cartCtx.items.reduce((currNumber,item) =>{
        return currNumber+item.Quantity;
    },0); 

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>

};
export default HeaderCartButton;