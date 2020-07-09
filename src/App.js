import React, { Fragment, useState } from "react";
import Zsynth from "./components/Zsynth";

const App = () => {
  const [zOsc, setZosc] = useState("triangle");
  const [zEnv, setZenv] = useState({
    attack: 0.005,
    decay: 0.1,
    sustain: 0.3,
    release: 1,
  });
  const [zVol, setZvol] = useState(-1);
  return (
    <Fragment>
      <h1>Zamagana</h1>
      <Zsynth zOsc={zOsc} zEnv={zEnv} zVol={zVol} />
    </Fragment>
  );
};

export default App;
