import React, { Component } from "react";
import { Cloudinary } from "cloudinary-core";
import "cloudinary-video-player/dist/cld-video-player.light.min";
import "cloudinary-video-player/dist/cld-video-player.light.min.css";

class VideoPlayerClass extends Component {
  videoName = "race_road_car";
  cld = () => {
    return new Cloudinary({ cloud_name: "demo", secure: true });
  };
  videoPlayerInit = () => {
    const cld = this.cld();
    cld.videoPlayer("some-video", {
      publicId: this.videoName,
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
        <div className="vp">
          <video id="some-video" />
        </div>
      </>
    );
  }
}
export default VideoPlayerClass;
