class Beer {
  constructor() {

  }

  verse(num) {
    if (num === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, 99 bottles of beer on the wall.
      `;
    } else if (num === 1) {
      return `${num} bottle of beer on the wall, ${num} bottle of beer.
      Take it down and pass it around, no more bottles of beer on the wall.
      `
    } else {
      return `${num} bottle of beer on the wall, ${num} bottle of beer.
      Take it down and pass it around, ${num - 1} more bottles of beer on the wall.
      `
    }
  }
}

module.exports = Beer;