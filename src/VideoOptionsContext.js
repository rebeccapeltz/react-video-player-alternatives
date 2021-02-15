import React, { createContext, useState } from "react";

const video = { options: { cloudName: "demo", publicId: "race_road_car" } };
export const VideoOptionsContext = createContext();


// This context provider is passed to any component requiring the context
export const VideoOptionsProvider = ({ children }) => {
  const [videoOptions, setVideoOptions] = useState(video.options);

  return (
    <VideoOptionsContext.Provider
      value={{
        videoOptions,
        setVideoOptions,
      }}
    >
      {children}
    </VideoOptionsContext.Provider>
  );
};
