import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import VideoListing from "./pages/VideoListing/VideoListing";
import { Liked } from "./pages/Liked/Liked";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
