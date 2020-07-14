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
    <ul className="delay">
      <li onClick={incrementDelay}>+</li>
      <li>Delay</li>
      <li onClick={decrementDelay}>-</li>
    </ul>
  );
};

export default ZdelayController;
