import React from "react";
import {useState} from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsshow,setCartIsShow] = useState(false);
 

  const showCartHandeler = () =>{
    setCartIsShow(true);
  };

  const hideCartHandeler = () =>{
    setCartIsShow(false);
  };

  return (
    <CartProvider>
     {cartIsshow && <Cart onClose = {hideCartHandeler}/>}
      <Header onShowCart = {showCartHandeler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
