import React from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Zkeys = (props) => {
  const { zOct, zNotes, zRel, zsynth } = props;

  const play = (note) => {
    Tone.start();
    const octavedNote = note + zOct;
    zsynth.triggerAttackRelease(octavedNote, zRel);
  };

  return (
    <div className="set">
      {zNotes.map((key) => (
        <div
          className={key.color}
          id={key.id}
          key={key.id}
          onMouseDown={() => play(key.note)}
        >
          {key.keyboardKey}
        </div>
      ))}
      <KeyboardEventHandler
        handleKeys={[
          "a",
          "w",
          "d",
          "r",
          "f",
          "g",
          "y",
          "h",
          "u",
          "j",
          "i",
          "k",
        ]}
        onKeyEvent={(key) =>
          zNotes.map((obj) => {
            if (key === obj.keyboardKey) {
              play(obj.note);
            }
          })
        }
      />
    </div>
  );
};

export default Zkeys;
