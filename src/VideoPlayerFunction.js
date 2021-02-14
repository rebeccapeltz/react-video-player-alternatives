import React, {useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";


function VideoPlayerFunction(props) {
  
  const cloudinary = new Cloudinary({ cloud_name: props.options.cloudName, secure: true });
  const videoPlayerInit = () => {
    debugger;
    console.log("calling debugger");
    cloudinary.videoPlayer(document.querySelector(".fn-video"), {
      publicId: props.options.publicId,
      fluid: true,
      controls: true,
      preload: "auto",
      mute: true,
      autoplay: false    
    });
  };

  useEffect(() => {  
    debugger;
    console.log("calling useEffect");
   videoPlayerInit();
  });
  debugger;
  console.log("calling fn render")
  return (
    <>
      <div className="vp">
        <video className="fn-video" />
      </div>
    </>
  );
}

export default VideoPlayerFunction;
