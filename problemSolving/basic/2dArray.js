'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let maxSum = -64; //or we can use -Infinity
    //since the minimum hourglass sum is -9 * 7 = -63, we can initialize maxSum to -64
    //or we can use -Infinity to handle cases where all values are negative
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            const middle = arr[i + 1][j + 1];
            const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            const hourglassSum = top + middle + bottom;
            maxSum = Math.max(maxSum, hourglassSum);
        }
    }
    return maxSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
