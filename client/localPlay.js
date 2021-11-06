const helloAudio = new Audio(`../audio/hello.mp3`);
const c4Audio = new Audio(`../audio/c4.mp3`);
const cSharp4Audio = new Audio(`../audio/cSharp4.mp3`);
const d4Audio = new Audio(`../audio/d4.mp3`);
const dSharp4Audio = new Audio(`../audio/dSharp4.mp3`);
const e4Audio = new Audio(`../audio/e4.mp3`);
const f4Audio = new Audio(`../audio/f4.mp3`);
const fSharp4Audio = new Audio(`../audio/fSharp4.mp3`);
const g4Audio = new Audio(`../audio/g4.mp3`);
const gSharp4Audio = new Audio(`../audio/gSharp4.mp3`);
const a4Audio = new Audio(`../audio/a4.mp3`);
const aSharp4Audio = new Audio(`../audio/aSharp4.mp3`);
const b4Audio = new Audio(`../audio/b4.mp3`);
const c5Audio = new Audio(`../audio/c5.mp3`);

export const localPlay = (note) => {
    console.log("note", note);
    switch (note) {
      case "hello":
        return helloAudio.play();
      case "C-4":
        return c4Audio.play();
      case "Db/C#-4":
        return cSharp4Audio.play();
      case "D-4":
        return d4Audio.play();
      case "Eb/D#-4":
        return dSharp4Audio.play();
      case "E-4":
        return e4Audio.play();
      case "F-4":
        return f4Audio.play();
      case "Gb/F#-4":
        return fSharp4Audio.play();
      case "G-4":
        return g4Audio.play();
      case "Ab/G#-4":
        return gSharp4Audio.play();
      case "A-4":
        return a4Audio.play();
      case "Bb/A#-4":
        return aSharp4Audio.play();
      case "B-4":
        return b4Audio.play();
      case "C-5":
        return c5Audio.play();
      default:
        return console.log("default case");
    }
  };