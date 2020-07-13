import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";
import notes from "./notes.json";

const App = () => {
  const [zNotes, setZnotes] = useState(notes);

  const [zOsc, setZosc] = useState("triangle");
  const [zEnv, setZenv] = useState({
    attack: 1,
    decay: 0.1,
    sustain: 2,
    release: 4,
  });

  const [zVol, setZvol] = useState(1);
  const [zOct, setZoct] = useState(2);
  const [zRel, setZrel] = useState(0.1);
  const [zRev, setZrev] = useState({ decay: 1.5, preDelay: 0.01 });

  return (
    <Fragment>
      <h1>Zamagana</h1>
      <Zsynth
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
      />
    </Fragment>
  );
};

export default App;
