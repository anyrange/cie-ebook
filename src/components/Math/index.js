import React from "react";

const Math = ({ code, top }) => (
  <img style={{top:top, position:'relative'}} src={`https://math.now.sh?from=${encodeURIComponent(code)}&color=black`}/>
);

export default Math;
