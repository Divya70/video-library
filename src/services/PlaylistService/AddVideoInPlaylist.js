import axios from "axios";
const addVideoInPlaylistHandler = async (
  playlistId,
  video,
  token,
  playlistDispatch
) => {
  try {
    const addVideoInPlaylistResponse = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    if (addVideoInPlaylistResponse.status === 201) {
      playlistDispatch({
        type: "GET_VIDEO_IN_PLAYLIST",
        payload: addVideoInPlaylistResponse.data.playlists,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
export { addVideoInPlaylistHandler };
