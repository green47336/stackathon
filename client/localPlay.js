// const helloAudio = new Audio(`../audio/hello.mp3`);
// const c4Audio = new Audio(`../audio/c4.mp3`);
// const cSharp4Audio = new Audio(`../audio/cSharp4.mp3`);
// const d4Audio = new Audio(`../audio/d4.mp3`);
// const dSharp4Audio = new Audio(`../audio/dSharp4.mp3`);
// const e4Audio = new Audio(`../audio/e4.mp3`);
// const f4Audio = new Audio(`../audio/f4.mp3`);
// const fSharp4Audio = new Audio(`../audio/fSharp4.mp3`);
// const g4Audio = new Audio(`../audio/g4.mp3`);
// const gSharp4Audio = new Audio(`../audio/gSharp4.mp3`);
// const a4Audio = new Audio(`../audio/a4.mp3`);
// const aSharp4Audio = new Audio(`../audio/aSharp4.mp3`);
// const b4Audio = new Audio(`../audio/b4.mp3`);
// const c5Audio = new Audio(`../audio/c5.mp3`);
import * as Tone from 'tone'
import {Synth} from 'tone'
import {Piano} from '@tonejs/piano'

import {synth} from './keyConstants'


export const localPlay = (note) => {


    console.log("note", note);
    switch (note) {
      case "hello":
        return helloAudio.play();
      case "C-4":
        return synth.triggerAttackRelease("C4", "+0", 0, Math.random())
        //return c4Audio.play();
      case "Db/C#-4":
        return synth.triggerAttackRelease("C#4", "8n")
        //return cSharp4Audio.play();
      case "D-4":
        return synth.triggerAttackRelease("D4", "8n")
        //return d4Audio.play();
      case "Eb/D#-4":
        return synth.triggerAttackRelease("D#4", "8n")
        //return dSharp4Audio.play();
      case "E-4":
        return synth.triggerAttackRelease("E4", "8n")
        //return e4Audio.play();
      case "F-4":
        return synth.triggerAttackRelease("F4", "8n")
        //return f4Audio.play();
      case "Gb/F#-4":
        return synth.triggerAttackRelease("F#4", "8n")
        //return fSharp4Audio.play();
      case "G-4":
        return synth.triggerAttackRelease("G4", "8n")
        //return g4Audio.play();
      case "Ab/G#-4":
        return synth.triggerAttackRelease("G#4", "8n")
        //return gSharp4Audio.play();
      case "A-4":
        return synth.triggerAttackRelease("A4", "8n")
        //return a4Audio.play();
      case "Bb/A#-4":
        return synth.triggerAttackRelease("A#4", "8n")
        //return aSharp4Audio.play();
      case "B-4":
        return synth.triggerAttackRelease("B4", "8n")
        //return b4Audio.play();
      case "C-5":
        return synth.triggerAttackRelease("C5", "8n")
        //return c5Audio.play();
      default:
        return console.log("default case");
    }
  };