import React, { Fragment } from "react";

const ZdelayController = (props) => {
  const { zDel, setZdel } = props;
  const handleDelay = (e) => {
    setZdel({ ...zDel, feedback: e.target.value });
    console.log(zDel);
  };

  return (
    <Fragment>
      <div className="delay control">
        Delay
        <input
          type="range"
          min={0.1}
          max={1}
          value={zDel.feedback}
          onChange={handleDelay}
          step="0.1"
        />
      </div>
    </Fragment>
  );
};

export default ZdelayController;
