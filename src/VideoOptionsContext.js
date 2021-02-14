import React, { createContext, useState } from "react";

export const VideoOptionsContext = createContext();



// This context provider is passed to any component requiring the context
export const VideoOptionsProvider = ({ children }) => {
  const [cloudName] = useState("demo");
  const [publicId] = useState("race_road_car");

  return (
    <VideoOptionsContext.Provider
      value={{
        cloudName,
        publicId,
      }}
    >
      {children}
    </VideoOptionsContext.Provider>
  );
};
