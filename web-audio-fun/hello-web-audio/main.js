const playButton = document.querySelector('.play-sounds');
const stopButton = document.querySelector('.stop-sounds');
const delayButton = document.querySelector('.add-delay');

const audioCtx = new (window.AudioContext || window.webkitAudioContext);
const synthDelay = audioCtx.createDelay(10.0);

const sineA = audioCtx.createOscillator();
sineA.frequency.value = 240;
sineA.type = "sine";

const sineB = audioCtx.createOscillator();
sineB.frequency.value = 333.25;
sineB.type = "sine";

const sineC = audioCtx.createOscillator();
sineC.frequency.value = 289.46;
sineC.type = "sine";


const playSounds = () => {
  sineA.start()
  sineA.connect(audioCtx.destination);
  setTimeout(() => {
    sineA.stop();
    sineB.start()
    sineB.connect(audioCtx.destination);
  }, 5000);

  setTimeout(() => {
    sineB.stop();
    sineC.start()
    sineC.connect(audioCtx.destination);
  }, 10000);
}

const startDelay = () => {
  sineA.connect(synthDelay);
  sineB.connect(synthDelay);
  synthDelay.connect(audioCtx.destination);
}

const stopSounds = () => {
  sineA.stop();
  sineB.stop();
  sineC.stop();
}

playButton.addEventListener('click', playSounds);
stopButton.addEventListener('click', stopSounds);
delayButton.addEventListener('click', startDelay);