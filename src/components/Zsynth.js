import React from "react";
import * as Tone from "tone";
import Zkeys from "./Zkeys";
import Zcontrols from "./controlers/Zcontrols";

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
    zDefault,
    setZdefault,
    modalIsOpen,
    setModalOpen,
  } = props;

  const handleResetParameters = () => {
    const { octave, oscillator, reverb, volume, delay, release } = zDefault;
    setZoct(octave);
    setZosc(oscillator);
    setZrev(reverb);
    setZvol(volume);
    setZdel(delay);
    setZrel(release);
  };

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
        zDefault={zDefault}
        setZdefault={setZdefault}
        modalIsOpen={modalIsOpen}
        setModalOpen={setModalOpen}
      />
      <Zkeys zNotes={zNotes} zsynth={zsynth} zRel={zRel} zOct={zOct} />
      <button onClick={handleResetParameters}>Reset all parameters</button>
    </div>
  );
};

export default Zsynth;
