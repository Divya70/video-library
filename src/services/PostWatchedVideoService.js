import axios from "axios";
const postWatchedVideoHandler = async (video, dispatch, token) => {
  try {
    const postWatchedvideoResponse = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: { authorization: token },
      }
    );
    if (postWatchedvideoResponse.status === 201) {
      dispatch({
        type: "POST_WATCHLATER_VIDEO",
        payload: postWatchedvideoResponse.data.watchlater,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export { postWatchedVideoHandler };
