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
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 *
 * loop through array, use index 0 as start for now
 *   keep track of 2 pointers, i and i + 1
 *   if arr[i] != arr[i + 1] and arr[i] != start => SWAP
 *     swap - update 2 pointers (decrement by 1), inc swapCount
 *
 * 8/13 tests passed - may be the way we're picking the ends?
 */

function minMoves(arr) {
    // Write your code here
    if (arr.length === 0) return 0;
    let swapCount = 0;

    const start = whichIsStart(arr);
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] !== arr[i + 1] && arr[i] !== start) {
            swap(arr, i, i + 1);
            swapCount++;
            i -= 2;
        }
    }
    return swapCount;
}

// helper swap function
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// helper function - returns 0 or 1 depending
// on which one should start
// function sees if majority of start is 0 or 1
function whichIsStart(arr) {
    const mid = Math.floor((arr.length-1)/2);
    const firstHalf = {1: 0, 0: 0};
    for (let i = 0; i < mid; i++) {
        firstHalf[arr[i]]++;
    }

    const secHalf = {1: 0, 0:0}
    for (let i = mid; i < arr.length-1; i++) {
        secHalf[arr[i]]++;
    }

    if (firstHalf[0] > secHalf[0] && firstHalf[1] < secHalf[1]) {
        return 0;
    } else {
        return 1;
    }

}


// [1, 1, 1, 1, 0, 1, 0, 1]

// 0s = 2
// 1s = 6
// moves 1 = 3
// moves 0 = 9

// Time = O(n)
// Space = O(1)
const minMovesSolution = (arr) => {
    // calculate moves if 1 is on left and compare with moves if 0 is on left
    // return the lesser

    let zeroes = 0;
    let ones = 0;

    // moves to get zero to left side, or one to left side
    let movesZero = 0;
    let movesOne = 0;

    // go through array
    for (let num of arr) {
        if (num === 0) {
            // for each zero we hit, see how many moves we need to make with ones
            // whenever we hit a zero, can switch it out with one
            zeroes += 1; // add to zero count
            movesZero += ones; // add
        } else {
            ones += 1; // add to ones count
            movesOne += zeroes;
        }
    }

    return Math.min(movesZero, movesOne);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = minMoves(arr);

    ws.write(result + '\n');

    ws.end();
}
