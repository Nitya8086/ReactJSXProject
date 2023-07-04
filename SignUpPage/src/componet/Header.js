import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/">LoginPage</Link>
      <Link to="/signup">SignUPPage</Link>
      <Link to="logout">LogOut</Link>
    </div>
  );
};
export default Header;
