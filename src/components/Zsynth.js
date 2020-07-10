import React, { Fragment } from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";

const Zsynth = (props) => {
  var zTone = new Tone.PolySynth().toMaster();
  return (
    <Fragment>
      <Zkeys zNotes={props.zNotes} zTone={zTone} />
    </Fragment>
  );
};

export default Zsynth;
