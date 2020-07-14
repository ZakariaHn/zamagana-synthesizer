import React from "react";

const ZwaveFormController = (props) => {
  return (
    <div className="waveForm control">
      <select onChange={(e) => props.setZosc(e.target.value)}>
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="sawtooth">Sawtooth</option>
      </select>
    </div>
  );
};

export default ZwaveFormController;
