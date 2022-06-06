import { createContext, useContext, useReducer } from "react";
import { playlistReduce } from "../Reducer/Playlist-Reducer";
const PlaylistContext = createContext();
const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReduce, []);
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};
const usePlaylist = () => useContext(PlaylistContext);
export { PlaylistProvider, usePlaylist };
