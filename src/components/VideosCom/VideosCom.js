import React from "react";
import "./videoscom.css";
function VideosCom({
  val: {
    imgScr,
    title,
    videoLength,
    channelThumbnail,
    description,
    likes,
    views,
  },
}) {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={imgScr} alt="card-image" />
          <div className="video-duration">{videoLength}</div>
        </div>
        <div className="card-details">
          <div className="title-cont">
            <div className="thumbnail-image-div">
              <img src={channelThumbnail} alt="thumbnail-image" />
            </div>
            <div className="card-title">{title}</div>
            <div>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="card-description-cont">
            <div className="card-des">{description}</div>
            <div className="views">
              {views}views | {likes} likes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideosCom;
