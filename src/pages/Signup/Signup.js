import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-heading">SIGN UP</h1>
      <div className="signup-details-cont">
        <input type="text" placeholder="Enter Your First Name" />
        <input type="text" placeholder="Enter Your Last Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
      </div>
      <Link to="/login" className="signup-btn">
        <button>Signup</button>
      </Link>
      <div className="already-have-account">
        Alreadt have an account?
        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
