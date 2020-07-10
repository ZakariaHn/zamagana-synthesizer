import React, { Fragment } from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";

const Zsynth = (props) => {
  var zTone = new Tone.Synth({
    oscillator: {
      type: "triangle",
    },
    envelope: {
      attack: 2,
      decay: 1,
      sustain: 0.4,
      release: 1,
    },
  }).toMaster();

  return (
    <Fragment>
      <Zkeys zNotes={props.zNotes} zTone={zTone} />
    </Fragment>
  );
};

export default Zsynth;
