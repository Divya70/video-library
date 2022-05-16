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
    default:
      state;
  }
};
export { videoReduce };
