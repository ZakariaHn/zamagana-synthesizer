import React from "react";

const ZsynthTypeSwitcher = (props) => {
  function handlechange(e) {}
  return (
    <select onChange={handlechange}>
      <option value="Synth">Synth</option>
      <option value="FMSynth">FM</option>
      <option value="AMSynth">AM</option>
      <option value="PluckSynth">Pluck</option>
      <option value="MembraneSynth">Membrane</option>
      <option value="PolySynth">Poly</option>
      <option value="MonoSynth">Mono</option>
      <option value="DueSynth">Due</option>
      <option value="MetalSynth">Metal</option>
    </select>
  );
};

export default ZsynthTypeSwitcher;
