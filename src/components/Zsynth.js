import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
import Zcontrols from "./Zcontrols";

const Zsynth = (props) => {
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
    zDel,
    setZdel,
    zEnv,
    setZenv,
    zOsc,
  } = props;

  let zDelay = new Tone.FeedbackDelay({
    maxDelay: zDel.maxDelay,
    feedback: zDel.feedback,
  }).toMaster();

  let zsynth = new Tone.Synth({
    volume: zVol,
    oscillator: { type: zOsc },
    envelope: {
      attack: zEnv.attack,
      decay: zEnv.decay,
      sustain: zEnv.sustain,
      release: zEnv.release,
    },
  }).connect(zDelay);

  return (
    <div className="zsynth">
      <Zkeys zNotes={zNotes} zsynth={zsynth} zRel={zRel} zOct={zOct} />
      <Zcontrols
        zDel={zDel}
        setZdel={setZdel}
        zVol={zVol}
        setZvol={setZvol}
        zRev={zRev}
        setZrev={setZrev}
        zRel={zRel}
        setZrel={setZrel}
        zOct={zOct}
        setZoct={setZoct}
        setZosc={setZosc}
        zEnv={zEnv}
        setZenv={setZenv}
      />
    </div>
  );
};

export default Zsynth;
