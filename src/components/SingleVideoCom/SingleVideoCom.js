import { React } from "react";
import ReactPlayer from "react-player/lazy";
import "./singlevideocom.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { postHistoryHandler } from "../../services/PostHistory";
import { postLikedVideoHandler } from "../../services/PostLikedVideoService";
import { postWatchedVideoHandler } from "../../services/PostWatchedVideoService";
import { useState } from "react";
import { getSingleVideoPage } from "../../services/SingleVideoService";
import { useVideo } from "../../Context/Video-Context";
import { useEffect } from "react";
import { useAuth } from "../../Context/Auth-Context";
import { deleteLikedVideoHandler } from "../../services/DeleteLikedService";
import { deleteWatchedVideoHandler } from "../../services/DeleteWatchedVideoService";
const SingleVideoCom = () => {
  const { state, dispatch } = useVideo();
  const [getsingleVideo, setGetSingleVideo] = useState();
  const { videoId } = useParams();
  const { likedVideo } = state;
  const { watchLaterVideo } = state;
  const {
    authState: { token },
  } = useAuth();

  const callPostHistoryHandler = () => {
    postHistoryHandler(getsingleVideo, dispatch, token);
  };
  const callPostLikedVideoHandler = () => {
    postLikedVideoHandler(getsingleVideo, dispatch, token);
  };
  const callPostWatchedVideoHandler = () => {
    postWatchedVideoHandler(getsingleVideo, dispatch, token);
  };
  const callDeleteLikedService = () => {
    deleteLikedVideoHandler(getsingleVideo._id, dispatch, token);
  };
  const callDeleteWatchedService = () => {
    deleteWatchedVideoHandler(getsingleVideo._id, dispatch, token);
  };
  useEffect(() => getSingleVideoPage(videoId, setGetSingleVideo), []);

  return (
    <>
      <div>
        <Navbar />
        <div className="single-video-brand-cont">
          <Sidebar />
          <div className="single-video-main-container">
            <div className="image-cont">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${videoId}`}
                playing={false}
                muted={false}
                controls={true}
                onStart={() => callPostHistoryHandler()}
              />
            </div>
            <div className="card-title">title</div>
            <div className="card-description">
              <div className="views">12M views</div>
              <div className="like-and-watchlater-cont">
                {likedVideo.find((item) => item._id === videoId) ? (
                  <div
                    className="likes"
                    onClick={() => callDeleteLikedService()}
                  >
                    <i className="fa-solid fa-thumbs-up"></i> Liked
                  </div>
                ) : (
                  <div
                    className="likes"
                    onClick={() => callPostLikedVideoHandler()}
                  >
                    <i className="fa-regular fa-thumbs-up"></i> Like
                  </div>
                )}
                {watchLaterVideo.find(
                  (itemWatched) => itemWatched._id === videoId
                ) ? (
                  <div
                    className="watch-later"
                    onClick={() => callDeleteWatchedService()}
                  >
                    <i className="fa-solid fa-bookmark"></i> Saved for Watch
                    Later
                  </div>
                ) : (
                  <div
                    className="watch-later"
                    onClick={() => callPostWatchedVideoHandler()}
                  >
                    <i className="fa-regular fa-bookmark"></i> Watch Later
                  </div>
                )}

                <div className="save-to-playlist">
                  <i className="fa-solid fa-list-check"></i> Save
                </div>
              </div>
            </div>
            <div className="channel-des">
              <div className="thumbnail-image">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLRIAxfOELSmTu4aAHogiNagKGK-g7xlbE8zR_OT518=s176-c-k-c0x00ffffff-no-rj"
                  alt="thumbnail"
                />
                <div className="channel-details-cont">
                  <div className="channel-name">Channel Name </div>
                  <p className="subscribers">512K Subscriber</p>
                </div>
              </div>

              <div className="video-description">
                Sing along to the soulful Channa Mereya. Lyrics have been
                beautifully crafted by Amitabh Bhattacharya and the song has
                been brought to life by none other than Pritam. Arijit Singh has
                voiced the track and the video stars Ranbir Kapoor and Anushka
                Sharma.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleVideoCom };
