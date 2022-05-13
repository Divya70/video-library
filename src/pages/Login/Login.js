import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="Login-page-container">
      <h1 className="login-heading">Login</h1>
      <div className="login-cont">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          required
        />
      </div>
      <div className="options">
        <div className="remember-me">
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="forgot-password">
          <Link to="/forgot" className="forgot-pass">
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="submit-button-cont">
        <button className="submit-button">Submit</button>
        <button className="login-guest-credential">
          Login as guest credential
        </button>
      </div>

      <div>
        <div className="new-account-cont">
          Create an Account
          <Link to="/signup" className="signup-button">
            <button>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
