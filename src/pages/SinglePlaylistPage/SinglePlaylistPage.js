import { React, useState, useEffect } from "react";
import "./singleplaylistpage.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { PlaylistCom } from "../../components/PlaylistCom/PlaylistCom";
import { useAuth } from "../../Context/Auth-Context";
import { usePlaylist } from "../../Context/Playlist-Context";
import { removePlaylistHandler } from "../../services/PlaylistService/RemovePlaylistservice";
import { getVideoFromPlaylistHandler } from "../../services/PlaylistService/GetVideoFromPlaylist";
const SinglePlaylistPage = () => {
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [getVideo, setGetVideo] = useState(null);
  const [flag, setFlag] = useState(false);
  useEffect(
    () => getVideoFromPlaylistHandler(playlistId, token, setGetVideo),
    [flag]
  );

  const callRemovePlaylistHandler = () => {
    removePlaylistHandler(playlistId, token, playlistDispatch);
  };
  return (
    <>
      <Navbar />
      <div className="single-playlist-brand-cont">
        <Sidebar />
        <div>
          <h2 className="heading">Videos In Playlist</h2>
          <button
            className="delete-playlist"
            onClick={callRemovePlaylistHandler}
          >
            Delete
          </button>
        </div>
        <div>
          {!!getVideo?.videos.length &&
            getVideo?.videos?.map((item) => (
              <PlaylistCom
                key={item._id}
                item={item}
                playlistId={playlistId}
                setFlag={setFlag}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export { SinglePlaylistPage };
