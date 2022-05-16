import { createContext, useReducer, useContext } from "react";
import { videoReduce } from "../Reducer/Video-Reducer";

const VideoContext = createContext([]);
const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReduce, {
    initialVideo: [],
    categoryName: {
      all: null,
      fashion: null,
      study: null,
      music: null,
      comedy: null,
    },
  });
  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};
const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
