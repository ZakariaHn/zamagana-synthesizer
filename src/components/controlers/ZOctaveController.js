import React from "react";
const ZOctaveController = (props) => {
  return (
    <div className="octave control">
      <ul>
        <li onClick={() => props.setZoct((x) => x + 1)}>+</li>
        <li>{`Octave ${props.zOct}`}</li>
        <li onClick={() => props.setZoct((x) => x - 1)}>-</li>
      </ul>
    </div>
  );
};

export default ZOctaveController;
