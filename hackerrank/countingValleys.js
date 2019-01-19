const countingValleys = (steps) => {
  let level = 0;
  let isInValley = false;
  let valleyAmount = 0;

  steps.split('').forEach(step => {
      step === 'D' ? level-- : level++;

      if (!isInValley && level < 0) {
          isInValley = true;
          valleyAmount++
      } else if (level >= 0) {
          isInValley = false;
      }
  })
  return valleyAmount;
}