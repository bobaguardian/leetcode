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
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 *
 * have an object to keep track of number of closed
 * paths for each digit
 *
 * for each digit, get the digit (mod 10), get the num of
 * closed paths for that digit using the object mapping
 * and add that num to the total
 *
 * return the total
 */

function closedPaths(number) {
    // convert the number to positive
    number = Math.abs(number);
    const closedPathsMap = {
        '0': 1,
        '4': 1,
        '6': 1,
        '8': 2,
        '9': 1
    };
    let total = 0;
    let digit = null;

    while (number > 0) {
        digit = number % 10;
        if (closedPathsMap[digit.toString()]) {
            total += closedPathsMap[digit.toString()];
        }

        number = Math.floor(number / 10);
    }

    return total;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const number = parseInt(readLine().trim(), 10);

    const result = closedPaths(number);

    ws.write(result + '\n');

    ws.end();
}
