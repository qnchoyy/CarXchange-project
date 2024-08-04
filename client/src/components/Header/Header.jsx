import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div>
          <Link to="/create">Create</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
}
