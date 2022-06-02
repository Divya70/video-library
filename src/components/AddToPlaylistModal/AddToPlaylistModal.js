import { React, useState } from "react";
import "./addtoplaylistmodal.css";
import { useVideo } from "../../Context/Video-Context";
import { useAuth } from "../../Context/Auth-Context";
import { useParams } from "react-router-dom";
import { postWatchedVideoHandler } from "../../services/PostWatchedVideoService";
import { deleteWatchedVideoHandler } from "../../services/DeleteWatchedVideoService";
import { CreatePlaylistModal } from "../../components/CreatePlaylistModal/CreatePlaylistModal";
const AddToPlaylistModal = ({ item }) => {
  const { state, dispatch } = useVideo();
  const { watchLaterVideo } = state;
  const { videoId } = useParams();
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const {
    authState: { token },
  } = useAuth();

  const callPostWatchedVideoHandler = () => {
    postWatchedVideoHandler(item, dispatch, token);
  };
  const callDeleteWatchedService = () => {
    deleteWatchedVideoHandler(getsingleVideo._id, dispatch, token);
  };
  return (
    <>
      <div className="add-to-playlist-modal-main">
        <div className="title-container-main">
          <div>Save Video in Playlist...</div>
          <div>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="watchlater-main">
          {watchLaterVideo.find((item) => item._id === videoId) ? (
            <div
              className="watchlater-checkbox"
              onClick={() => callDeleteWatchedService()}
            >
              <input type="checkbox" id="watchlater" className="add-icon" />
              <label htmlFor="watchlater">saved for Watch Later</label>
            </div>
          ) : (
            <div
              className="watchlater-checkbox"
              onClick={() => callPostWatchedVideoHandler()}
            >
              <input type="checkbox" id="watchlater" className="add-icon" />
              <label htmlFor="watchlater">Watch Later</label>
            </div>
          )}

          <div
            className="create-playlist-cont"
            onClick={(e) => {
              e.stopPropagation();
              setOpenCreatePlaylist(true);
            }}
          >
            <i className="fa-solid fa-plus add-icon"></i> Create New Playlist
            {openCreatePlaylist && (
              <CreatePlaylistModal
                createItem={item}
                setOpenCreatePlaylist={setOpenCreatePlaylist}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { AddToPlaylistModal };
