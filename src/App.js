import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import VideoListing from "./pages/VideoListing/VideoListing";
import { Liked } from "./pages/Liked/Liked";
import { WatchLater } from "./pages/Watchlater/Watchlater";
import { History } from "./pages/History/History";
import Mockman from "mockman-js";
import { SingleVideoPage } from "./pages/SingleVideoPage/SingleVideoPage";
import { Logout } from "./pages/Logout/Logout";
import { Playlist } from "./pages/Playlist/Playlist";
import { SinglePlaylistPage } from "./pages/SinglePlaylistPage/SinglePlaylistPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylistPage />} />
        <Route path="history" element={<History />} />
        <Route path="/singlevideopage/:videoId" element={<SingleVideoPage />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
