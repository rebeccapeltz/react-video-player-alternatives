import React from "react";
import { useCloudinaryVideoPlayer } from "./useCloudinaryVideoPlayer";

function VideoPlayerCustomHook(props) {
  const videoClass = "custom-video";
  useCloudinaryVideoPlayer({ ...props.options, videoClass: videoClass });

  return (
    <>
      <video className={videoClass} />
    </>
  );
}

export default VideoPlayerCustomHook;
