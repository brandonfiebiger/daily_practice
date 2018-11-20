let Beer = {}
  

  Beer.verse = (num) => {
    if (num === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
    } else if (num === 2) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottle of beer on the wall.
`;
    } else if (num === 1) {
      return `${num} bottle of beer on the wall, ${num} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
    } else {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`
    }
  }

  Beer.sing = (start = 99, end = 0) => {
    let acc = '';
    for (let i = start; i >= end; i--) {
      if (i === end) {
        acc += Beer.verse(i);
      } else {
        acc +=  Beer.verse(i) + "\n";
      }
    }
    return acc;
  }

  module.exports = Beer

