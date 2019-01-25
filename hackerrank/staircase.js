const staircase = (n) => {

  for (let i = 1; i <= n; i++) {
      let step = '';

      for (let j = 0; j < n; j++) {
          if ((n - i) <= j) {
              step += '#';
          } else {
              step += ' ';
          }
      }
      console.log(step);
  }
}