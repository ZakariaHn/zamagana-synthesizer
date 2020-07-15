import React, { Fragment } from "react";
const ZReleaseController = (props) => {
  const { zRel, setZrel } = props;

  const handleRelease = (e) => {
    setZrel(e.target.value);
  };
  return (
    <Fragment>
      <div className="delay control">
        Release
        <input
          type="range"
          min={0.1}
          max={1}
          value={zRel}
          onChange={handleRelease}
          step="0.1"
        />
      </div>
    </Fragment>
  );
};

export default ZReleaseController;
