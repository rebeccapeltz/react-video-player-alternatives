import "./App.css";
import VideoPlayerClass from "./VideoPlayerClass";
import VideoPlayerFunction from "./VideoPlayerFunction";
import VideoPlayerContext from "./VideoPlayerContext";
import React from "react";
import { VideoOptionsProvider } from "./VideoOptionsContext";
import VideoPlayerCloudHosted from "./VideoPlayerCloudHosted";

function App() {
  const videoOptions = { cloudName: "demo", publicId: "race_road_car" };


  // </div>
  return (


    <div className="App">
      <h1>Video Player Sandbox</h1>

      <div className="video-card">
        <h2>Video Player Cloud Hosted</h2>
        <div className="vp">
          <VideoPlayerCloudHosted options={videoOptions}/>
        </div>
      </div>

      <div className="video-card">
        <h2>Video Player in Class</h2>
        <div className="vp">
          <VideoPlayerClass />
        </div>
      </div>

      <div className="video-card">
        <h2>Video Player in Function</h2>
        <div className="vp">
          <VideoPlayerFunction options={videoOptions} />
        </div>
      </div>

      <div className="video-card">
        <h2>Video Player in Function with Context Provider</h2>
        <div className="vp">
          <VideoOptionsProvider>
            <VideoPlayerContext  />
          </VideoOptionsProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
