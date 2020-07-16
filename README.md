# Zamagana Synth

#### a project by Marcelo, Zakaria, Nathan and Gabriela

## Main task division

- Marcelo: CSS
- Zakaria: React.JS/ Tone.js
- Nathan: React.JS/ Tone.js/ Css
- Gabriela: Project Management

## Features

- Preset button
- controllers:
  - Octaver
  - reverb 
  - delay 
  - phaser 
  - release 
  - vibratto 
  - envelop 
    - attack 
    - decay 
    - sustain 
    - release 
    - reset button

## Future workpplans
- Sampler 
- Sequncer 
- Pop-up window for controllers 
- Change Synth type menu 
- Musical scale highlighter (when the user choose a scale, the nots which build the scale get highlighted with a differnt color) 


 ## Zsynth.js (contains the effects imported from the library tone.js)

```javascript
  // Delay

  let zDelay = new Tone.FeedbackDelay({
    maxDelay: zDel.maxDelay,
    feedback: zDel.feedback,
  }).toMaster();

  // Reverb

  let zReverb = new Tone.JCReverb({
    roomSize: props.zRev.roomSize,
  }).toMaster();

  // Pahser

  let Zphaser = new Tone.Phaser({
    frequency: zPhs.frequency,
    octaves: zPhs.octaves,
    stages: zPhs.stages,
    Q: zPhs.Q,
    baseFrequency: zPhs.baseFrequency,
  }).toMaster();

  // Vibrato

  let Zvibrato = new Tone.Vibrato({
    frequency: zVib.frequency,
    depth: zVib.depth,
  }).toMaster();

  /*
   * assigning the Imported Synth to a the variable zsynth
   * assigning values to its oscillator & envelop from the state
   * connect the the effects to the synth using .chain() methode
   */

  let zsynth = new Tone.Synth({
    volume: zVol,
    oscillator: { type: zOsc },
    envelope: {
      attack: zEnv.attack,
      decay: zEnv.decay,
      sustain: zEnv.sustain,
      release: zEnv.release,
    },
  }).chain(zDelay, Zvibrato, Zphaser, zReverb);

```

## Interface

- Keyboard-looking keys
- Volume slider
- Reset all parameters button
- Octave slider
- controller sliders:
  - reverb controller
  - delay controller
  - phaser controller
  - release controller
  - vibratto controller
  - envelop controller
    - attack slider
    - decay slider
    - sustain slider
    - release slider
    - reset button
- Reset all parameters button
- Wave form controller drop-down list


![interface_img_1](/src/img/readme_img/interface.png)

## Technologies
- [JavaScript](https://www.javascript.com/)
- [ReactJs Library](https://reactjs.org/)
- [ToneJs Library](https://tonejs.github.io/)
- [Sass](https://sass-lang.com/)
- [React keyboard event handler](https://www.npmjs.com/package/react-keyboard-event-handler)

## References
- [Modulargrid](https://www.modulargrid.net/)
- [Learning Music Ableton](https://learningmusic.ableton.com/)
- [MDN Simple Synth](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth)
- [JS Piano Keyboard](https://www.freecodecamp.org/news/javascript-piano-keyboard/)
- [MDN Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## Project Structure

```
Zamagana Synth
│
│ README.md
| .gitignore
│ package.json
| package-lock.json
│
│
└───src
│   └───components
│   │    └───Zkey
│   │    └───Zsynth
│   │    └───controllers
│   │           └───controllers
│   │                └───controllers
│   │                │     └───ZenvelopController.js
│   │                └───Zcontrols (renders all other controllers)
│   │                └───ZdelayController.js
│   │                └───ZOctaveController.js
│   │                └───ZphaserController.js
│   │                └───ZreleaseController.js
│   │                └───ZreverbController.js
│   │                └───ZvibratoController.js
│   │                └───ZvolumeController.js
│   │                └───ZwaveFormController.js
│   │
│   │
│   └───App.js
│   └───index.js
│   └───helpers.js
│   └───scss
│   │     └───main
│   │     └───_base.scss
│   │     └───_controls.scss
│   │     └───_keyboard.scss
│   │     └───_normalize.scss
│   └───notes.json
│   └───defaultParameters.json
│
│
└───public
     └───index.html

```

## Progress

| date       | plans / achievements                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| 08.07.2020 | - think of the features we want for the app                                           |
|            | - create a github repository                                                          |
|            | - create a react project                                                              |
|            | - check the API and read the documentation                                            |
| 09.07.2020 | - click event to produce sound                                                        |
|            | - main app state --> how many octaves are in the keyboard                             |
|            | - notes: C-B                                                                          |
|            | - components : zcontrols, zsynth and zkeys                                            |
|            | -zkeys --> renders inside of zsynth in some kind of button that plays onClick         |
|            | -zcontrols--> pass an object and it will change the tone we will pass props into that |
|            | -zsynth--> main component                                                             |
| 13.07.2020 | - dropdown menu                                                                       |
|            | - connect the Zsynthtypeswitcher with the rest                                        |
|            | - option to modulate the shape of the wave                                            |
|            | - add it first in the Zkey component and then see how to split components             |
|            | - further components : zOsc, zVol, zNotes                                             |
|            | - envelop controller                                                                  |
| 14.07.2020 | - turn state into functional compornent                                               |
|            | - component folder --> zcontrols --> renders all the controls                         |
|            | - oscillator type                                                                     |
|            | - set up classNames                                                                   |
|            | - styling after classNames                                                            |
|            | - keyboard --> loading spinner                                                        |
|            | - presets default (all presets together in a file) --> defaultParameter json          |
|            | - more controllers                                                                    |
|            | - octave change controller                                                            |
| 15.07.2020 | - implement vibratto                                                                  |
|            | - reverb to slider                                                                    |
|            | - update reverb component                                                             |
|            | - pop up window                                                                       |
|            | - phaser                                                                              |
