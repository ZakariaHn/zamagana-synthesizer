import React from "react";
const ZOctaveController = (props) => {
  return (
    <ul className="octave">
      <li onClick={() => props.setZoct((x) => x + 1)}>+</li>
      <li>{`Octave ${props.zOct}`}</li>
      <li onClick={() => props.setZoct((x) => x - 1)}>-</li>
    </ul>
  );
};

export default ZOctaveController;
