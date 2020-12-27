import React from "react";

const Frame = ({ src, width, height, scrolling, style, title, id }) => {
  var eventMethod = window.addEventListener
    ? "addEventListener"
    : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  eventer(
    messageEvent,
    function (e) {
      // If the message is a resize frame request
      if (e.data.indexOf("resize::") != -1) {
        var height = e.data.replace("resize::", "");
        document.querySelectorAll("iframe[data-src]").style.height = height + "px";
        /* document.getElementById({ id }).style.height = height + "px"; */
      }
    },
    false
  );

  return (
    <iframe
      title={title}
      src={src}
      width={width}
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
