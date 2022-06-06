import React from "react";
import "./playlistcom.css";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../Context/Playlist-Context";
import { useAuth } from "../../Context/Auth-Context";
import { removeVideoFromPlaylistHandler } from "../../services/PlaylistService/RemoveVideoFromPlaylist";
const PlaylistCom = ({ item, playlistId, setFlag }) => {
  const navigate = useNavigate();
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuth();

  const callRemoveVideoFromPlaylist = () => {
    removeVideoFromPlaylistHandler(
      playlistId,
      item._id,
      token,
      playlistDispatch
    );
  };
  return (
    <>
      <div className="playlist-card-container">
        <div className="playlist-video-cont">
          <div
            className="playlist-image-cont"
            onClick={() => navigate(`/singlevideopage/${item._id}`)}
          >
            <img src={item.imgScr} />
          </div>
          <div className="video-title-wrapper">
            <div className="playlist-video-title">{item.title}</div>
            <p className="des">{item.description}</p>
          </div>
          <div
            className="delete-playlist-video"
            onClick={() => {
              callRemoveVideoFromPlaylist(item._id);
              setFlag((prev) => !prev);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export { PlaylistCom };
