import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
import Zcontrols from "./Zcontrols";

const Zsynth = (props) => {
  var zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
  }).toMaster();

  return (
    <div className="zsynth">
      <Zcontrols setZvol={props.setZvol} zVol={props.zVol} />
      <Zkeys zNotes={props.zNotes} zsynth={zsynth} />;
    </div>
  );
};

export default Zsynth;
