import React, { useEffect, useContext } from "react";
import { VideoOptionsContext } from "./VideoOptionsContext";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

function VideoPlayerContext() {
  const options = useContext(VideoOptionsContext);

  const cloudinary = new Cloudinary({
    cloud_name: options.videoOptions.cloudName,
    secure: true,
  });
  const videoPlayerInit = () => {
    console.log("add video player JS");
    const player = cloudinary.videoPlayer(
      document.querySelector(".context-video"),
      {
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
    console.log("calling useEffect");
      
  });
  console.log("calling fn render");
  return (
    <>
      <video className="context-video" />
    </>
  );
}

export default VideoPlayerContext;
