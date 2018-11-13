const getRows = (matrix) => {
  const splitMatrix = matrix.split(`\n`)
  const answerMatrix = splitMatrix.map(row => row.split(' ').map(num => parseInt(num)));
  return answerMatrix;
}

const getColumns = (rows) => {
  let columns = [];
  for (let i = 0; i < rows.length; i++) {
    let column = [];
    for (let j = 0; j < rows[i].length; j++) {
      if (!columns[j]) {
        columns.push([rows[i][j]])
      } else {
        columns[j].push(rows[i][j])
      }
    }
  }
  return columns
}


export default class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = getRows(this.matrix);
    this.columns = getColumns(this.rows);
  }

  
}