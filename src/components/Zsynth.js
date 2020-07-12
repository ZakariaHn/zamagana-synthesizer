import React, { Fragment } from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
<<<<<<< HEAD
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
=======

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
>>>>>>> 3e81f10722f8caf26e6dc5532c73d9ac97139960
  );
};

export default Zsynth;
