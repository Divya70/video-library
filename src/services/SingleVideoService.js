import axios from "axios";
const getSingleVideoPage = async (videoId, setGetSingleVideo) => {
  try {
    const getSingleVideoResponse = await axios.get(`/api/video/${videoId}`);
    if (getSingleVideoResponse.status === 200) {
      setGetSingleVideo(getSingleVideoResponse.data.video);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Error:", getSingleVideoResponse);
  }
};

export { getSingleVideoPage };
