class Cipher {
  constructor() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz',
    this.key = this.generateRandomKey()
    this.encoded = ''
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
}




module.exports = Cipher;