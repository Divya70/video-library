import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../Context/Auth-Context";
import "./home.css";
const Home = () => {
  const { authState } = useAuth();
  return (
    <div className="brand-container">
      <div className="home-image-cont">
        <img src="./images/homeimage.avif" alt="home-image" />
      </div>

      <Navbar />
      {authState.token === null ? (
        alert("please Login")
      ) : (
        <Link to="/videolisting" className="explore-button-cont">
          <button>Explore</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
