import axios from "axios";
const addPlaylistHandler = async (playlistName, playlistDispatch, token) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist: { name: playlistName, videos: [] } },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_PLAYLIST",
        payload: response.data.playlists,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
export { addPlaylistHandler };
