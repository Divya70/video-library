const videoReduce = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEO_DATA":
      return {
        ...state,
        initialVideo: action.payload,
      };
    case "ALL":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          all: true,
          study: false,
          fashion: false,
          music: false,
          comedy: false,
        },
      };
    case "FASHION":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          all: false,
          study: false,
          fashion: true,
          music: false,
          comedy: false,
        },
      };
    case "STUDY":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          all: false,
          study: true,
          fashion: false,
          music: false,
          comedy: false,
        },
      };
    case "MUSIC":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          all: false,
          study: false,
          fashion: false,
          music: true,
          comedy: false,
        },
      };
    case "COMEDY":
      return {
        ...state,
        categoryName: {
          ...state.categoryName,
          all: false,
          study: false,
          fashion: false,
          music: false,
          comedy: true,
        },
      };
    case "GET_HISTORY":
      return {
        ...state,
        historyVideo: action.payload,
      };
    case "POST_HISTORY":
      return {
        ...state,
        historyVideo: action.payload,
      };
    case "DELETE_HISTORY":
      return {
        ...state,
        historyVideo: action.payload,
      };
    case "CLEAR_ALL_HISTORY":
      return {
        ...state,
        historyVideo: [],
      };
    case "GET_LIKED_VIDEO":
      return {
        ...state,
        likedVideo: action.payload,
      };
    case "POST_LIKED_VIDEO":
      return {
        ...state,
        likedVideo: action.payload,
      };
    case "DELETE_LIKED_VIDEO":
      return {
        ...state,
        likedVideo: action.payload,
      };
    case "GET_WATCHLATER_VIDEO":
      return {
        ...state,
        watchLaterVideo: action.payload,
      };
    case "POST_WATCHLATER_VIDEO":
      return {
        ...state,
        watchLaterVideo: action.payload,
      };
    case "DELETE_WATCHLATER_VIDEO":
      return {
        ...state,
        watchLaterVideo: action.payload,
      };
    default:
      state;
  }
};
export { videoReduce };
