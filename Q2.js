// Assume a matrix P m x n  exists. Copy the matrix column by column in a one dimentional vector V

// Example: 
// A = [
// [12, -3, 2, 14],
// [11, -2, -8, 4],
// [3, 0, 0, -5]
// ] 

// V = [12, 11, 3, -3, -2, 0,  2, -8, 0, 14, 4, -5] 

const P = [
    [12, -3, 2, 14],
    [11, -2, -8, 4],
    [3, 0, 0, -5]
  ];
  
  const m = P.length;
  const n = P[0].length;
  
  const V = [];
  
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      V.push(P[i][j]);
    }
  }
  
  console.log(`P = ${JSON.stringify(P)}`);
  console.log(`V = ${JSON.stringify(V)}`);
  