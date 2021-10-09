import React from "react";
import ReactPlayer from "react-player";

const playerWrapper = {
  position: "relative",
  paddingTop: "56.25%",
};

const reactPlayer = {
  position: "absolute",
  top: 0,
  left: 0,
};

const Player = ({ url }) => (
  <div style={playerWrapper}>
    <ReactPlayer
      url={url}
      style={reactPlayer}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Player;
