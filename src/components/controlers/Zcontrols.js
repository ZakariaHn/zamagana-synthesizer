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
      <ZvolumeControler zVol={zVol} setZvol={setZvol} />
      <ZReleaseController zRel={zRel} setZrel={setZrel} />
      <ZOctaveController zOct={zOct} setZoct={setZoct} />
      <ZreverbController zRev={zRev} setZrev={setZrev} />
      <ZwaveFormController setZosc={setZosc} />
      <ZdelayController setZdel={setZdel} zDel={zDel} />
      <ZvibratoController zVib={zVib} setZvib={setZvib} />
      <ZphaserController zPhs={zPhs} setZphs={setZphs} />
      <ZenvelopControllers
        zEnv={zEnv}
        setZenv={setZenv}
        zDefault={zDefault}
        setZdefault={setZdefault}
        modalIsOpen={modalIsOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
};

export default Zcontrols;
