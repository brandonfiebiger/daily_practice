export const isPangram = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let pangramCheck = true;
  alphabet.split('').forEach(letter => {
    if (!sentence.includes(letter.toLowerCase()) && !sentence.includes(letter.toUpperCase())) {
      pangramCheck = false;
    }
  })
  return pangramCheck;
}