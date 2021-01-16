import React from "react";

const Math = ({ code }) => (
  <img src={`https://math.now.sh?from=${encodeURIComponent(code)}&color=black`}/>
);

export default Math;
