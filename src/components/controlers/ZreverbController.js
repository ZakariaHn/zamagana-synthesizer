import React from "react";
const ZreverbController = (props) => {
  return (
    <ul className="reverb controller">
      <li onClick={() => props.setZrev((x) => x + 0.1)}>+</li>
      <li>Reverb</li>
      <li onClick={() => props.setZrev((x) => x - 0.1)}>-</li>
    </ul>
  );
};

export default ZreverbController;
