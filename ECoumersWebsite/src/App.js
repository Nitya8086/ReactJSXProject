import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";

import Layout from "./component/Layout/Layout";
import Header from "./component/Layout/Header";
function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Layout/>}><Route index element = {<Home/>}/>  
    <Route path="store" element = {<Store/>}/>
    <Route path="about" element = {<About/>}/></Route>
      
   </Routes>
   </BrowserRouter>
 
  );
}

export default App;
