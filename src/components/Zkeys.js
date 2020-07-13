// import React, { Component } from "react";
// import * as Tone from "tone";
// import KeyboardEventHandler from "react-keyboard-event-handler";

// class Zkeys extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { octave: 4, release: 0.1 };
//   }

//   play = (note) => {
//     Tone.start();
//     const octavedNote = note + this.state.octave;
//     this.props.zTone.triggerAttackRelease(octavedNote, this.state.release);
//   };

//   liftOctave = () => {
//     const oct = this.state.octave + 1;
//     this.setState({ octave: oct });
//   };

//   dropOctave = () => {
//     const oct = this.state.octave - 1;
//     this.setState({ octave: oct });
//   };

//   boostRelease = () => {
//     let rel = this.state.release + 0.1;
//     this.setState({ release: rel });
//   };

//   diminishRelease = () => {
//     let rel = this.state.release - 0.1;
//     console.log(rel);
//     this.setState({ release: rel });
//   };

//   render() {
//     const { zNotes } = this.props;
//     const { octave, release } = this.state;
//     return (
//       <div className="set">
//         <ul>
//           {zNotes.map((key) => (
//             <div
//               className={key.color}
//               id={key.id}
//               key={key.id}
//               onMouseDown={() => this.play(key.note)}
//             >
//               {key.keyboardKey}
//             </div>
//           ))}
//         </ul>
//         <KeyboardEventHandler
//           handleKeys={[
//             "a",
//             "w",
//             "d",
//             "r",
//             "f",
//             "g",
//             "y",
//             "h",
//             "u",
//             "j",
//             "i",
//             "k",
//           ]}
//           onKeyEvent={(key, e) =>
//             zNotes.map((obj) => {
//               if (key === obj.keyboardKey) {
//                 this.play(obj.note);
//               }
//             })
//           }
//         />
//         <ul className="octave">
//           <li onClick={this.liftOctave}>+</li>
//           <li>{`Octave ${octave}`}</li>
//           <li onClick={this.dropOctave}>-</li>
//         </ul>
//         <ul className="release">
//           <li onClick={this.boostRelease}>+</li>
//           <li>Release</li>
//           <li onClick={this.diminishRelease}>-</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Zkeys;
