import React, { useState, useEffect } from "react";
import "./AudioButton.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const AudioButton = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  return (
    <div
      onClick={toggle}
      className={playing ? "btn play-btn" : "btn pause-btn"}
    ></div>
  );
};

export default AudioButton;
