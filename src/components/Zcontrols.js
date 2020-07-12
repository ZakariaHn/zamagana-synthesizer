import React from "react";

const Zcontrols = (props) => {
  console.log(props.zOsc);
  console.log(props.zVol);

  return (
    <div className="controls">
      <span>Volume: {props.zVol}</span>
      <button onClick={() => props.setZvol((x) => x + 1)}>+</button>
      <button onClick={() => props.setZvol((x) => x - 1)}>-</button>
    </div>
  );
};

export default Zcontrols;
