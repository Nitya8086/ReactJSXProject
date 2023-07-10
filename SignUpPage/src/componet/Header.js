import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  const logoutHandelere = () =>{
  
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('displayName');
    navigate('/');
  }
  const auth = localStorage.getItem('token');
  const displayName = localStorage.getItem('displayName');

 
  return (
    <div className="header">
      <Link to="/home">Home</Link>
     {!auth &&  <Link to="/">LoginPage</Link>}
   { !auth &&  <Link to="/signup">SignUPPage</Link>}
   <div>{displayName}</div>
      <div>
       {auth && <button onClick={logoutHandelere} className="logout">Logout</button>}
      </div>
    </div>
  );
};
export default Header;
