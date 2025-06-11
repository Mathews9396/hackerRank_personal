const { count } = require("node:console");
const fs = require("node:fs");
const readLine = require("readline");
const readStream = fs.createReadStream("./testCase_countingSort.txt", {
  encoding: "utf-8",
});

// fs.readFile('./testCase_countingSort.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log(data[0]);

//     }
// })

// readStream.on('data', (chunk) => {
//     console.log(`chunk - ${chunk}`);
// })
// readStream.on('end', () => {
//      console.log('End of file.');
// })
// readStream.on('error', (err) => {
//      console.error('Error reading file:', err);
// })

async function readDataFromFile() {
  const rl = readLine.createInterface({
    input: readStream,
    crlfDelay: Infinity, // handles \r\n or \n line endings
  });

  let lineCount = 0;
  let inputArr = [],
    n;

  return new Promise((resolve, reject) => {
    rl.on("line", (line) => {
      lineCount++;
      if (lineCount == 1) {
        console.log(line.trim());

        n = parseInt(line.trim());
      } else if (lineCount == 2) {
        inputArr = line.trim().split(/\s+/).map(Number);
        rl.close(); // Stop reading after second line if you want only that
      }
    });
    rl.on("close", () => {
      console.log("Done reading second line.");
      resolve([n, inputArr]);
    });
  });
}

function getFreqArray(inputArr) {
  const resultArr = new Array(100).fill(0);

  for (let i = 0; i < inputArr.length; i++) {
    resultArr[inputArr[i]] += 1;
  }
  return resultArr;
}

async function main() {
  //find frequency array
  const [n, inputArr] = await readDataFromFile();
  const freqArr = getFreqArray(inputArr);

  const sortedArr = [];

  for (let i = 0; i < n; i++) {
    if (freqArr[i] == 0) continue;
    else if (freqArr[i] == 1) sortedArr.push(i);
    else {
      let count = freqArr[i];
      while (count > 0) {
        sortedArr.push(i);
        count--;
      }
    }
  }
 
fs.writeFile('array.txt', JSON.stringify(sortedArr), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
}

main();
