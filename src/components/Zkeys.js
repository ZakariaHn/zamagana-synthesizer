import React from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler"; // A component from React to handle keyboard Keys

const Zkeys = (props) => {
  const { zOct, zNotes, zRel, zsynth } = props;

  // This function initiate the note to be played by applying the Tone.js methouds (.start() & .triggerAttackRelease())

  const play = (note) => {
    Tone.start();
    const octavedNote = note + zOct;
    zsynth.triggerAttackRelease(octavedNote, zRel);
  };

  /*
    applying .map() method on zNotes( which represents note.json) 
    and rendering the synth keys and setting it's class based on the data entered there.
 */

  let style = { color: "red" };
  const CminorScale = ["C", "D", "Eb", "F", "G", "Ab", "Bb"];
  const renderSynthKeys = zNotes.map((key) => (
    <div
      className={key.color}
      id={key.id}
      key={key.id}
      onMouseDown={() => play(key.note)}
      // style={CminorScale.includes(key.note) ? style : key}
      a
    >
      {key.keyboardKey}
    </div>
  ));

  /*
   using the react component "KeyboardEventHandler"
   and mapping again on Znotes in order to assign the keyboard keys that'll trigger the synth keys
 */
  const keyboardHandler = (
    <KeyboardEventHandler
      handleKeys={["a", "w", "d", "r", "f", "g", "y", "h", "u", "j", "i", "k"]}
      onKeyEvent={(key) =>
        zNotes.map((obj) => {
          if (key === obj.keyboardKey) {
            play(obj.note);
          }
        })
      }
    />
  );

  return (
    <div>
      <div className="set">
        {renderSynthKeys}
        {keyboardHandler}
      </div>
    </div>
  );
};

export default Zkeys;
