import React from "react";
import * as Tone from "tone";
<<<<<<< HEAD

=======
>>>>>>> 61c9b945a65ce56540a9bb54705c0cfbdc635a63
import Zkeys from "./Zkey";

const Zsynth = (props) => {
  console.log(props);
  var zsynth = new Tone.Synth().toMaster();

  return <Zkeys zNotes={props.zNotes} zsynth={zsynth} />;
};

export default Zsynth;
