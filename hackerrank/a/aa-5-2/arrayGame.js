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
 * Complete the 'countMoves' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 *
 *
 * helper functions:
 * - areAllElementsEqual - boolean check to see if all elements are equal
 * - getMaxElementIndex - returns index of the max element of the numbers array
 * - incrementAllButOne - increments all values but the given index (mutating the array)
 *
 * Approach:
 * - call areAllElementsEqual - if true, return 0

 * - keep a iterationCount = 0
 * keep repeating until all elements are equal:
 * - get index of the max element in array using getMaxElementIndex
 * - call incrementAllButOne(passing in index from previous step)
 * - increment iterationCount
 * - check areAllElementsEqual (if true return iterationCount)
 *
 *
 *
 * [12, 12, 12, 12, 12]
 * iterationCt = 7
 * maxEleIdx = 3
 *
 * Time complexity depends on the difference in min and max numbers in the given array - worst case => large range
 * best case - they're all equal already
 */

function countMoves(numbers) {
    // Write your code here

    if (areAllElementsEqual(numbers)) return 0;

    let iterationCount = 0;
    while(!areAllElementsEqual(numbers)) {
        const maxEleIdx = getMaxElementIndex(numbers);
        incrementAllButOne(numbers, maxEleIdx);
        iterationCount++;
    }

    return iterationCount;

}

// Helper method - O(n) time, O(1) space
const incrementAllButOne = (nums, idx) => {
    for (let i = 0; i < nums.length; i++) {
        if (i !== idx) {
            nums[i]++;
        }
    }
}

// Helper method - O(n) time, O(1) space
const getMaxElementIndex = (nums) => {
    const maxEle = Math.max(...nums);
    return nums.indexOf(maxEle);
}


// Helper method - O(n) time, O(1) space
const areAllElementsEqual = (nums) => {
    const checker = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (checker !== nums[i]) return false;
    }

    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const result = countMoves(numbers);

    ws.write(result + '\n');

    ws.end();
}
