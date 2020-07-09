import React from "react";
import * as Tone from "tone";

const Zkeys = (props) => {
  function play(note) {
    Tone.start();
    props.zsynth.triggerAttackRelease(note, "8n");
  }

  return props.zNotes.map((key, i) => (
    <button id={key} key={i} onClick={() => play(key)}>
      {key}
    </button>
  ));
};

export default Zkeys;
