import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";
import notes from "./notes.json";
import Zdefault from "./defaultParameters.json";

const App = () => {
  const {
    oscillator,
    envelop,
    delay,
    release,
    reverb,
    volume,
    octave,
  } = Zdefault;

  const [zDefault, setZdefault] = useState(Zdefault),
    [zNotes, setZnotes] = useState(notes),
    [zOsc, setZosc] = useState(oscillator),
    [zEnv, setZenv] = useState(envelop),
    [zVol, setZvol] = useState(volume),
    [zOct, setZoct] = useState(octave),
    [zRel, setZrel] = useState(release),
    [zRev, setZrev] = useState(reverb),
    [zDel, setZdel] = useState(delay),
    [modalIsOpen, setModalOpen] = useState(false);

  return (
    <Fragment>
      <h1>Zamagana</h1>
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
        modalIsOpen={modalIsOpen}
        setModalOpen={setModalOpen}
      />
    </Fragment>
  );
};

export default App;
