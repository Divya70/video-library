import axios from "axios";
const getVideoFromPlaylistHandler = async (playlistId, token, setGetVideo) => {
  try {
    const getVideoFromPlaylistResponse = await axios.get(
      `/api/user/playlists/${playlistId}`,
      {
        headers: { authorization: token },
      }
    );
    if (getVideoFromPlaylistResponse.status === 200) {
      setGetVideo(getVideoFromPlaylistResponse.data.playlist);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
export { getVideoFromPlaylistHandler };
