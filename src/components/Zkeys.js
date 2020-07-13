import React, { Component } from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";

const Zkeys = (props) => {
  const { zOct, zNotes, zRel, setZoct, zsynth, setZrel } = props;

  const play = (note) => {
    Tone.start();
    const octavedNote = note + zOct;
    zsynth.triggerAttackRelease(octavedNote, zRel);
  };

  return (
    <div className="set">
      <ul>
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
          zNotes.map((obj) => {
            if (key === obj.keyboardKey) {
              play(obj.note);
            }
          })
        }
      />
      <ul className="octave">
        <li onClick={() => setZoct((x) => x + 1)}>+</li>
        <li>{`Octave ${zOct}`}</li>
        <li onClick={() => setZoct((x) => x - 1)}>-</li>
      </ul>
      <ul className="release">
        <li onClick={() => setZrel((x) => x + 0.1)}>+</li>
        <li>Release</li>
        <li onClick={() => setZrel((x) => x - 0.1)}>-</li>
      </ul>
    </div>
  );
};

export default Zkeys;
