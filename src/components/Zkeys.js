import React from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Zkeys = (props) => {
  function play(note) {
    Tone.start();
    props.zTone.triggerAttackRelease(note, "5n");
  }

  return (
    <div className="set">
      <ul>
        {props.zNotes.map((key) => (
          <div
            className={key.color}
            id={key.id}
            key={key.id}
            onClick={() => play(key.note)}
          >
            {key.keyboardKey}
          </div>
        ))}
      </ul>
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
        onKeyEvent={(key, e) =>
          props.zNotes.map((obj) => {
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
