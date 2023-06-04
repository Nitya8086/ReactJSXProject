
import classes from './Header.module.css';
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/candy.jpg';

const Header = (props) =>{
    return <Fragment>
        
        <header className={classes.header}>
           <h1>Candy Shop</h1>
           
           <HeaderCartButton onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of candy'/>
        </div>
        
    </Fragment>

};
export default Header;