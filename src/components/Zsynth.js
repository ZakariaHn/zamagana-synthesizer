import React, { Fragment, Component } from "react";
import * as Tone from "tone";
import znotes from "../notes.json";
import Keys from "./Zkey";

const Zsynth = (props) => {
  console.log(props);
  var zsynth = new Tone.Synth().toMaster();

  function play() {
    Tone.start();
    zsynth.triggerAttackRelease("C4", "8n");
  }

  return <Keys play={play} />;
};

export default Zsynth;
