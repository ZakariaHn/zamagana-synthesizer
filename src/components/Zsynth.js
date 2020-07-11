import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkey";

const Zsynth = (props) => {
  // console.log(props);
  // console.log(props.zOsc);
  var zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
  }).toMaster();

  console.log(zsynth);

  return <Zkeys zNotes={props.zNotes} zsynth={zsynth} />;
};

export default Zsynth;
