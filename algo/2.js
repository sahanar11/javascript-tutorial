process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
 input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Readme: echo -e "Hello\nworld" | node 2.js
//          cat input.txt | node 2.js
function main() {
    console.log(readLine());
    console.log(readLine());
    console.log(readLine());
    console.log(readLine());
    console.log(readLine());
    console.log(readLine());
}
