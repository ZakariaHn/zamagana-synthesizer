import React from "react";
import * as Tone from "tone";
import znotes from "../notes.json";

const Keys = (props) => {
  return znotes.map((key) => <button onClick={props.play}>{key}</button>);
};

export default Keys;
