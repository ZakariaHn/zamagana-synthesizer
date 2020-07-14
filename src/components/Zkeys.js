import React from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";
import ZOctaveController from "./controlers/ZOctaveController";
import ZReleaseController from "./controlers/ZreleaseControler";
import ZvolumeControler from "./controlers/ZvolumeController";
import ZwaveFormController from "./controlers/ZwaveFormController";

import ZreverbController from "./controlers/ZreverbController";

import ZdelayController from "./controlers/ZdelayController";


const Zkeys = (props) => {
  const {
    zOct,
    zNotes,
    zRel,
    zVol,
    zRev,
    zsynth,
    setZvol,
    setZrel,
    setZoct,
    setZosc,

    setZrev,

    maxDelay,
    feedback,
    zDel,
    setZdel,

  } = props;

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
        onKeyEvent={(key) =>
          zNotes.map((obj) => {
            if (key === obj.keyboardKey) {
              play(obj.note);
            }
          })
        }
      />
      <div className="controllers">
        <ZvolumeControler zVol={zVol} setZvol={setZvol} />
        <ZReleaseController zRel={zRel} setZrel={setZrel} />
        <ZOctaveController zOct={zOct} setZoct={setZoct} />
        <ZreverbController zRev={zRev} setZrev={setZrev} />
        <ZwaveFormController setZosc={setZosc} />
        <ZdelayController
          maxDelay={maxDelay}
          feedback={feedback}
          setZdel={setZdel}
          zDel={zDel}
        />
      </div>
    </div>
  );
};

export default Zkeys;
