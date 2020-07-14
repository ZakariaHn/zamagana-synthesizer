import React, { Fragment } from "react";
const ZReleaseController = (props) => {
  const { zRel, setZrel } = props;
  const handleRelease = (e) => {
    setZrel(e.target.value);
    console.log(zRel);
  };
  return (
    <Fragment>
      <div className="delaySliderTiltle">Release</div>
      <div className="delay control">
        <input
          type="range"
          min={0}
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
