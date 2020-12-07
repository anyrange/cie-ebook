import React, { useState, useRef } from "react";
import "./AudioButton.css";

const AudioButton = ({ url }) => {
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();

  const startAudio = () => {
    myRef.current.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(false);
  };

  return (
    <>
      <audio ref={myRef} src={url} />
      <div
        onClick={audioStatus ? pauseAudio : startAudio}
        className={audioStatus ? "btn play-btn" : "btn pause-btn"}
      ></div>
    </>
  );
};

export default AudioButton;
