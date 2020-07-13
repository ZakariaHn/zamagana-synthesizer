import React from "react";
const ZvolumeControler = (props) => {
  return (
    <ul className="volume">
      <li onClick={() => props.setZdel((x) => x + 1)}>+</li>
      <li>Volume: {props.zVol}</li>
      <li onClick={() => props.setZvol((x) => x - 1)}>-</li>
    </ul>
  );
};

export default ZvolumeControler;
