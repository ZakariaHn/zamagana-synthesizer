import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";
import notes from "./notes.json";

const App = () => {
  const [zNotes, setZnotes] = useState(notes);

  const [zOsc, setZosc] = useState("saw");
  const [zEnv, setZenv] = useState({
    attack: 0.1,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  });
  const [zVol, setZvol] = useState(-1);

  return (
    <Fragment>
      <h1>Zamagana</h1>
      <Zsynth
        zOsc={zOsc}
        zEnv={zEnv}
        zVol={zVol}
        zNotes={zNotes}
        setZvol={setZvol}
      />
    </Fragment>
  );
};

export default App;
