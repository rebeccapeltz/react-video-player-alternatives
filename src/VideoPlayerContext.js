import React, { useEffect, useContext } from "react";
import { VideoOptionsContext } from "./VideoOptionsContext";

import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

function VideoPlayerContext() {
  // debugger;
  const videoOptions = useContext(VideoOptionsContext);

  const cloudinary = new Cloudinary({
    cloud_name: videoOptions.cloudName,
    secure: true,
  });
  const videoPlayerInit = () => {
    // debugger;
    console.log("add video player JS");
    const player = cloudinary.videoPlayer(
      document.querySelector(".context-video"),
      {
        publicId: videoOptions.publicId,
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
    // debugger;
    console.log("calling useEffect");
    videoPlayerInit();
  });
  // debugger;
  console.log("calling fn render");
  return (
    <>
      <div className="vp">
        <video className="context-video" />
      </div>
    </>
  );
}

export default VideoPlayerContext;
