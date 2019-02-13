const timer = document.querySelector('.timer');
const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');


userInput.addEventListener('keyup', () => timer.innerText = userInput.value);


const startTimer = () => {
  let num = parseInt(timer.innerText);
  if (num == 0) {
    clearInterval(interval);
    return alert('timer completed');
  }

  num--;
  timer.innerText = num;
}


let interval;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  interval = setInterval(startTimer, 1000)
});

