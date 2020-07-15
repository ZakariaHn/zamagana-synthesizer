import React, { Fragment } from "react";

const ZphaserController = (props) => {
  const { zPhs, setZphs } = props;
  const handlePhaser = (e) => {
    setZphs({ ...zPhs, stages: e.target.value });
  };
  return (
    <Fragment>
      <div className="phaser control">
        Phaser
        <input
          type="range"
          min={1}
          max={100}
          value={zPhs.octave}
          onChange={handlePhaser}
          step="1"
        />
      </div>
    </Fragment>
  );
};

export default ZphaserController;
