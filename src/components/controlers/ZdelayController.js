import React from "react";

const ZdelayController = (props) => {
  const { zDel, setZdel } = props;
  const incrementDelay = () => {
    setZdel({ ...zDel, feedback: zDel.feedback + 0.1 });
    console.log(zDel.feedback);
  };
  const decrementDelay = () => {
    setZdel({ ...zDel, feedback: zDel.feedback - 0.1 });
  };
  return (
    <div className="delay control">
      <ul>
        <li onClick={incrementDelay}>+</li>
        <li>Delay</li>
        <li onClick={decrementDelay}>-</li>
      </ul>
    </div>
  );
};

export default ZdelayController;
