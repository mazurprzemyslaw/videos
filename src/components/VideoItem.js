import React from "react";

import "./VideoItem.scss";

const VideoItem = ({ video, videoSelect }) => {
  return (
    <div onClick={() => videoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="img"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
