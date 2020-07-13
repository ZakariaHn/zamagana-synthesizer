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
  const [zDel, setZdel] = useState({
    maxDelay: 0.1,
    feedback: 0,
  });

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
        zDel={zDel}
        setZdel={setZdel}
      />
    </Fragment>
  );
};

export default App;
