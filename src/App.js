import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";
import notes from "./notes.json"; // array of objects have notes/ classes names / keyboard-trigger keys
import Zdefault from "./defaultParameters.json"; // default values for all synth params

const App = () => {
  const {
    oscillator,
    envelop,
    delay,
    release,
    reverb,
    volume,
    octave,
    vibrato,
    phaser,
  } = Zdefault;

  // state getting its values from defaultParameters.json

  const [zDefault, setZdefault] = useState(Zdefault),
    [zNotes, setZnotes] = useState(notes),
    [zOsc, setZosc] = useState(oscillator),
    [zEnv, setZenv] = useState(envelop),
    [zVol, setZvol] = useState(volume),
    [zOct, setZoct] = useState(octave),
    [zRel, setZrel] = useState(release),
    [zRev, setZrev] = useState(reverb),
    [zDel, setZdel] = useState(delay),
    [zVib, setZvib] = useState(vibrato),
    [zPhs, setZphs] = useState(phaser);

  return (
    <Fragment>
      <h1>Zamagana</h1>
      <h3>
        Browser-synth built with{" "}
        <a href="https://tonejs.github.io/" target="_blank">
          Tone.js{" "}
        </a>
        and <a href="https://reactjs.org/">React.js</a>
      </h3>
      <Zsynth
        zDefault={zDefault}
        setZdefault={setZdefault}
        zNotes={zNotes}
        setZnotes={setZnotes}
        zOsc={zOsc}
        setZosc={setZosc}
        zEnv={zEnv}
        setZenv={setZenv}
        zVol={zVol}
        setZvol={setZvol}
        zOct={zOct}
        setZoct={setZoct}
        zRel={zRel}
        setZrel={setZrel}
        zRev={zRev}
        setZrev={setZrev}
        zDel={zDel}
        setZdel={setZdel}
        zVib={zVib}
        setZvib={setZvib}
        zPhs={zPhs}
        setZphs={setZphs}
      />
    </Fragment>
  );
};

export default App;
