const playButton = document.querySelector('.play-sounds');
const stopButton = document.querySelector('.stop-sounds');

const audioCtx = new (window.AudioContext || window.webkitAudioContext);

const sineA = audioCtx.createOscillator();
sineA.frequency.value = 240;
sineA.type = "sine";

const sineB = audioCtx.createOscillator();
sineB.frequency.value = 723.25;
sineB.type = "sine";

const sineC = audioCtx.createOscillator();
sineC.frequency.value = 689.46;
sineC.type = "sine";


const playSounds = () => {
  sineA.start()
  sineA.connect(audioCtx.destination);
  sineB.start()
  sineB.connect(audioCtx.destination);
  sineC.start()
  sineC.connect(audioCtx.destination);
}

const stopSounds = () => {
  sineA.stop();
  sineB.stop();
  sineC.stop();
}

playButton.addEventListener('click', playSounds);
stopButton.addEventListener('click', stopSounds);