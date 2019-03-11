const validParentheses = (parens) => {
  const stack = [];
  const opening = '(';
  const closing = ')';
  
  if (parens.length === 1) {
    return false;
  }
  
  if (parens.length % 2 !== 0) {
    return false;
  }
  
  for (let char of parens.split('')) {
    if (char === opening) {
      stack.push(char)
    } else if(char === closing) {
      if (!stack.pop()) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
} 