import React, { Fragment, Component } from "react";
import * as Tone from "tone";

import Keys from "./Zkey";

const Zsynth = (props) => {
  var zsynth = new Tone.Synth().toMaster();

  return <Keys zNotes={props.zNotes} zsynth={zsynth} />;
};

export default Zsynth;
