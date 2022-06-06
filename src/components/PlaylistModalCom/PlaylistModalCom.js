import { React, useState } from "react";
import "./playlistmodalcom.css";
import { useVideo } from "../../Context/Video-Context";
import { useAuth } from "../../Context/Auth-Context";
import { useParams } from "react-router-dom";
import { postWatchedVideoHandler } from "../../services/PostWatchedVideoService";
import { deleteWatchedVideoHandler } from "../../services/DeleteWatchedVideoService";
import { AddToPlaylistModal } from "../AddToPlaylistModal/AddToPlaylistModal";
const PlaylistModalCom = ({ val }) => {
  const { state, dispatch } = useVideo();
  const { watchLaterVideo } = state;
  const { videoId } = useParams();
  const {
    authState: { token },
  } = useAuth();
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const callPostWatchedVideoHandler = () => {
    postWatchedVideoHandler(val, dispatch, token);
  };
  const callDeleteWatchedService = () => {
    deleteWatchedVideoHandler(getsingleVideo._id, dispatch, token);
  };
  return (
    <>
      <div className="playlist-modal-cont">
        {watchLaterVideo.find((watch) => watch._id === videoId) ? (
          <div
            className="watchlater-modal hover-on-text"
            onClick={() => callDeleteWatchedService()}
          >
            <i className="fa-solid fa-bookmark icon"></i> Watched Later
          </div>
        ) : (
          <div
            className="watchlater-modal hover-on-text"
            onClick={() => callPostWatchedVideoHandler()}
          >
            <i className="fa-regular fa-bookmark icon"></i> Watch Later
          </div>
        )}

        <div
          className="add-to-playlist-modal hover-on-text"
          onClick={(e) => {
            e.stopPropagation();
            setOpenPlaylistModal(true);
          }}
        >
          <i
            className="fa-regular fa-plus icon"
            style={{ fontWeight: "900" }}
          ></i>
          Add to Playlist
        </div>
        {openPlaylistModal && <AddToPlaylistModal item={val} />}
      </div>
    </>
  );
};

export { PlaylistModalCom };
