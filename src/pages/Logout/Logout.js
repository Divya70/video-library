import React from "react";
import "./logout.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Logout = () => {
  return (
    <>
      <Navbar />
      <div className="logout-cont">You are logged out👲🏼</div>
      <Link to="/login">
        <button className="login-again-btn">Login</button>
      </Link>
    </>
  );
};

export { Logout };
