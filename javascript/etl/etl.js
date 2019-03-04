export const transform = (oldData) => {
  const newObject = {};

  for (let key in oldData) {
    oldData[key].forEach(value => newObject[value.toLowerCase()] = parseInt(key));
  }

  return newObject;
}