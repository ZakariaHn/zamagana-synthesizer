import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
import Zcontrols from "./Zcontrols";

const Zsynth = (props) => {
  let zDelay = new Tone.FeedbackDelay({
    maxDelay: props.zDel.maxDelay,
    feedback: props.zDel.feedback,
  }).toMaster();

  let zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
    envelope: {
      attack: props.zEnv.attack,
      decay: props.zEnv.decay,
      sustain: props.zEnv.sustain,
      release: props.zEnv.release,
    },
  }).connect(zDelay);

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
  } = props;

  return (
    <div className="zsynth">
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
      <Zkeys zNotes={zNotes} zsynth={zsynth} zRel={zRel} zOct={zOct} />
    </div>
  );
};

export default Zsynth;
