import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkey";
import Zcontrols from "./Zcontrols";

const Zsynth = (props) => {
  // console.log(props);
  // console.log(props.zOsc);
  var zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
  }).toMaster();

  console.log(zsynth);

  return (
    <div className="zsynth">
      <Zcontrols setZvol={props.setZvol} zVol={props.zVol} />
      <Zkeys zNotes={props.zNotes} zsynth={zsynth} />;
    </div>
  );
};

export default Zsynth;
