import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkey";

const Zsynth = (props) => {
  var zsynth = new Tone.Synth().toMaster();

  return <Zkeys zNotes={props.zNotes} zsynth={zsynth} />;
};

export default Zsynth;
