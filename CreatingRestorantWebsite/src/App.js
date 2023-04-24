import React from "react";
import {Fragment,useState} from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsshow,setCartIsShow] = useState(false);
 

  const showCartHandeler = () =>{
    setCartIsShow(true);
  };

  const hideCartHandeler = () =>{
    setCartIsShow(false);
  };

  return (
    <Fragment>
     {cartIsshow && <Cart onClose = {hideCartHandeler}/>}
      <Header onShowCart = {showCartHandeler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
