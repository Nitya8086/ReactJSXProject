import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componet/Header";
import Home from './componet/Home';
import LoginPage from "./componet/LoginPage";
import LogOut from "./componet/LogOut";
import "./styles.css";
import SignUPPage from "./componet/SignUPPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/home" element={<Home/>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUPPage />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </BrowserRouter>
  );
}
