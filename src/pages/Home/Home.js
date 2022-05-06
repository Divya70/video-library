import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
const Home = () => {
  return (
    <div className="brand-container">
      <div className="home-image-cont">
        <img src="./images/homeimage.avif" alt="home-image" />
      </div>
      <div className="name-of-site">
        <h1>Jolly Library</h1>
      </div>
      <Navbar />
      <Link to="/gellery" className="explore-button-cont">
        <button>Explore</button>
      </Link>
    </div>
  );
};

export default Home;
