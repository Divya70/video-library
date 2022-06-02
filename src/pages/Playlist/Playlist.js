import { React, useEffect } from "react";
import "./playlist.css";
import axios from "axios";
import { DisplayPlaylistCom } from "../../components/DisplayPlaylistCom/DisplayPlaylistCom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { usePlaylist } from "../../Context/Playlist-Context";
import { useAuth } from "../../Context/Auth-Context";
const Playlist = () => {
  const { playlistState, playlistDispatch } = usePlaylist();

  const {
    authState: { token },
  } = useAuth();
  const getPlaylistHandler = async () => {
    try {
      const getPlaylistResponse = await axios.get("/api/user/playlists", {
        headers: { authorization: token },
      });
      if (getPlaylistResponse.status === 200) {
        playlistDispatch({
          type: "GET_PLAYLIST",
          payload: getPlaylistResponse.data.playlists,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => getPlaylistHandler(), []);
  return (
    <>
      <Navbar />
      <div className="playlist-brand-container">
        <Sidebar />
        <div className="playlist-cont">
          My Playlist: ({playlistState.length ?? 0} PlayList)
          {playlistState.map((playlistItem) => {
            return (
              <DisplayPlaylistCom
                key={playlistItem._id}
                playlistItem={playlistItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Playlist };
