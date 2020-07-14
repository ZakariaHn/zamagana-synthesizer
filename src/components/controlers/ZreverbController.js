import React, { Fragment } from "react";
const ZreverbController = (props) => {
  const { zRev, setZrev } = props;
  //   const handleReverb = (e) => {
  //     props.setZrev(e.target.value);
  //   };
  return (
    // <Fragment>
    //   <div className="reverbSliderTiltle">
    //     {" "}
    //     <div className="reverb-control">
    //       <input
    //         type="range"
    //         min={-4}
    //         max={4}
    //         value={props.zRev.decay}
    //         onChange={handleReverb}
    //       />{" "}
    //       <input
    //         type="range"
    //         min={-1}
    //         max={1}
    //         value={props.zRev.preDelay}
    //         onChange={handleReverb}
    //       />
    //     </div>
    //   </div>
    // </Fragment>

    <Fragment>
      <div className="reverb-control">
        <ul className="reverb-decay">
          <li
            onClick={() =>
              props.setZrev({
                ...props.zRev,
                decay: props.zRev.decay + 1,
              })
            }
          >
            +
          </li>
          <li>decay{props.zRev.decay}</li>
          <li
            onClick={() =>
              props.setZrev({
                ...props.zRev,
                decay: props.zRev.decay.value - 1,
              })
            }
          >
            -
          </li>
        </ul>
        <ul className="reverb-preDelay">
          <li
            onClick={() =>
              props.setZrev({
                ...props.zRev,
                preDelay: props.zRev.preDelay + 1,
              })
            }
          >
            +
          </li>
          <li>preDelay{props.zRev.preDelay}</li>
          <li
            onClick={() =>
              props.setZrev({
                ...props.zRev,
                preDelay: props.zRev.preDelay.value - 1,
              })
            }
          >
            -
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ZreverbController;
