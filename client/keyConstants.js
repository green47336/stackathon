const keys = [
    "C-4",
    "Db/C#-4",
    "D-4",
    "Eb/D#-4",
    "E-4",
    "F-4",
    "Gb/F#-4",
    "G-4",
    "Ab/G#-4",
    "A-4",
    "Bb/A#-4",
    "B-4",
    "C-5",
  ];

  const noteToKey = {
    "C-4": "s",
    "Db/C#-4": "e",
    "D-4": "d",
    "Eb/D#-4": "r",
    "E-4": "f",
    "F-4": "g",
    "Gb/F#-4": "y",
    "G-4": "h",
    "Ab/G#-4": "u",
    "A-4": "j",
    "Bb/A#-4": "i",
    "B-4": "k",
    "C-5": "l",
  };

  const keyToNote = {
    "s": "C-4",
    "e": "Db/C#-4",
    "d": "D-4",
    "r": "Eb/D#-4",
    "f": "E-4",
    "g": "F-4",
    "y": "Gb/F#-4",
    "h": "G-4",
    "u": "Ab/G#-4",
    "j": "A-4",
    "i": "Bb/A#-4",
    "k": "B-4",
    "l": "C-5"
  }

  export {keys, noteToKey, keyToNote}