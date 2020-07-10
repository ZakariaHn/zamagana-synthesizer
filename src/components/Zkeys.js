import React, { Component } from "react";
import * as Tone from "tone";
import KeyboardEventHandler from "react-keyboard-event-handler";

// const Zkeys = (props) => {

//   return (

//   );
// };

// export default Zkeys;

// play(key.note+key.octave)

class Zkeys extends Component {
  constructor(props) {
    super(props);
    this.state = { octave: 4 };
  }

  play = (note) => {
    Tone.start();
    this.props.zTone.triggerAttackRelease(note + this.state.octave, "0.1s");
  };

  handleIncrement = () => {
    const oct = this.state.octave + 1;
    this.setState({ octave: oct });
  };

  handleDecrement = () => {
    const oct = this.state.octave - 1;
    this.setState({ octave: oct });
  };

  render() {
    return (
      <div className="set">
        <ul>
          {this.props.zNotes.map((key) => (
            <div
              className={key.color}
              id={key.id}
              key={key.id}
              onClick={() => this.play(key.note)}
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
            this.props.zNotes.map((obj) => {
              if (key === obj.keyboardKey) {
                this.play(obj.note);
              }
            })
          }
        />
        <ul className="octave">
          <li onClick={this.handleIncrement}>+</li>
          <li>{`octave ${this.state.octave}`}</li>
          <li onClick={this.handleDecrement}>-</li>
        </ul>
      </div>
    );
  }
}

export default Zkeys;
