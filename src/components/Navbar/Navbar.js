import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-brand-cont">
        <div className="name-of-site">
          <h1>Jolly Library</h1>
        </div>
        <div className="searchbar-cont">
          <input className="search-input" type="text" placeholder="Search..." />
        </div>
        <div className="navbar-cont">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/videolisting" className="link">
            Gellery
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
