export const bracketPush = (string) => {
  const openings = ['(', '{', '['];
  const closings = [')', '}', ']'];
  const checkHash = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const stack = [];

  if (string.length === 1) {
    return false;
  }

  if (string.length % 2 !== 0) {
    return false;
  }

  for (let char of string.split('')) {
    if (openings.includes(char)) {
      stack.push(char);
    } else if (closings.includes(char)) {
      if (char !== checkHash[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

















// export const bracketPush = (string) => {
//   const stack = [];
//   const openings = ['{', '[', '('];
//   const closings = ['}', ']', ')'];
//   const checkHash = {
//     '{' : '}',
//     '(' : ')',
//     '[' : ']'
//   };
//   if (string.length <= 1) {
//     return false;
//   };

//   if (string.length % 2 !== 0) {
//     return false;
//   }

//   for (let char of string.split('')) {
//     if (openings.includes(char)) {
//       stack.push(char);
//     } else if (closings.includes(char)) {
//       if (char !== checkHash[stack.pop()]) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;

// }