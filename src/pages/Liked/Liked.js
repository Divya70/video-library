import React from "react";
import axios from "axios";
import "./liked.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useVideo } from "../../Context/Video-Context";
import { useAuth } from "../../Context/Auth-Context";
import { useNavigate } from "react-router-dom";
import { deleteLikedVideoHandler } from "../../services/DeleteLikedService";
const Liked = () => {
  const { state, dispatch } = useVideo();
  const { likedVideo } = state;
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const getLikedVideoHandler = async () => {
    try {
      const getLikedResponse = await axios.get("/api/user/likes", {
        headers: { authorization: token },
      });
      if (getLikedResponse.status === 200) {
        dispatch({
          type: "GET_LIKED_VIDEO",
          payload: getLikedResponse.data.likes,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getLikedVideoHandler();
  }, [likedVideo]);

  // Delete Liked Video Code...........
  const callDeleteLikedService = (_id) => {
    deleteLikedVideoHandler(_id, dispatch, token);
  };
  return (
    <>
      <Navbar />
      <div className="liked-card-brand-cont">
        <Sidebar />
        <div className="liked-card-container">
          <h2 className="heading">No of Liked Videos</h2>
          {likedVideo.map((likedItem) => {
            return (
              <>
                <div
                  className="liked-video-cont"
                  key={likedItem._id}
                  likedItem={likedItem}
                >
                  <div
                    className="liked-image-cont"
                    onClick={() =>
                      navigate(`/singlevideopage/${likedItem._id}`)
                    }
                  >
                    <img src={likedItem.imgScr} />
                  </div>
                  <div>
                    <div className="liked-video-title">{likedItem.title}</div>
                    <p className="des">{likedItem.description}</p>
                  </div>
                  <div className="delete-liked-video">
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => callDeleteLikedService(likedItem._id)}
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

export { Liked };
