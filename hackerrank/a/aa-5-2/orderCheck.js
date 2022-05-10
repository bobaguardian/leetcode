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
 * Complete the 'countStudents' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY height as parameter.
 *
 * [1, 1, 3, 3, 4, 1]
 * [1, 1, 1, 3, 3, 4]
 *
 *
 *
 * approach:
 * - create numStudents = 0
 * - store a sorted version of the heights array, ascending
 * - compare each index of the sorted with the original height array
 * - if they're not equal, increment numStudents
 *
 * SOLVED
 * Time O(n) - where n is the number of students
 * Space O(n) - where n is the number of students (keep a sorted array of the heights)
 */

function countStudents(height) {
    // Write your code here
    let numStudents = 0;
    const ogHeight = height.slice(0);
    height.sort((a, b) => a - b);

    for (let i = 0; i < height.length; i++) {
        if (ogHeight[i] !== height[i]) {
            numStudents++;
        }
    }

    return numStudents;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const heightCount = parseInt(readLine().trim(), 10);

    let height = [];

    for (let i = 0; i < heightCount; i++) {
        const heightItem = parseInt(readLine().trim(), 10);
        height.push(heightItem);
    }

    const result = countStudents(height);

    ws.write(result + '\n');

    ws.end();
}
