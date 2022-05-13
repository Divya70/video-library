import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <i className="fa-regular fa-compass sidebar-icon"></i> Explore
        </div>
        <div className="sidebar-content">
          <i className="fa-solid fa-list-check sidebar-icon"></i> Playlist
        </div>
        <div className="sidebar-content">
          <i className="fa-solid fa-thumbs-up sidebar-icon"></i> Liked
        </div>

        <div className="sidebar-content">
          <i className="fa-regular fa-clock sidebar-icon"></i>Watch Later
        </div>
        <div className="sidebar-content">
          <i className="fa-solid fa-clock-rotate-left sidebar-icon"></i> History
        </div>
      </div>
    </>
  );
};

export default Sidebar;
