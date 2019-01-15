

const arr = [[1, 2, 3, 0, 0, 0], 
            [4, 5, 6, 0, 0, 0], 
            [7, 8, 9, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0]];

// const arr =    [[-9, -9, -9,  1, 1, 1], 
//                 [0, -9,  0,  4, 3, 2], 
//                 [-9, -9, -9, 1, 2, 3], 
//                 [0,  0,  8,  6, 6, 0], 
//                 [0,  0,  0, -2, 0, 0], 
//                 [0,  0,  1,  2, 4, 0]];
const M = 6;
const N = 6;
var hourGlassSumVal = [];

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

// return zero 
const getHourGlass = (arr, i, j) => {
    const hourGlass = [];
    for (let k = 0; k < 3; k++) {
        const hourGlassRow = [];
        for (let l = 0; l < 3; l++) {
                hourGlassRow[l] = arr[i+k][j+l]; // index out of bound
        }
        hourGlass[k] = hourGlassRow;
    }
    hourGlass[1][0] = hourGlass[1][2] = 0;
    return hourGlass;

}

// func : given a array -> get the sum of elem
const findSumHourGlass = (h) => {
    let sum = 0;
    for (let i = 0; i < h.length; i++) {
        for (let j = 0; j < h[i].length; j++) {
            sum+= h[i][j];
        }
    }
    return sum;
}

const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let row = "";
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j] + ' ';
        }
        console.log(row);
    }
}

const callGetHourGlass = (arr,M,N) =>{
    for (let i = 0; i < M-2 ; i++) {
        for (let j = 0; j< N-2; j++) {
            const h = getHourGlass(arr, i, j);
            console.log("h is ", h);
            printArray(h);
            hourGlassSumVal.push(findSumHourGlass(h));
            console.log("\n");
        }
    }
}
const findLargest = (hourGlassSumVal) => {
    var largest = hourGlassSumVal[0];
    for (var i = 0; i < hourGlassSumVal.length; i++) {
        if (largest < hourGlassSumVal[i] ) {
            largest = hourGlassSumVal[i];
        }
    }
    return largest;
}
callGetHourGlass(arr,M,N);
console.log(hourGlassSumVal);
console.log("Output: Largest hour glass value : ",findLargest(hourGlassSumVal));

