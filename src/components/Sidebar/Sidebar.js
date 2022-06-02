import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <Link to="/videolisting" className="sidebar-item-link">
            <i className="fa-regular fa-compass sidebar-icon"></i> Explore
          </Link>
        </div>

        <div className="sidebar-content">
          <Link to="/playlist" className="sidebar-item-link">
            <i className="fa-solid fa-list-check sidebar-icon"></i> Playlist
          </Link>
        </div>

        <div className="sidebar-content">
          <Link to="/liked" className="sidebar-item-link">
            <i className="fa-solid fa-thumbs-up sidebar-icon"></i> Liked
          </Link>
        </div>

        <div className="sidebar-content">
          <Link to="/watchlater" className="sidebar-item-link">
            <i className="fa-regular fa-bookmark sidebar-icon"></i> Watch Later
          </Link>
        </div>

        <div className="sidebar-content">
          <Link to="/history" className="sidebar-item-link">
            <i className="fa-solid fa-clock-rotate-left sidebar-icon"></i>
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
