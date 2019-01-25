const compareTriplets = (a, b) => {
  let results = [0, 0];

  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          results[0]++;
      } else if (a[i] < b[i]) {
          results[1]++;
      }
  }
  return results;
}