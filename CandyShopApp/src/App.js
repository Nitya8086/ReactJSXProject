import React ,{useState}from 'react';
import Header from "./components/Layout/Header";
import CandyHome from './components/Candy/CandyHome';
import CandyProvider from './components/Store/CandyProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShow,setCartIsShow] = useState(false);

  const showCartHandeler = () =>{
    setCartIsShow(true);
  }
  const hideCartHandeler = () =>{
    setCartIsShow(false);
  }
  return (
   <CandyProvider>
    {cartIsShow && <Cart onClose = {hideCartHandeler}/>}
     <Header onShowCart = {showCartHandeler}/>
     <main>
      <CandyHome/>
     </main>

     </CandyProvider>
  );
}

export default App;
