import React from "react";
import axios from "axios";
import "./watchlater.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../Context/Video-Context";
import { useAuth } from "../../Context/Auth-Context";
import { deleteWatchedVideoHandler } from "../../services/DeleteWatchedVideoService";
const WatchLater = () => {
  const { state, dispatch } = useVideo();
  const { watchLaterVideo } = state;
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const getWatchlaterVideoHandler = async () => {
    try {
      const getWatchlaterResponse = await axios.get("/api/user/watchlater", {
        headers: { authorization: token },
      });
      if (getWatchlaterResponse.status === 200) {
        dispatch({
          type: "GET_WATCHLATER_VIDEO",
          payload: getWatchlaterResponse.data.watchlater,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getWatchlaterVideoHandler();
  }, [watchLaterVideo]);

  // Delete Watched Video Code...........
  const callDeleteWatchedVideoHandler = (_id) => {
    deleteWatchedVideoHandler(_id, dispatch, token);
  };
  return (
    <>
      <Navbar />
      <div className="liked-card-brand-cont">
        <Sidebar />
        <div className="liked-card-container">
          <h2 className="heading">Saved Video For Watch Later</h2>
          {watchLaterVideo.map((watchedItem) => {
            return (
              <>
                <div
                  className="liked-video-cont"
                  key={watchedItem._id}
                  watchedItem={watchedItem}
                >
                  <div
                    className="liked-image-cont"
                    onClick={() =>
                      navigate(`/singlevideopage/${watchedItem._id}`)
                    }
                  >
                    <img src={watchedItem.imgScr} />
                  </div>
                  <div>
                    <div className="liked-video-title">{watchedItem.title}</div>
                    <p className="des">{watchedItem.description}</p>
                  </div>
                  <div className="delete-liked-video">
                    <i
                      className="fa-solid fa-trash"
                      onClick={() =>
                        callDeleteWatchedVideoHandler(watchedItem._id)
                      }
                    ></i>
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

export { WatchLater };
