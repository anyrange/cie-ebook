import React from "react";
import ReactPlayer from "react-player";
import "./player.css";

const Player = ({ url }) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={url}
      className="react-player"
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Player;
