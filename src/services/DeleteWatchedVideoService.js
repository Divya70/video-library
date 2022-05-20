import axios from "axios";
const deleteWatchedVideoHandler = async (_id, dispatch, token) => {
  try {
    const deleteWatchedVideoResponse = await axios.delete(
      `/api/user/watchlater/${_id}`,
      {
        headers: { authorization: token },
      }
    );
    dispatch({
      type: "DELETE_WATCHLATER_VIDEO",
      payload: deleteWatchedVideoResponse.data.watchlater,
    });
  } catch (error) {
    console.log("Error:", error);
  }
};
export { deleteWatchedVideoHandler };
