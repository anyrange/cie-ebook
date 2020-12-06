import React from "react";
import ReactDOM from "react-dom";

const Frame = ({ src, width, height, scrolling, style, title }) => {
  return (
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}
      scrolling={scrolling}
      style={style}
    />
  );
};

export default Frame;
