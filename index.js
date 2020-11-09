
// ------------KICK-----------------//
const kickdrum = document.getElementById("kick");

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      kickdrum.classList.add("active");
      playKickDrum(kickdrum);
    }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    kickdrum.classList.remove("active");
  }
});

function playKickDrum(element){
    const kickId = element.dataset.drum;
    const kickAudio = document.getElementById(kickId);
    kickAudio.currentTime = 0;
    kickAudio.play();
    kickAudio.addEventListener('ended', () => {
        kickdrum.classList.remove('active');
    });

}

// ------------SNARE -----------------//

const snaredrum = document.getElementById("snare");

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    snaredrum.classList.add("active");
    playSnare(snaredrum);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    snaredrum.classList.remove("active");
  }
});

function playSnare(element) {
  const snareId = element.dataset.drum;
  const snareAudio = document.getElementById(snareId);
  snareAudio.currentTime = 0;
  snareAudio.play();
  snareAudio.addEventListener("ended", () => {
    snaredrum.classList.remove("active");
  });
}


// ------------CLASH-----------------//

const crashdrum = document.getElementById("crash");

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown") {
    crashdrum.classList.add("active");
    playCrash(crashdrum);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowDown") {
    crashdrum.classList.remove("active");
  }
});

function playCrash(element) {
  const crashId = element.dataset.drum;
  const crashAudio = document.getElementById(crashId);
  crashAudio.currentTime = 0;
  crashAudio.play();
  crashAudio.addEventListener("ended", () => {
    crashdrum.classList.remove("active");
  });
}

// ------------TOM-----------------//

const tomdrum = document.getElementById("tom");

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    tomdrum.classList.add("active");
    playTom(tomdrum);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    tomdrum.classList.remove("active");
  }
});

function playTom(element) {
  const tomId = element.dataset.drum;
  const tomAudio = document.getElementById(tomId);
  tomAudio.currentTime = 0;
  tomAudio.play();
  tomAudio.addEventListener("ended", () => {
    tomdrum.classList.remove("active");
  });
}

// ---------------ARPS-----------------//

const cArp = document.getElementById("C-arp");

window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad1") {
    cArp.classList.add("activeArp");
    playCArp(cArp);
  }
});



function playCArp(element) {
  const arpId = element.dataset.arp;
  const arpAudio = document.getElementById(arpId);
  arpAudio.currentTime = 0;
  arpAudio.play();
  arpAudio.addEventListener("ended", () => {
    cArp.classList.remove("activeArp");
  });
}


//  ---------------Garp-----------------//
const gArp = document.getElementById("G-arp");

window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad2") {
    gArp.classList.add("activeArp");
    playGArp(gArp);
  }
});

function playGArp(element) {
  const arpId = element.dataset.arp;
  const arpAudio = document.getElementById(arpId);
  arpAudio.currentTime = 0;
  arpAudio.play();
  arpAudio.addEventListener("ended", () => {
    gArp.classList.remove("activeArp");
  });
}


//  ---------------Garp-----------------//
const aArp = document.getElementById("A-arp");

window.addEventListener("keydown", (event) => {
  if (event.code === "Numpad3") {
    aArp.classList.add("activeArp");
    playAArp(aArp);
  }
});

function playAArp(element) {
  const arpId = element.dataset.arp;
  const arpAudio = document.getElementById(arpId);
  arpAudio.currentTime = 0;
  arpAudio.play();
  arpAudio.addEventListener("ended", () => {
    aArp.classList.remove("activeArp");
  });
}


// light saber---
const csynth = document.getElementById("Bsaber");

csynth.addEventListener("mouseenter", () => {
    playCSynth(csynth);
  
});

function playCSynth(element) {
  const synthId = element.dataset.synth;
  const sythAudio = document.getElementById(synthId);
  sythAudio.currentTime = 0;
  sythAudio.play();
  
}

// -------- PIANO
const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whitekeys = document.querySelectorAll(".key.white");
const blackkeys = document.querySelectorAll(".key.black");


keys.forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("active");
    playNote(key);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  const element =
    blackKeyIndex >= 0
      ? blackkeys[blackKeyIndex]
      : whiteKeyIndex >= 0
      ? whitekeys[whiteKeyIndex]
      : null;

  if (element) {
    element.classList.add("active");
    playNote(element);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  const element =
    blackKeyIndex >= 0
      ? blackkeys[blackKeyIndex]
      : whiteKeyIndex >= 0
      ? whitekeys[whiteKeyIndex]
      : null;
  if (element) {
    element.classList.remove("active");
  }
});

function playNote(keyElement) {
  const noteAudio = document.getElementById(keyElement.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  //white.classList.add('active');
  //black.classList.add('active');
  noteAudio.addEventListener("ended", () => {
    keyElement.classList.remove("active");
  });
}


// --------
const fChord = document.querySelector(".f-chord");
fChord.addEventListener("mouseenter", () => {
  playFChord(fChord);
  fChord.classList.add("active");
});

fChord.addEventListener("mouseleave", () => {
  fChord.classList.remove("active");
});

function playFChord(chordElement) {
  const idOfRelatedAudioElement = chordElement.dataset.chord;
  const chordAudioF = document.getElementById(idOfRelatedAudioElement);
  chordAudioF.currentTime = 0;
  chordAudioF.play();
  chordAudioF.addEventListener("ended", () => {
    fChord.classList.remove("active");
  });
}

const aChord = document.querySelector(".a-chord");
aChord.addEventListener("mouseenter", () => {
  playAChord(aChord);
  aChord.classList.add("active");
});

aChord.addEventListener("mouseleave", () => {
  aChord.classList.remove("active");
});

function playAChord(chordElement) {
  const idOfRelatedAudioElement = chordElement.dataset.chord;
  const chordAudioA = document.getElementById(idOfRelatedAudioElement);
  chordAudioA.currentTime = 0;
  chordAudioA.play();
  chordAudioA.addEventListener("ended", () => {
    aChord.classList.remove("active");
  });
}

const cChord = document.querySelector(".c-chord");
cChord.addEventListener("mouseenter", () => {
  playCChord(cChord);
  cChord.classList.add("active");
});

cChord.addEventListener("mouseleave", () => {
  cChord.classList.remove("active");
});

const gChord = document.querySelector(".g-chord");
gChord.addEventListener("mouseenter", () => {
  playGChord(gChord);
  gChord.classList.add("active");
});

gChord.addEventListener("mouseleave", () => {
  gChord.classList.remove("active");
});

function playGChord(chordElement) {
  const idOfRelatedAudioElement = chordElement.dataset.chord;
  const chordAudioG = document.getElementById(idOfRelatedAudioElement);
  chordAudioG.currentTime = 0;
  chordAudioG.play();
  chordAudioG.addEventListener("ended", () => {
    gChord.classList.remove("active");
  });
}

function playCChord(chordElement) {
  const idOfRelatedAudioElement = chordElement.dataset.chord;
  const chordAudioC = document.getElementById(idOfRelatedAudioElement);
  chordAudioC.currentTime = 0;
  chordAudioC.play();
  chordAudioC.addEventListener("ended", () => {
    cChord.classList.remove("active");
  });
}

const bassNote = document.querySelector(".note-e");
bassNote.addEventListener("click", () => {
  bassNote.classList.add("active");
  playBass(bassNote);
});

const bassNoteG = document.querySelector(".note-g");
bassNoteG.addEventListener("click", () => {
  bassNoteG.classList.add("active");
  playBassG(bassNoteG);
});

function playBassG(bassElement) {
  const idOfRelatedAudioElement = bassElement.dataset.bass;
  const bassAudioG = document.getElementById(idOfRelatedAudioElement);
  bassAudioG.currentTime = 0;
  bassAudioG.play();
  bassAudioG.addEventListener("ended", () => {
    bassNoteG.classList.remove("active");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    bassNoteG.classList.add("active");
    playBassG(bassNoteG);
  }
});

const bassnoteD = document.querySelector(".note-d");
bassnoteD.addEventListener("click", () => {
  bassnoteD.classList.add("active");
  playBassD(bassnoteD);
});

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 40) {
    bassnoteD.classList.add("active");
    playBassD(bassnoteD);
  }
});

function playBassD(bassElement) {
  const idOfRelatedAudioElement = bassElement.dataset.bass;
  const bassAudioD = document.getElementById(idOfRelatedAudioElement);
  bassAudioD.currentTime = 0;
  bassAudioD.play();
  bassAudioD.addEventListener("ended", () => {
    bassnoteD.classList.remove("active");
  });
}

const bassNoteA = document.querySelector(".note-a");
bassNoteA.addEventListener("click", () => {
  bassNoteA.classList.add("active");
  playBassA(bassNoteA);
});

function playBassA(bassElement) {
  const idOfRelatedAudioElement = bassElement.dataset.bass;
  const bassAudioA = document.getElementById(idOfRelatedAudioElement);
  bassAudioA.currentTime = 0;
  bassAudioA.play();
  bassNoteA.classList.add("active");
  bassAudioA.addEventListener("ended", () => {
    bassNoteA.classList.remove("active");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 38) {
    bassNoteA.classList.add("active");
    playBassA(bassNoteA);
  }
});

function playBass(bassElement) {
  const idOfRelatedAudioElement = bassElement.dataset.bass;
  const bassAudio = document.getElementById(idOfRelatedAudioElement);
  bassAudio.currentTime = 0;
  bassAudio.play();
  bassNote.classList.add("active");
  bassAudio.addEventListener("ended", () => {
    bassNote.classList.remove("active");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    bassNote.classList.add("active");
    playBass(bassNote);
  }
});