import { useState, useEffect } from 'react';
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

export const useVideoPlayer  = (props) =>{
  // debugger;
  const [cloudName] = useState(props.cloudName);
  const [publicId] = useState(props.publicId);
  const [className] = useState(props.videoClass);

  const cloudinary = new Cloudinary({
    cloud_name: cloudName,
    secure: true,
  });

  const videoPlayerInit = () => {
    return cloudinary.videoPlayer(document.querySelector(`.${className}`), {
      publicId: publicId,
      fluid: true,
      controls: true,
      preload: "auto",
      mute: true,
      autoplay: false    
    });
  };

  useEffect(() => {
    videoPlayerInit();
  });

  return "OK";
}
