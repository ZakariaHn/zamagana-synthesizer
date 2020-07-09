import React from "react";
import * as Tone from "tone";

const Zkeys = (props) => {
  function play(note) {
    Tone.start();
    props.zsynth.triggerAttackRelease(note, "8n");
  }

  return (
    <div className="set">
      <ul>
        {props.zNotes.map((key, i) => (
          <button
            className={key.color}
            id={key.id}
            key={key.id}
            onClick={() => play(key.note)}
          >
            {key.note}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Zkeys;
