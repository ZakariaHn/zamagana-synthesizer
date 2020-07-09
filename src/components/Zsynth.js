import React, { Fragment, useState } from "react";
import * as Tone from "tone";

const Zsynth = (props) => {
  console.log(props);
  var zsynth = new Tone.Synth().toMaster();
  function play() {
    // await Tone.start();
    // console.log("audio is ready");
    zsynth.triggerAttackRelease("C4", "8n");
  }
  return (
    <Fragment>
      ZSYNTH
      <p>
        <button onClick={play} />
      </p>
    </Fragment>
  );
};

export default Zsynth;
