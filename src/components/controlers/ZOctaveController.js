import React, { Fragment } from "react";
const ZOctaveController = (props) => {
  const { zOct, setZoct } = props;
  const handaleOctave = (e) => {
    setZoct(e.target.value);
  };
  return (
    <Fragment>
      <div className="octaveSliderTiltle">Octave</div>
      <div className="octave control">
        <input
          type="range"
          min={1}
          max={3}
          value={zOct}
          onChange={handaleOctave}
        />
      </div>
    </Fragment>
  );
};

export default ZOctaveController;
