import axios from "axios";
const deleteLikedVideoHandler = async (_id, dispatch, token) => {
  try {
    const deleteLikedVideoResponse = await axios.delete(
      `/api/user/likes/${_id}`,
      {
        headers: { authorization: token },
      }
    );
    dispatch({
      type: "DELETE_LIKED_VIDEO",
      payload: deleteLikedVideoResponse.data.likes,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
export { deleteLikedVideoHandler };
