import React from "react";
const ZReleaseController = (props) => {
  return (
    <div className="release control">
      <ul>
        <li onClick={() => props.setZrel((x) => x + 0.1)}>+</li>
        <li>Release</li>
        <li onClick={() => props.setZrel((x) => x - 0.1)}>-</li>
      </ul>
    </div>
  );
};

export default ZReleaseController;
