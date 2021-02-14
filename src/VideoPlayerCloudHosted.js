import React from "react";

function VideoPlayerCloudHosted(props) {
  return (
    <>
      <iframe
        title="Video Player Cloud Hosted"
        src={`https://player.cloudinary.com/embed/?cloud_name=${props.options.cloudName}&public_id=${props.options.publicId}&&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bcontrol_bar%5D%5Bvolume_panel%5D=false&player%5Bcontrol_bar%5D%5Bfullscreen_toggle%5D=false&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=0`}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
      ></iframe>
    </>
  );
}

export default VideoPlayerCloudHosted;
