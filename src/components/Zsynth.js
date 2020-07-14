import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";

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

        maxDelay={maxDelay}
        feedback={feedback}
        zDel={zDel}
        setZdel={setZdel}

      />
    </div>
  );
};

export default Zsynth;
