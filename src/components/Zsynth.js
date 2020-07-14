import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
import Zcontrols from "./Zcontrols";

const Zsynth = (props) => {
  let delay = new Tone.FeedbackDelay({
    maxDelay: props.zDel.maxDelay,
    feedback: props.zDel.feedback,
  }).toMaster();

  var zsynth = new Tone.Synth({
    volume: props.zVol,
    oscillator: { type: props.zOsc },
  }).connect(delay);

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
  } = props;

  const { maxDelay, feedback } = props.zDel;

  return (
    <div className="zsynth">
      <Zkeys zNotes={zNotes} zsynth={zsynth} zRel={zRel} zOct={zOct} />
      <Zcontrols
        zDel={zDel}
        setZdel={setZdel}
        zVol={zVol}
        setZvol={setZvol}
        maxDelay={maxDelay}
        feedback={feedback}
        zRev={zRev}
        setZrev={setZrev}
        zRel={zRel}
        zOct={zOct}
        setZosc={setZosc}
        setZrel={setZrel}
        setZoct={setZoct}
      />
    </div>
  );
};

export default Zsynth;
