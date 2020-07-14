import React, { Fragment } from "react";
const ZvolumeControler = (props) => {
  const handaleVolume = (e) => {
    props.setZvol(e.target.value);
  };

  return (
    <Fragment>
      <div className="volumeSliderTiltle">vol</div>
      <div className="volume control">
        <input
          type="range"
          min={-60}
          max={40}
          value={props.zVol}
          onChange={handaleVolume}
        />
      </div>
    </Fragment>
  );
};

export default ZvolumeControler;
