// Assume a matrix A m x n  exists. Copy the matrix in a new matrix B m x n by swapping all values of rows and columns. In other words, A(i, j) = B(j, i)

// Example: 
// A = [
// [12, -3, 2, 14],
// [11, -2, -8, 4],
// [3, 0, 0, -5]
// ] 

// B = [
// [12, 11, 3],
// [-3, -2, 0],
// [2, -8, 0],
// [14, 4, -5]
// ] 

const A = [
    [12, -3, 2, 14],
    [11, -2, -8, 4],
    [3, 0, 0, -5]
  ];
  
  const m = A.length;
  const n = A[0].length;
  
  const B = [];
  
  for (let j = 0; j < n; j++) {
    const row = [];
  
    for (let i = 0; i < m; i++) {
      row.push(A[i][j]);
    }
  
    B.push(row);
  }
  
  console.log(`A = ${JSON.stringify(A)}`);
  console.log(`B = ${JSON.stringify(B)}`);
  