import "./App.css";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
=======
function App() {
  return <div className="App"></div>;
>>>>>>> fdde2d86e507b64edddb00893adec0478bc1c31c
}

export default App;
