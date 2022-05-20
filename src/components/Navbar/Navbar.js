import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";
const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  return (
    <>
      <div className="navbar-brand-cont">
        <div className="name-of-site">
          <h1>Jolly Library</h1>
        </div>
        <div className="searchbar-cont">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
          />
        </div>
        <div className="navbar-cont">
          <Link to="/" className="link">
            Home
          </Link>
          {authState.token === null ? (
            <Link to="/login" className="link">
              Login
            </Link>
          ) : (
            <Link
              to="/login"
              className="link"
              onClick={() => authDispatch({ type: "LOG_OUT" })}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
