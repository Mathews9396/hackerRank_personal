"use strict";

const fs = require("fs");

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
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(arr) {
  // Write your code here
  const arrLength = arr.length;
  const revArr = [];
  for (let i = arrLength - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  console.log(revArr);
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const res = reverseArray(arr);

  // ws.write(res.join(' ') + '\n');

  // ws.end();
}
