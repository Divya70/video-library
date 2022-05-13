import React from "react";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";
import { useState } from "react";
const Signup = () => {
  const { authDispatch } = useAuth();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const navigateLogin = useNavigate();
  const getSignupData = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      if (signupData.password === signupData.confirmpassword) {
        const signupResponse = await axios.post("/api/auth/signup", {
          email: signupData.email,
          password: signupData.password,
        });
        authDispatch({
          type: "SIGN_UP",
          payload: {
            token: signupResponse.data.encodedToken,
            user: signupResponse.data.createdUser,
          },
        });
        if (signupResponse.status === 201) {
          localStorage.setItem("token", signupResponse.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(signupResponse.data.createdUser)
          );
          navigateLogin("/login");
        }
      } else {
        alert("PassWord Do Not Match , Please Try Again !");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-container">
      <h1 className="signup-heading">SIGN UP</h1>
      <div className="signup-details-cont">
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          value={signupData.name}
          onChange={getSignupData}
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          value={signupData.email}
          onChange={getSignupData}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          id="password"
          value={signupData.password}
          onChange={getSignupData}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
          value={signupData.confirmpassword}
          onChange={getSignupData}
          required
        />
      </div>
      <button onClick={signupHandler} className="signup-btn">
        Signup
      </button>
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
