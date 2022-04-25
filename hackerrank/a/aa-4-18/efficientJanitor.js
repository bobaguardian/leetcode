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
 * Complete the 'efficientJanitor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts FLOAT_ARRAY weight as parameter.
 *
 * [1.01, 1.99, 2.5, 1.5, 1.01]
 * sorted => [1.01, 1.01, 1.5, 1.99, 2.5]
 * start = 1.01, end = 2.5, tripCount = 0
 * repeat until start >= end
 * check if start + end < 3: if not, take out end => end = 1.99, tripCount = 1
 * check if start + end < 3: 1.01 + 1.99 => yes, try adding another from start and check < 3 => no => start = 1.01 (2nd bag), end = 1.5, tripCount = 2
 * check start + end < 3: 1.01 + 1.5 it is => update start and ends check break condition, else try adding another and check
 *
 *
 * outside loop: return tripCount
 *
 * [1.01, 1.32, 1.991, 1.4]
 *
 *
 * time complexity - O(n) - iterating through weights
 * space complexity - O(1)
 */

function efficientJanitor(weight) {
    // Write your code here

    // sort the weights
    weight = weight.sort((a, b) => a-b);

    let start = 0;
    let end = weight.length - 1;
    let tripCount = 0;
    let sum = 0;

    while (start <= end) {
        // check to see if positions are equal break since its the last weight
        if (start === end && sum + weight[start] <= 3.00) {
            start++;
            tripCount++;
            break;
        }
        // check to see if start + end is within range, if it is add to sum to check in
        // next iteration
        else if (sum + weight[end] + weight[start] <= 3.00) {
            sum += weight[end] + weight[start];
            end--;
            start++;
        }

        // if sum is not 0, just add to tripCount and reinit sum = 0
        if (sum !== 0) {
            sum = 0;
            tripCount++;

        } else { // else we're just adding one bag, the larger one
            sum = 0
            end--;
            tripCount++;

        }

    }

    return tripCount;

}

/**
 *
 * Solution that's much more easy to follow wowow
 */
const efficientJanitorSolution = weights => {
    weights = weights.sort((a, b) => (a - b));

    let left = 0;
    let right = weights.length - 1;
    let count = 0;
    while (left <= right) {
        if (weights[left] + weights[right] <= 3) left++;
        right++;
        count++;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const weightCount = parseInt(readLine().trim(), 10);

    let weight = [];

    for (let i = 0; i < weightCount; i++) {
        const weightItem = parseFloat(readLine().trim());
        weight.push(weightItem);
    }

    const result = efficientJanitor(weight);

    ws.write(result + '\n');

    ws.end();
}
