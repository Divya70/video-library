import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-cont">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/gellery" className="link">
        Gellery
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/signup" className="link">
        Sign up
      </Link>
    </div>
  );
};

export default Navbar;
