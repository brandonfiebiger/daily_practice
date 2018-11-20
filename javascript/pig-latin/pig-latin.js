exports.translate = function(string) {
  const splitWords = string.split(' ');
  return splitWords.map(word => {
    const wordStarters = ['ch', 'thr', 'th', 'qu', 'sch', 'squ'];
    const vowelCheck = (/^[aeiou]$/i).test(word[0]);
    if (vowelCheck) {
      return word + 'ay';
    } else {
      for (const starter of wordStarters) {
        if (word.startsWith(starter)) {
          return word.slice(starter.length, word.length) + starter + 'ay';
        }
      }
      return word.slice(1, word.length) + word[0] + 'ay';
    }
  }).join(' ')
}
