import React from "react";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
const Login = () => {
  const { authDispatch } = useAuth();
  const navigateVideoListing = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const getLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginWithGuestCrendential = {
    email: "divyanamdev123@gmail.com",
    password: "divyanamdev@123",
  };

  const guestCredentialHandler = (e) => {
    e.preventDefault();
    setLoginData(loginWithGuestCrendential);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post("/api/auth/login", {
        email: loginData.email,
        password: loginData.password,
      });
      console.log(loginData.email, loginData.password);
      if (loginResponse.status === 200) {
        localStorage.setItem("token", loginResponse.data.encodedToken);
        localStorage.setItem(
          "user",
          JSON.stringify(loginResponse.data.foundUser)
        );
        navigateVideoListing("/videolisting");
        authDispatch({
          type: "LOG_IN",
          token: loginResponse.data.encodedToken,
          user: loginResponse.data.foundUser,
        });
      } else {
        alert("Please Enter Correct email and Password");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Login-page-container">
        <h1 className="login-heading">Login</h1>
        <div className="login-cont">
          <input
            type="text"
            name="email"
            id="email"
            value={loginData.email}
            placeholder="Enter Your Email"
            onChange={getLoginData}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={loginData.password}
            placeholder="Enter Your Password"
            onChange={getLoginData}
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
          <button className="submit-button" onClick={loginHandler}>
            Submit
          </button>
          <button
            className="login-guest-credential"
            onClick={guestCredentialHandler}
          >
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
    </>
  );
};

export default Login;
