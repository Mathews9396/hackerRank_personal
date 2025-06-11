"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  if (arr.length > 5) {
    //reduce the array to 5 elements
    arr = arr.slice(0, 5);
  }
  arr = arr.sort((a, b) => a - b);
  
  const minSum = arr
    .slice(0, 4)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const maxSum = arr
    .slice(1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(minSum, maxSum);
  return;
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
