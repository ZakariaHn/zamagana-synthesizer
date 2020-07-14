import React from "react";

const ZwaveFormController = (props) => {
  return (
    <select
      className="waveForm controller"
      onChange={(e) => props.setZosc(e.target.value)}
    >
      <option value="sine">Sine</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
      <option value="sawtooth">Sawtooth</option>
    </select>
  );
};

export default ZwaveFormController;
