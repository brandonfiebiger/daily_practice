export const accumulate = (array, accumulator) => {
  return array.map(currentElement => accumulator(currentElement));
}