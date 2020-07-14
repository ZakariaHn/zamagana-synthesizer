import React from "react";
const ZreverbController = (props) => {
  return (
    <div className="reverb-control">
      <ul className="reverb-decay">
        <li
          onClick={() =>
            props.setZrev({ ...props.zRev, decay: props.zRev.decay + 0.5 })
          }
        >
          +
        </li>
        <li>decay{props.zRev.decay}</li>
        <li
          onClick={() =>
            props.setZrev({ ...props.zRev, decay: props.zRev.decay - 0.5 })
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
              preDelay: props.zRev.preDelay + 0.01,
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
              preDelay: props.zRev.preDelay - 0.01,
            })
          }
        >
          -
        </li>
      </ul>
    </div>
  );
};

export default ZreverbController;
