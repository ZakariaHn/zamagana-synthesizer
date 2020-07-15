import React, { Fragment } from "react";

const ZreverbController = (props) => {
  const { zRev, setZrev } = props;

  const handleReverb = (e) => {
    setZrev({ ...zRev, roomSize: e.target.value });
  };
  return (
    <Fragment>
      <div className="reverb-control">
        reverb
        <input
          type="range"
          min={0}
          max={1}
          value={zRev.roomSize}
          onChange={handleReverb}
          step="0.1"
        />
      </div>
    </Fragment>
  );
};

export default ZreverbController;
