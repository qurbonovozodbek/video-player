import { useState } from "react";
import "./App.css";
import VideoPlayer from "./video/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <VideoPlayer></VideoPlayer>
      </div>
    </>
  );
}

export default App;
