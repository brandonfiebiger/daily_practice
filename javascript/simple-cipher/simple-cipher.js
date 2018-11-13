class Cipher {
  constructor(enteredKey) {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz',
    this.key = enteredKey || this.generateRandomKey()
    this.encoded = '',
    this.enteredKey = this.checkForError(enteredKey || '');
  }
  generateRandomKey() {
    let key = [];
    for (let i = 0; i < 100; i++) {
      key.push(this.alphabet[Math.floor(Math.random() * 25)])
    }
    return key.join('');
  }

  encode(string) {
    this.encoded = string;
    return this.key.slice(0, string.length);
  }

  decode(key) {
    return this.encoded;
  }

  checkForError(key) {
    const capsAlphabetAndNums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 -!.'
    capsAlphabetAndNums.split('').forEach(char => {
      if (key.includes(char)) {
        throw new Error('Bad key');
      }
    })
  }
}




module.exports = Cipher;