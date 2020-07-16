import React from "react";
import ZOctaveController from "./ZOctaveController";
import ZReleaseController from "./ZreleaseControler";
import ZvolumeControler from "./ZvolumeController";
import ZwaveFormController from "./ZwaveFormController";
import ZreverbController from "./ZreverbController";
import ZdelayController from "./ZdelayController";
import ZenvelopControllers from "./evnelop_Controllers/ZenvelopController";
import ZvibratoController from "./ZvibratoController";
import ZphaserController from "./ZphaserController";

/*
   This component contains all the parameters controller for this Synth
   (volume, Release, ocatver, oscillator, Reverb, Delay, Vibrato, Phaser, Envelop)

*/
const Zcontrols = (props) => {
  const {
    zVol,
    setZvol,
    zRel,
    setZrel,
    zOct,
    setZoct,
    setZosc,
    zRev,
    setZrev,
    zDel,
    setZdel,
    zEnv,
    setZenv,
    zDefault,
    setZdefault,
    modalIsOpen,
    setModalOpen,
    zVib,
    setZvib,
    zPhs,
    setZphs,
  } = props;

  return (
    <div className="controllers">
      <div className="controlArea">
        <h5>Main Settings</h5>
        <ZvolumeControler zVol={zVol} setZvol={setZvol} />
        <ZReleaseController zRel={zRel} setZrel={setZrel} />
        <ZOctaveController zOct={zOct} setZoct={setZoct} />
        <ZwaveFormController setZosc={setZosc} />
      </div>
      <div className="controlArea">
        <h5>Envelope</h5>
        <ZenvelopControllers
          zEnv={zEnv}
          setZenv={setZenv}
          zDefault={zDefault}
          setZdefault={setZdefault}
          modalIsOpen={modalIsOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      <div className="controlArea">
        <h5>Effects</h5>
        <ZreverbController zRev={zRev} setZrev={setZrev} />
        <ZdelayController setZdel={setZdel} zDel={zDel} />
        <ZvibratoController zVib={zVib} setZvib={setZvib} />
        <ZphaserController zPhs={zPhs} setZphs={setZphs} />
      </div>
    </div>
  );
};

export default Zcontrols;
