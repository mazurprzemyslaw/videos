import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, videoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem videoSelect={videoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
