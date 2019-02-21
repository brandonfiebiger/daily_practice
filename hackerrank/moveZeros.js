const moveZeros = function (arr) {
  const filteredZeros = arr.filter(element => element === 0);
  const otherElements = arr.filter(element => element !== 0);
  
  return [...otherElements, ...filteredZeros]
}