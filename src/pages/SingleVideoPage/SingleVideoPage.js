import { React, useEffect } from "react";
import axios from "axios";
import "./singlevideopage.css";
import { SingleVideoCom } from "../../components/SingleVideoCom/SingleVideoCom";
import { useVideo } from "../../Context/Video-Context";
const SingleVideoPage = () => {
  const { state } = useVideo();
  const { singleVideo } = state;
  return (
    <>
      <SingleVideoCom />
    </>
  );
};

export { SingleVideoPage };
