import React, { Fragment } from "react";
const ZOctaveController = (props) => {
  const { zOct, setZoct } = props;
  const handaleOctave = (e) => {
    setZoct(e.target.value);
    console.log(zOct);
  };
  return (
    <Fragment>
      <div className="octaveSliderTiltle">Octave</div>
      <div className="octave control">
        <input
          type="range"
          min={0}
          max={2}
          value={zOct}
          onChange={handaleOctave}
        />
      </div>
    </Fragment>
  );
};

export default ZOctaveController;
