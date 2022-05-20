import axios from "axios";

// Post History Video Code.................
const postHistoryHandler = async (getsingleVideo, dispatch, token) => {
  try {
    const postHistoryResponse = await axios.post(
      "/api/user/history",
      { video: getsingleVideo },
      {
        headers: { authorization: token },
      }
    );
    if (postHistoryResponse.status === 201) {
      dispatch({
        type: "POST_HISTORY",
        payload: postHistoryResponse.data.history,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Errror:", error);
  }
};
export { postHistoryHandler };
