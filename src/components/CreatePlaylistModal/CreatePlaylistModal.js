import { React, useState, Fragment } from "react";

import "./createplaylistmodal.css";
import { useVideo } from "../../Context/Video-Context";
import { useAuth } from "../../Context/Auth-Context";
import { useParams } from "react-router-dom";
import { postWatchedVideoHandler } from "../../services/PostWatchedVideoService";
import { deleteWatchedVideoHandler } from "../../services/DeleteWatchedVideoService";
import { usePlaylist } from "../../Context/Playlist-Context";
import { addPlaylistHandler } from "../../services/PlaylistService/AddPlaylistService";
import { addVideoInPlaylistHandler } from "../../services/PlaylistService/AddVideoInPlaylist";
import { removeVideoFromPlaylistHandler } from "../../services/PlaylistService/RemoveVideoFromPlaylist";
const CreatePlaylistModal = ({ createItem }) => {
  const { state, dispatch } = useVideo();
  const { watchLaterVideo } = state;
  const { playlistState, playlistDispatch } = usePlaylist();
  const { videoId } = useParams();
  const {
    authState: { token },
  } = useAuth();
  const callPostWatchedVideoHandler = () => {
    postWatchedVideoHandler(createItem, dispatch, token);
  };
  const callDeleteWatchedService = () => {
    deleteWatchedVideoHandler(createItem._id, dispatch, token);
  };

  const [createNewPlaylist, setCreateNewPlaylist] = useState("");
  const getInputHandler = (e) => {
    setCreateNewPlaylist(e.target.value);
  };
  const checkPlaylistName = (playlistName) => {
    if (
      playlistState.find(
        (createPlaylistItem) =>
          createPlaylistItem.name.toLowerCase() === playlistName.toLowerCase()
      )
    ) {
      alert("Same Name Exist in Playlist");
    } else if (playlistName === "") {
      alert("Playlist Name is required");
    } else {
      return true;
    }
  };

  const checkIfVideoInPlaylist = (playlistId) => {
    const findPlaylist = playlistState.find((item) => item._id === playlistId);
    return findPlaylist.videos.some((item) => item._id === createItem._id);
  };

  const callAddVideoInPlaylist = (playlistId) => {
    if (checkIfVideoInPlaylist(playlistId)) {
      removeVideoFromPlaylistHandler(
        playlistId,
        createItem._id,
        token,
        playlistDispatch
      );
    } else {
      addVideoInPlaylistHandler(
        playlistId,
        createItem,
        token,
        playlistDispatch
      );
    }
  };
  const createPlaylistHandler = async () => {
    const isPlaylistExist = checkPlaylistName(createNewPlaylist);
    if (isPlaylistExist) {
      await addPlaylistHandler(createNewPlaylist, playlistDispatch, token);
      setCreateNewPlaylist("");
    }
    setCreateNewPlaylist("");
  };

  return (
    <>
      <div className="create-playlist-modal-main">
        <div className="title-container">
          <div>Create Playlist...</div>
          <div>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="watchlater-main">
          {watchLaterVideo.find((item) => item._id === createItem._id) ? (
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
          <div className="watchlater-checkbox content">
            <ol>
              {playlistState.map((playlist) => {
                return (
                  <Fragment key={playlist._id}>
                    <div className="create-playlist-box">
                      <label htmlFor={playlist._id} className="content-list">
                        <input
                          type="checkbox"
                          className="input-data"
                          checked={checkIfVideoInPlaylist(playlist._id)}
                          onChange={() => callAddVideoInPlaylist(playlist._id)}
                        />

                        {playlist.name}
                      </label>
                    </div>
                  </Fragment>
                );
              })}
            </ol>
          </div>

          <div className="create-playlist-cont">
            <input
              type="text"
              id="text"
              value={createNewPlaylist}
              placeholder="Enter Playlist Name"
              className="playlist-input"
              onChange={getInputHandler}
            />
          </div>
          <button
            className="create-playlist-button"
            onClick={createPlaylistHandler}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};
export { CreatePlaylistModal };
