export class Flattener {
  constructor() {
   
  }

  flatten (arr) { 
    const results = [];

    arr.filter(el => el).forEach(element => {
      if (typeof element === 'object') {
        results.push(...element.filter(indecy => indecy));
      } else {
        results.push(element);
      }
    })
    console.log(results);

  //   arr.forEach(element => {
  //     if (!element) {
  //       ''
  //     } else if (typeof element == 'object') {
  //       element.forEach(num => num ? results.push(num) : '');
  //     } else {
  //       results.push(element);
  //     }
  // });
  // return results
}

}