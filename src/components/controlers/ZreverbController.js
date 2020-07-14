import React from "react";
const ZreverbController = (props) => {
  return (
    <div className="reverb control">
      <ul>
        <li onClick={() => props.setZrev((x) => x + 0.1)}>+</li>
        <li>Reverb</li>
        <li onClick={() => props.setZrev((x) => x - 0.1)}>-</li>
      </ul>
    </div>
  );
};

export default ZreverbController;
