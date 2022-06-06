import { React, useEffect } from "react";
import "./history.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useVideo } from "../../Context/Video-Context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/Auth-Context";
const History = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useVideo();
  const { historyVideo } = state;
  const {
    authState: { token },
  } = useAuth();

  // Get History Video Code...............
  const getHistoryHandler = async () => {
    try {
      const getHistoryResponse = await axios.get("/api/user/history", {
        headers: { authorization: token },
      });
      if (getHistoryResponse.status === 200) {
        dispatch({
          type: "GET_HISTORY",
          payload: getHistoryResponse.data.history,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Errror:", error);
    }
  };

  useEffect(() => {
    getHistoryHandler();
  }, [historyVideo]);

  // delete history Code....................
  const deleteHistoryHandler = async (_id) => {
    try {
      const deleteHistoryResponse = await axios.delete(
        `/api/user/history/${_id}`,
        {
          headers: { authorization: token },
        }
      );
      dispatch({
        type: "DELETE_HISTORY",
        payload: deleteHistoryResponse.data.history,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Delete All History Code.............

  const deleteAllHistoryHandler = async () => {
    try {
      const deleteAllHistoryResponse = await axios.delete(
        "/api/user/history/all",
        {
          headers: { authorization: token },
        }
      );
      dispatch({
        type: "CLEAR_ALL_HISTORY",
        payload: deleteAllHistoryResponse.data.history,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="history-card-brand-cont">
        <Sidebar />
        <div>
          <div>
            <h2 className="heading">History Videos</h2>
            <button
              className="clear-all-history-btn"
              onClick={deleteAllHistoryHandler}
            >
              Clear All History
            </button>
          </div>

          {historyVideo.map((item) => {
            return (
              <>
                <div className="history-card-container" key={item._id}>
                  <div className="history-video-cont">
                    <div
                      className="history-image-cont"
                      onClick={() => navigate(`/singlevideopage/${item._id}`)}
                    >
                      <img src={item.imgScr} />
                    </div>
                    <div>
                      <div className="history-video-title">{item.title}</div>
                      <p className="des">{item.description}</p>
                    </div>
                    <div className="delete-history-video">
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => deleteHistoryHandler(item._id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { History };
