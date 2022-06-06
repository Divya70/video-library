import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./videoscom.css";
import { PlaylistModalCom } from "../PlaylistModalCom/PlaylistModalCom";
function VideosCom({ val }) {
  const [openModal, setOpenModal] = useState(false);
  const opneModalDots = (e) => {
    e.stopPropagation();
    setOpenModal((openModal) => !openModal);
  };
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <Link to={`/singlevideopage/${val._id}`}>
            <img src={val.imgScr} alt="card-image" />
          </Link>
          <div className="video-duration">{val.videoLength}</div>
        </div>
        <div className="card-details">
          <div className="title-cont">
            <Link to={`/singlevideopage/${val._id}`}>
              <div className="thumbnail-image-div">
                <img src={val.channelThumbnail} alt="thumbnail-image" />
              </div>
            </Link>
            <div className="card-title">{val.title}</div>
            <div onClick={opneModalDots}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
              {openModal && <PlaylistModalCom val={val} />}
            </div>
          </div>
          <div className="card-description-cont">
            <div className="card-des">{val.description}</div>
            <div className="views">
              {val.views}views | {val.likes} likes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideosCom;
