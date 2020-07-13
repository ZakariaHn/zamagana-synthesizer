import React, { Fragment } from "react";
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
      <Zkeys
        zNotes={props.zNotes}
        zsynth={zsynth}
        zOct={props.zOct}
        setZoct={props.setZoct}
        zRel={props.zRel}
        setZrel={props.setZrel}
      />
      ;
    </div>
  );
};

export default Zsynth;
