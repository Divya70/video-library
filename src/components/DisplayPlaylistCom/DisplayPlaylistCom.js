import React from "react";
import "./displayplaylistcom.css";
import { useNavigate } from "react-router-dom";
const DisplayPlaylistCom = ({ playlistItem }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="display-playlist-brand-cont">
        <div
          className="displayl-playlist-main"
          onClick={() => navigate(`/playlist/${playlistItem._id}`)}
        >
          <div className="playlist-title">{playlistItem.name}</div>
          <div>{playlistItem.length ?? 0}</div>
        </div>
      </div>
    </>
  );
};

export { DisplayPlaylistCom };
