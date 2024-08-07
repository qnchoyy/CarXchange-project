import "./Header.css";
import logo from "../../images/image.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarsContext } from "../../context/carsContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { accessToken, setAccessToken } = useContext(CarsContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3030/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setAccessToken(null);
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (error) {
      console.error("Cars Error:", error.message);
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="create">
          <Link to="/create">Create car ad</Link>
        </div>
        <div className="login-register-container">
          {accessToken ? (
            <button onClick={handleLogout}> Logout</button>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
