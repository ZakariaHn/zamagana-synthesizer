import React, { Fragment } from "react";

const ZreverbController = (props) => {
  const { zRev, setZrev } = props;

  const handleDecayIncrease = () => {
    setZrev({ ...zRev, decay: zRev.decay + 1 });
  };

  const handleDecayDecrease = () => {
    setZrev({ ...zRev, decay: zRev.decay - 0.5 });
  };

  const handlePreDelayIncrease = () => {
    setZrev({ ...zRev, preDelay: zRev.preDelay + 1 });
  };

  const handlePreDelayDecrease = () => {
    setZrev({ ...zRev, preDelay: zRev.preDelay - 1 });
  };

  return (
    <Fragment>
      <div className="reverb-control">
        <ul className="reverb-decay">
          <li onClick={handleDecayIncrease}>+</li>
          <li>decay{props.zRev.decay}</li>
          <li onClick={handleDecayDecrease}>-</li>
        </ul>
        <ul className="reverb-preDelay">
          <li onClick={handlePreDelayIncrease}>+</li>
          <li>preDelay{props.zRev.preDelay}</li>
          <li onClick={handlePreDelayDecrease}>-</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default ZreverbController;
