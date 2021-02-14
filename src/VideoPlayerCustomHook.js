import React from "react";
// import { Cloudinary } from "cloudinary-core";
// import "cloudinary-video-player/dist/cld-video-player.light.min";
// import "cloudinary-video-player/dist/cld-video-player.light.min.css";
import { useVideoPlayer } from "./useVideoPlayer";

function VideoPlayerCustomHook(props) {
  const videoClass = "custom-video";
  debugger;
  useVideoPlayer({...props.options,videoClass:videoClass});
  
  return (
    <>
      <div className="vp">
        <video className="custom-video" />
      </div>
    </>
  );
}

export default VideoPlayerCustomHook;