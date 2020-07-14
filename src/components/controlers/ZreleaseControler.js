import React from "react";
const ZReleaseController = (props) => {
  return (
    <ul className="release controller">
      <li onClick={() => props.setZrel((x) => x + 0.1)}>+</li>
      <li>Release</li>
      <li onClick={() => props.setZrel((x) => x - 0.1)}>-</li>
    </ul>
  );
};

export default ZReleaseController;
