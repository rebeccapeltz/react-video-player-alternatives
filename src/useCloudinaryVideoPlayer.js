import { useState, useEffect } from 'react';
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

export const useCloudinaryVideoPlayer  = (props) =>{
  const [cloudName] = useState(props.cloudName);
  const [publicId] = useState(props.publicId);
  const [className] = useState(props.videoClass);



  const videoPlayerInit = () => {
    return window.cloudinary.videoPlayer(document.querySelector(`.${className}`), {
      cloud_name: cloudName,
      publicId: publicId,
      fluid: true,
      controls: true,
      preload: "auto",
      mute: true,
      autoplay: false    
    });
  };

  useEffect(() => {
    return(videoPlayerInit(),[]);
  });

  return "OK";
}
