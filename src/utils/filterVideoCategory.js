const getFilterVideos = (categoryName, videos) => {
  const { fashion, study, music, comedy, all } = categoryName.categoryName;
  if (fashion) {
    const fashionVideo = videos.filter((video) => video.category === "fashion");
    return fashionVideo;
  }
  if (study) {
    const studyVideo = videos.filter((video) => video.category === "study");
    return studyVideo;
  }
  if (music) {
    const musicVideo = videos.filter((video) => video.category === "music");
    return musicVideo;
  }
  if (comedy) {
    const comedyVideo = videos.filter((video) => video.category === "comedy");
    return comedyVideo;
  }
  if (all) {
    return videos;
  }
  return videos;
};
export { getFilterVideos };
