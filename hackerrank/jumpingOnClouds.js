const jumpingOnClouds = clouds => {
  let counter = 0;

  for (let i = 0; i <= clouds.length; i++) {
      if (clouds[i + 2] === 0) {
          i = i + 2;
          counter++
      } else {
          counter++;
      }
  }

  return counter

}