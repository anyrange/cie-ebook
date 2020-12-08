import React, { Component } from "react";
import "./styles.css";

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    };
  }

  onPlay = (event) => {
    this.setState({ playing: true });
  };
  onPause = (event) => {
    this.setState({ playing: false });
  };
  onEnded = (event) => {
    this.setState({ playing: false });
  };

  playAudio = () => {
    this.audioEl.play();

    const audio = this.audioEl;

    audio.addEventListener("play", this.onPlay);
    audio.addEventListener("pause", this.onPause);
    audio.addEventListener("ended", this.onEnded);
  };

  pauseAudio = () => {
    this.audioEl.pause();
  };

  startAudio = () => {
    this.playAudio();
  };

  renderAudio = () => {
    const { url } = this.props;
    const { playing } = this.state;

    const notSupportedMsg =
      "Your browser does not support the <code>audio</code> element.";
    return (
      <>
        {!playing && (
          <div className="btn pause-btn" onClick={this.startAudio}></div>
        )}
        {playing && (
          <div className="btn play-btn" onClick={this.pauseAudio}></div>
        )}

        <audio
          src={url}
          ref={(ref) => {
            this.audioEl = ref;
          }}
        >
          {notSupportedMsg}
        </audio>
      </>
    );
  };

  render() {
    return this.renderAudio();
  }
}

export default AudioButton;
