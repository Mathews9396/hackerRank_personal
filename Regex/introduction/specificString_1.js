// sample input
// The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers.
const sampleInput1 =
  "The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers.";
//another sample input
// hackerrank is a place to learn and practice coding. hackerrank is also a platform for companies to find and hire top engineers. hackerrank is the best place to learn coding and improve your skills. hackerrank is a great place to practice coding and prepare for interviews.
const sampleInput2 =
  "hackerrank is a place to learn and practice coding. hackerrank is also a platform for companies to find and hire top engineers. hackerrank is the best place to learn coding and improve your skills. hackerrank is a great place to practice coding and prepare for interviews.";
  const sampleInput3 =
  "hackerrank is a platform for programmers to learn and practice coding. hackerrank is also a place for companies to find and hire top engineers. hackerrank is the best place to learn coding and improve your skills. hackerrank is a great place to practice coding and prepare for interviews.";
// yet another sample input
// hackerrank is a platform for programmers to learn and practice coding. hackerrank is also a place for companies to find and hire top engineers. hackerrank is the best place to learn coding and improve your skills. hackerrank is a great place to practice coding and prepare for interviews.
var Regex_Pattern = "hackerrank";

function processData(Test_String) {
  //Enter your code here
  var Regex = new RegExp(Regex_Pattern, "g");
  var Array = Test_String.match(Regex);
  if(!Array) {
    Array = [];
  }
  console.log("Number of matches :", Array.length);
}

function main() {
  // The main function is not needed in this case, as we are directly calling processData
  process.stdin.resume(); //this line is used to start reading input from stdin, Eg - The program is live and ready to accept input

  process.stdin.setEncoding("ascii"); //this line is used to set the encoding of the input to ascii, which is a character encoding standard

  _input = ""; //
  process.stdin.on("data", function (input) {
    _input += input;
  });

  process.stdin.on("end", function () {
    processData(_input);
  });
}

// main();

processData(sampleInput1);
