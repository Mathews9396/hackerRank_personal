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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hours = parseInt(s.slice(0, 2), 10);
    const minutes = s.slice(3, 5);
    const seconds = s.slice(6, 8);
    const period = s.slice(8, 10);
    if(period == 'PM'){
        if(hours != 12) hours +=12; 
    }
    else if(period == 'AM'){
        console.log(hours);
        
        if(hours < 12){
            hours = `0${hours}`
        }
        else
        hours = '00';
    }
    // console.log(`${hours}:${minutes}:${seconds}`);
    
    return `${hours}:${minutes}:${seconds}`;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    // ws.write(result + '\n');

    // ws.end();
}
