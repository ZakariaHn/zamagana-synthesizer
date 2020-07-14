import React from "react";

const ZenvelopControllers = (props) => {
  const { zEnv, setZenv } = props;

  //   const handleRelease = (e) => {
  //     setZenv(e.target.value);
  //   };

  return (
    <div className="envelop control">
      {/* <div>
        <p>Attack</p>
        <input
          type="range"
          min={-60}
          max={40}
          value={zEnv.attack}
          className="attack"
          onChange={handleRelease}
        />
      </div>
      <div>
        <p>Decay</p>
        <input
          type="range"
          min={-60}
          max={40}
          value={zEnv.decay}
          className="decay"
          onChange={handleRelease}
        />
      </div>
      <div>
        <p>Sustain</p>
        <input
          type="range"
          min={-60}
          max={40}
          value={zEnv.sustain}
          className="sustain"
          onChange={handleRelease}
        />
      </div> */}
      {/* <div>
        <p>Release</p>
        <input
          onChange={handleRelease}
          type="range"
          min={0}
          max={10}
          defaultValue={0}
          className="release"
          step="1"
        />
      </div> */}
    </div>
  );
};

export default ZenvelopControllers;
