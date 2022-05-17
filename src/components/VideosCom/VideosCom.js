import React from "react";
import { Link } from "react-router-dom";
import "./videoscom.css";
import { useParams } from "react-router-dom";
function VideosCom({
  val: {
    imgScr,
    title,
    videoLength,
    channelThumbnail,
    description,
    likes,
    views,
    _id,
  },
}) {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <Link to={`/singlevideopage/${_id}`}>
            <img src={imgScr} alt="card-image" />
          </Link>
          <div className="video-duration">{videoLength}</div>
        </div>
        <div className="card-details">
          <div className="title-cont">
            <Link to={`/singlevideopage/${_id}`}>
              <div className="thumbnail-image-div">
                <img src={channelThumbnail} alt="thumbnail-image" />
              </div>
            </Link>
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
