import React from "react";

const Zcontrols = (props) => {
  return (
    <div className="controls">
      <span>Volume: {props.zVol}</span>
      <button onClick={() => props.setZvol((x) => x + 1)}>+</button>
      <button onClick={() => props.setZvol((x) => x - 1)}>-</button>
    </div>
  );
};

export default Zcontrols;
