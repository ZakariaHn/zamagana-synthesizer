import React, { Fragment } from "react";

const ZvibratoController = (props) => {
  const { zVib, setZvib } = props;
  const handleVibrato = (e) => {
    setZvib({ ...zVib, depth: e.target.value });
  };
  return (
    <Fragment>
      <div className="vibrato control">
        <p>Vibrato</p>
        <input
          type="range"
          min={0}
          max={1}
          value={zVib.depth}
          onChange={handleVibrato}
          step="0.1"
        />
      </div>
    </Fragment>
  );
};

export default ZvibratoController;
