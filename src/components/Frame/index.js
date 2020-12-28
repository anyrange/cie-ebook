import React from "react";

const Frame = ({ src, width, height, scrolling, style, title, id }) => {
  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height={height}
      scrolling={scrolling}
      style={style}
      id={id}
      frameborder="0"
      loading="lazy"
    />
  );
};

export default Frame;
