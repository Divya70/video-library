import { React, useEffect } from "react";
import axios from "axios";
import { useVideo } from "../../Context/Video-Context";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideosCom from "../../components/VideosCom/VideosCom";
import VideoCategory from "../../components/VideoCategory/VideoCategory";
import { getFilterVideos } from "../../utils/filterVideoCategory";
import "./videolisting.css";
function VideoListing() {
  const { state, dispatch } = useVideo();
  const { initialVideo } = state;
  const getVideoData = async () => {
    const videoResponse = await axios.get("/api/videos");
    dispatch({ type: "FETCH_VIDEO_DATA", payload: videoResponse.data.videos });
  };
  useEffect(() => {
    getVideoData();
  }, []);

  const categoriesData = getFilterVideos(state, initialVideo);
  return (
    <>
      <Navbar />
      <div className="product-brand-container">
        <Sidebar />
        <div className="video-products-container">
          <VideoCategory />
          {categoriesData.map((val) => {
            return <VideosCom key={val._id} val={val} />;
          })}
        </div>
      </div>
    </>
  );
}

export default VideoListing;
