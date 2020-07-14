import React from "react";

const Zcontrols = () => {
  return (
    <div className="controllers">
      <ZvolumeControler zVol={zVol} setZvol={setZvol} />
      <ZReleaseController zRel={zRel} setZrel={setZrel} />
      <ZOctaveController zOct={zOct} setZoct={setZoct} />
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
