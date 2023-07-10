import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componet/Header";
import Home from './componet/Home';
import LoginPage from "./componet/LoginPage";

import "./styles.css";
import SignUPPage from "./componet/SignUPPage";

export default function App() {
  const auth = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/home" element={<Home/>} />
     <Route path="/" element={ auth ? <Home/>: <LoginPage /> } />
        <Route path="/signup" element={auth ? <Home/>: <SignUPPage />} />
      </Routes>
    </BrowserRouter>
  );
}
