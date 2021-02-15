import React, { Component } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

class VideoPlayerClass extends Component {
  cld = () => {
    return new Cloudinary({ cloud_name: this.props.options.cloudName, secure: true });
  };
  videoPlayerInit = () => {
    const cld = this.cld();
    cld.videoPlayer("some-video", {
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
