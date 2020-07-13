import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";
import notes from "./notes.json";

const App = () => {
  const [zNotes, setZnotes] = useState(notes);

  const [zOsc, setZosc] = useState("triangle");
  const [zEnv, setZenv] = useState({
    attack: 0.1,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  });

  const [zVol, setZvol] = useState(-1);
  const [zOct, setZoct] = useState(2);
  const [zRel, setZrel] = useState(0.1);

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
      />
    </Fragment>
  );
};

export default App;
