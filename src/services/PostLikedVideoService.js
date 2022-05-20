import axios from "axios";
const postLikedVideoHandler = async (video, dispatch, token) => {
  try {
    const postLikedvideoResponse = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: { authorization: token },
      }
    );
    if (postLikedvideoResponse.status === 201) {
      dispatch({
        type: "POST_LIKED_VIDEO",
        payload: postLikedvideoResponse.data.likes,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error", error);
  }
};

export { postLikedVideoHandler };
