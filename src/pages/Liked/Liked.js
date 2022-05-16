import React from "react";
import "./liked.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
const Liked = () => {
  return (
    <>
      <Navbar />
      <div className="liked-card-brand-cont">
        <Sidebar />
        <div className="liked-card-container">
          <h2 className="heading">No of Liked Videos</h2>
          <div className="liked-video-cont">
            <div className="liked-image-cont">
              <img src="https://img.youtube.com/vi/5Eqb_-j3FDA/sddefault.jpg" />
            </div>
            <div>
              <div className="liked-video-title">
                Title of liked videossss gjgh
              </div>
              <p className="des">description</p>
            </div>
            <div className="delete-liked-video">
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Liked };
