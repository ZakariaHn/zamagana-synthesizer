import React from "react";
import * as Tone from "tone"; // importing synths/ effects /methods from Tone.js framewark
import Zkeys from "./Zkeys";
import Zcontrols from "./controlers/Zcontrols";

/* this components contains the imported synth and effects from Tone.js 
   and two components that represents the main structure for our Synth (Zkeys.js & zControls.js)
*/
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
    zVib,
    setZvib,
    zPhs,
    setZphs,
  } = props;

  // function sets the synth params to the default when the user clicks on "Reset all parameters" button

  const handleResetParameters = () => {
    const {
      octave,
      oscillator,
      reverb,
      volume,
      delay,
      release,
      vibrato,
      phaser,
    } = zDefault;
    setZoct(octave);
    setZosc(oscillator);
    setZrev(reverb);
    setZvol(volume);
    setZdel(delay);
    setZrel(release);
    setZvib(vibrato);
    setZphs(phaser.stages);
  };

  // =============== Adding Effects =================

  // Delay

  let zDelay = new Tone.FeedbackDelay({
    maxDelay: zDel.maxDelay,
    feedback: zDel.feedback,
  }).toMaster();

  // Reverb

  let zReverb = new Tone.JCReverb({
    roomSize: props.zRev.roomSize,
  }).toMaster();

  // Pahser

  let Zphaser = new Tone.Phaser({
    frequency: zPhs.frequency,
    octaves: zPhs.octaves,
    stages: zPhs.stages,
    Q: zPhs.Q,
    baseFrequency: zPhs.baseFrequency,
  }).toMaster();

  // Vibrato

  let Zvibrato = new Tone.Vibrato({
    frequency: zVib.frequency,
    depth: zVib.depth,
  }).toMaster();

  /*
   * assigning the Imported Synth to a the variable zsynth
   * assigning values to its oscillator & envelop from the state
   * connect the the effects to the synth using .chain() methode
   */

  let zsynth = new Tone.Synth({
    volume: zVol,
    oscillator: { type: zOsc },
    envelope: {
      attack: zEnv.attack,
      decay: zEnv.decay,
      sustain: zEnv.sustain,
      release: zEnv.release,
    },
  }).chain(zDelay, Zvibrato, Zphaser, zReverb);

  return (
    <div className="zsynth" id="zSynth">
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
        zVib={zVib}
        setZvib={setZvib}
        zPhs={zPhs}
        setZphs={setZphs}
      />
      <Zkeys zNotes={zNotes} zsynth={zsynth} zRel={zRel} zOct={zOct} />
      <button onClick={handleResetParameters}>Reset all parameters</button>
    </div>
  );
};

export default Zsynth;
