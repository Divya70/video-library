const videoReduce = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEO_DATA":
      return {
        ...state,
        initialVideo: action.payload,
      };
    default:
      state;
  }
};
export { videoReduce };
