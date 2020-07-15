import React, { Fragment } from "react";
const ZvolumeControler = (props) => {
  const handaleVolume = (e) => {
    props.setZvol(e.target.value);
  };

  return (
    <Fragment>
      <div className="volume control">
        vol
        <input
          type="range"
          min={-10}
          max={40}
          value={props.zVol}
          onChange={handaleVolume}
        />
      </div>
    </Fragment>
  );
};

export default ZvolumeControler;
