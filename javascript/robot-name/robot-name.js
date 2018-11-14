
const createName = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  let letters = [];
  let numbersArray = [];
  for (let i = 0; i < 2; i++) {
    letters.push(alphabet[Math.floor(Math.random() * 25)])
  }
  for (let i = 0; i < 3; i++) {
    numbersArray.push(numbers[Math.floor(Math.random() * 9)])
  }
  return letters.join('') + numbersArray.join('');
}

export default class Robot {
  constructor() {
    this.name = createName()
  }
  reset() {
    this.name = createName()
  }
}