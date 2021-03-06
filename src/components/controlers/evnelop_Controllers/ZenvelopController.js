import React from "react";

const ZenvelopControllers = (props) => {
  const { zEnv, setZenv } = props;

  const handleAttack = (e) => {
    setZenv({ ...zEnv, attack: e.target.value });
    console.log(zEnv);
  };

  const handleDecay = (e) => {
    setZenv({ ...zEnv, decay: e.target.value });
    console.log(zEnv);
  };

  const handleSustain = (e) => {
    setZenv({ ...zEnv, sustain: e.target.value });
    console.log(zEnv);
  };

  const handleRelease = (e) => {
    setZenv({ ...zEnv, release: e.target.value });
    console.log(zEnv);
  };

  function handleResetEnvelop() {
    setZenv({
      ...zEnv,
      attack: 0.9,
      decay: 0.4,
      sustain: 0.01,
      release: 1.4,
    });
  }

  return (
    <div className="envelop control">
      <div className="attackSlider">
        <p>Attack</p>
        <input
          type="range"
          min={0.1}
          max={2.1}
          step="0.2"
          value={zEnv.attack}
          onChange={handleAttack}
        />
      </div>
      <div className="decaySlider">
        <p>Decay</p>
        <input
          type="range"
          min={0.1}
          max={2.1}
          step="0.2"
          value={zEnv.decay}
          onChange={handleDecay}
        />
      </div>
      <div className="sustainSlider">
        <p>Sustain</p>
        <input
          type="range"
          min={0.1}
          max={2.1}
          step="0.2"
          value={zEnv.sustain}
          onChange={handleSustain}
        />
      </div>
      <div className="releaseSlider">
        <p>Release</p>
        <input
          onChange={handleRelease}
          type="range"
          min={0.1}
          max={10.1}
          step="0.5"
          value={zEnv.release}
        />
      </div>
      <button className="reset-button" onClick={handleResetEnvelop}>
        Reset envelope
      </button>
    </div>
  );
};

export default ZenvelopControllers;
