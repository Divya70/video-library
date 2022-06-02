import axios from "axios";
const removePlaylistHandler = async (playlistId, token, playlistDispatch) => {
  try {
    const removePlaylistResponse = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      {
        headers: { authorization: token },
      }
    );
    playlistDispatch({
      type: "REMOVE_PLAYLIST",
      payload: removePlaylistResponse.data.playlists,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
export { removePlaylistHandler };
