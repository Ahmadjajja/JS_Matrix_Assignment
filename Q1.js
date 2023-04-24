// Assume a matrix P m x n  exists. Copy the matrix row by row in a one dimentional vector V

// Example: 
// A = [
// [12, -3, 2, 14],
// [11, -2, -8, 4],
// [3, 0, 0, -5]
// ] 

// V = [12, -3, 2, 14,11, -2, -8, 4, 3, 0, 0, -5] 

const P = [
    [12, -3, 2, 14],
    [11, -2, -8, 4],
    [3, 0, 0, -5]
  ];
  
  const V = [];
  
  for (let i = 0; i < P.length; i++) {
    for (let j = 0; j < P[i].length; j++) {
      V.push(P[i][j]);
    }
  }
  
  console.log(`P = ${JSON.stringify(P)}`);
  console.log(`V = ${JSON.stringify(V)}`);
  