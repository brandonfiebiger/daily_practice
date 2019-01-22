const jumpingOnClouds = clouds => {
  let counter = 0;

  for (let i = 0; i < clouds.length - 1; i++) {
      if (clouds[i + 2] < 1) {
          i++;
          counter++
      } else {
          counter++;
      }
  }
  return counter

}
