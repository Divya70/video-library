import axios from "axios";
const removeVideoFromPlaylistHandler = async (
  playlistId,
  videoId,
  token,
  playlistDispatch
) => {
  try {
    const removeVideoFromPlaylistResponse = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization: token },
      }
    );
    if (removeVideoFromPlaylistResponse.status === 200) {
      playlistDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: removeVideoFromPlaylistResponse.data.playlists,
      });
    }
  } catch (removeVideoFromPlaylistResponse) {
    console.log("Error:", removeVideoFromPlaylistResponse);
  }
};
export { removeVideoFromPlaylistHandler };
