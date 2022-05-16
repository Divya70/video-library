import React from "react";
import "./videocategory.css";
import { useVideo } from "../../Context/Video-Context";
const VideoCategory = () => {
  const { dispatch } = useVideo();
  return (
    <>
      <div className="fruit-category-container">
        <button onClick={() => dispatch({ type: "ALL" })}>All</button>
        <button onClick={() => dispatch({ type: "FASHION" })}>Fashion</button>
        <button onClick={() => dispatch({ type: "STUDY" })}>Study</button>
        <button onClick={() => dispatch({ type: "MUSIC" })}>Music</button>
        <button onClick={() => dispatch({ type: "COMEDY" })}>Comedy</button>
      </div>
    </>
  );
};

export default VideoCategory;
