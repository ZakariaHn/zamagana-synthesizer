import React from "react";
import ZOctaveController from "./controlers/ZOctaveController";
import ZReleaseController from "./controlers/ZreleaseControler";
import ZvolumeControler from "./controlers/ZvolumeController";
import ZwaveFormController from "./controlers/ZwaveFormController";
import ZreverbController from "./controlers/ZreverbController";
import ZdelayController from "./controlers/ZdelayController";
import ZenvelopControllers from "./controlers/evnelop_Controllers/ZenvelopController";

const Zcontrols = (props) => {
  const {
    setZvol,
    setZrel,
    setZoct,
    setZosc,
    setZrev,
    maxDelay,
    feedback,
    zDel,
    setZdel,
    zEnv,
    setZenv,
    zVol,
    zRev,
    zRel,
    zOct,
  } = props;

  return (
    <div className="controllers">
      <ZvolumeControler zVol={zVol} setZvol={setZvol} />
      <ZReleaseController zRel={zRel} setZrel={setZrel} />
      <ZOctaveController zOct={zOct} setZoct={setZoct} />
      <ZreverbController zRev={zRev} setZrev={setZrev} />
      <ZwaveFormController setZosc={setZosc} />
      <ZdelayController
        maxDelay={maxDelay}
        feedback={feedback}
        setZdel={setZdel}
        zDel={zDel}
      />
      <ZenvelopControllers zEnv={zEnv} setZenv={setZenv}></ZenvelopControllers>
    </div>
  );
};

export default Zcontrols;
