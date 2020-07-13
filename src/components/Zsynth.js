import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";

const Zsynth = (props) => {
  var zReverb = new Tone.Reverb();
  var zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
  }).toMaster();

  const {
    zNotes,
    zOct,
    setZoct,
    zRel,
    setZrel,
    zVol,
    setZvol,
    setZosc,
    zRev,
    setZrev,
  } = props;

  return (
    <div className="zsynth">
      <Zkeys
        zNotes={zNotes}
        zsynth={zsynth}
        zOct={zOct}
        setZoct={setZoct}
        zRel={zRel}
        setZrel={setZrel}
        zVol={zVol}
        setZvol={setZvol}
        setZosc={setZosc}
        zRev={zRev}
        setZrev={setZrev}
      />
    </div>
  );
};

export default Zsynth;
