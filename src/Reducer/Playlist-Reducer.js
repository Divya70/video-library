const playlistReduce = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "GET_PLAYLIST":
      return [...playlistAction.payload];
    case "ADD_PLAYLIST":
      return [...playlistAction.payload];
    case "REMOVE_PLAYLIST":
      return [...playlistAction.payload];
    case "GET_VIDEO_IN_PLAYLIST":
      return [...playlistAction.payload];
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return [...playlistAction.payload];
    default:
      playlistState;
  }
};
export { playlistReduce };
