// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

const sumOfDigits = function (digitInt) {
  let sum = 0;
  let digitStr = String(digitInt);
  for (let digit of digitStr) {
    sum += parseInt(digit);
  }
  return sum;
};

function superDigit(n, k) {
  // Write your code here
  if (parseInt(n) < 10) return parseInt(n);

  let superDigitSum = sumOfDigits(n) * k;

  return superDigit(superDigitSum, 1);
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

//     const n = firstMultipleInput[0];

//     const k = parseInt(firstMultipleInput[1], 10);

//     const result = superDigit(n, k);

//     ws.write(result + '\n');

//     ws.end();
// }

const result = superDigit(123, 3);
console.log(`Final output - ${result}`);
