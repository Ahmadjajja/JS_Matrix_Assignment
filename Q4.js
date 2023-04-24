// A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself.

// For example, the first few prime numbers are:

// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// And so on. These numbers have no positive integer divisors other than 1 and themselves, and therefore are considered prime numbers.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function createMatrixP(m, n, A) {
  let P = new Array(m);
  for (let i = 0; i < m; i++) {
    P[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      P[i][j] = isPrime(A[i][j]);
    }
  }
  return P;
}

// let m = 3;
// let n = 4;

// let m = prompt("Enter a number:");
// let n = prompt("Enter a number:");

// let A = [
//   [12, -3, 2, 14],
//   [11, -2, -8, 4],
//   [3, 0, 0, -5],
// ];

// let P = createMatrixP(m, n, A);
// console.log(P);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter m and n (separated by a space): ", (input) => {
  const [m, n] = input.split(" ").map(Number);
  const A = [];

  console.log(`Enter the elements of the ${m}x${n} matrix:`);

  let row = 1;

  function promptForRow() {
    readline.question(
      `Enter the elements of row ${row} (separated by spaces): `,
      (input) => {
        const rowElements = input.split(" ").map(Number);

        if (rowElements.length !== n) {
          console.log(
            `Error: expected ${n} elements but found ${rowElements.length}`
          );
          promptForRow();
        } else {
          A.push(rowElements);
          row++;

          if (row > m) {
            console.log(`A = ${JSON.stringify(A)}`);
            let P = createMatrixP(m, n, A);
            console.log(P);
            readline.close();
          } else {
            promptForRow();
          }
        }
      }
    );
  }

  promptForRow();
});
