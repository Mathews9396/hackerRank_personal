"use strict";

const { time, timeEnd } = require("console");
const fs = require("fs");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   // main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function reverseString(string, stringLen) {
  let reverseS = "";
  for (let i = stringLen - 1; i >= 0; i--) {
    reverseS += string[i];
  }
  return reverseS;
}

function palindromeIndex(s) {
  // Write your code here
  let sLen = s.length;

  if (s == reverseString(s, sLen)) return -1;
  let index;
  for (let i = 0, j = sLen - 1; i < j; i++, j--) {
    // console.log(i, j, s[i] != s[j], !index);

    if (s[i] != s[j] && !index) {
      let stringWithoutI = "",
        stringWithoutJ = "";
      for (let m = 0; m < sLen; m++) {
        if (m == i) {
          stringWithoutJ += s[m];
        } else if (m == j) stringWithoutI += s[m];
        else {
          stringWithoutJ += s[m];
          stringWithoutI += s[m];
        }
      }
      if (stringWithoutI == reverseString(stringWithoutI, sLen - 1)) return i;
      else if (stringWithoutJ == reverseString(stringWithoutJ, sLen - 1))
        return j;
    }
  }
  return -1;
}

function main() {
  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = palindromeIndex(s);
    console.log(`result - ${result}`);
  }
}

// let string = 'abcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcba'
let string = "aabdaa";
// abcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbxxbcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcbabcdeghijkjihgedcba
console.time("process");
const result = palindromeIndex(string);
console.log(`result \t\t ${result}`);
console.timeEnd("process");
