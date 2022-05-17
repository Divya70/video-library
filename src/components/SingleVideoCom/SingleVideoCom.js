import { React } from "react";
import ReactPlayer from "react-player/lazy";
import "./singlevideocom.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
const SingleVideoCom = () => {
  const { videoId } = useParams();
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
                muted={true}
                controls={true}
              />
            </div>
            <div className="card-title">Titile should be here</div>
            <div className="card-description">
              <div className="views">112M views</div>
              <div className="like-and-watchlater-cont">
                <div className="likes">
                  <i className="fa-regular fa-thumbs-up"></i> Likes
                </div>
                <div className="watch-later">
                  <i className="fa-regular fa-bookmark"></i> Watch Later
                </div>
                <div className="save-to-playlist">
                  <i className="fa-solid fa-list-check"></i> Save
                </div>
              </div>
            </div>
            <div className="channel-des">
              <div className="thumbnail-image">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLTNtHgVmX114S4cnjoyFaDDJE6N1zNBwKgRNnYNAg=s176-c-k-c0x00ffffff-no-rj"
                  alt="thumbnail"
                />
                <div className="channel-details-cont">
                  <div className="channel-name">Channel Name Ratan Tata</div>
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
