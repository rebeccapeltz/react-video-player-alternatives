import React, { Component } from "react";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

class VideoPlayerClass extends Component {
  videoPlayerInit = () => {
    window.cloudinary.videoPlayer("some-video", {
      cloud_name: this.props.options.cloudName,
      publicId: this.props.options.publicId,
      fluid: true,
      controls: true,
      preload: "auto",
      mute: true,
      autoplay: false
    });
  };
  componentDidMount() {
    this.videoPlayerInit();
  }
  render() {
    return (
      <>
          <video id="some-video" />
      </>
    );
  }
}
export default VideoPlayerClass;
