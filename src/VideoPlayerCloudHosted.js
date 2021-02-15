import React from "react";

function VideoPlayerCloudHosted(props) {
  const url = `https://player.cloudinary.com/embed/?public_id=${props.options.publicId}&cloud_name=${props.options.cloudName}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`;

  return (
    <>
    <div class="iframe-container">
      <iframe className="responsive-iframe"
        title="Cloud Hosted Video Player"
        src={url}
        width="640"
        height="480"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      </div>
    </>
  );
}

export default VideoPlayerCloudHosted;
