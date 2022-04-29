import React, { useEffect, useContext } from "react";
import { VideoOptionsContext } from "./VideoOptionsContext";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

function VideoPlayerContext() {
  const options = useContext(VideoOptionsContext);

  const videoPlayerInit = () => {
    console.log("add video player JS");
    const player = window.cloudinary.videoPlayer(
      document.querySelector(".context-video"),
      {
        cloud_name:options.videoOptions.cloudName,
        publicId: options.videoOptions.publicId,
        fluid: true,
        controls: true,
        preload: "auto",
        mute: true,
        autoplay: false,
      }
    );

    player.on("loadedmetadata", (e) => {
      console.log("app detected", e);
    });
  };

  useEffect(() => {
    videoPlayerInit();  
  });
  console.log("calling fn render");
  return (
    <>
      <video className="context-video" />
    </>
  );
}

export default VideoPlayerContext;
