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
 * Complete the 'weightCapacity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY weights
 *  2. INTEGER maxCapacity
 *
 * find all combinations of weights
 *  - create a map object
 * return the combination of the highest <= maxCapacity
 */


// STDIN      Function
// -----      --------
// 3        → weights[] size n = 3
// 1        → weights[] = [ 1, 3, 5 ]
// 3
// 5
// 7        → maxCapacity = 7


/**
 *
 * Think about this like a tree, reorder weights ascending
 * Using memoization - keep track of previous things you've found before
 *
 *
 */

function weightCapacity(weights, maxCapacity) {
    // Write your code here
    weights.sort((a, b) => a - b);
    const memo = {};
    return helper(0, 0); // prevWeight, index in the weights array

    function helper(prevWeight, i) { // recursive function
        // base case
        if (i >= weights.length) return prevWeight;

        // create a key to put into memo
        let key = `${prevWeight}-${i}`;
        // if the key is already in the memo, we already solved
        // this part so we can return it immediately
        if (key in memo) return memo[key];

        let curWeight = weights[i];
        // if exceeds max capacity, return prevWeight, else look at 2 options
        // 1. add on the weight
        // 2. skip the weight
        if (prevWeight + curWeight > maxCapacity) return prevWeight;

        let option1 = helper(prevWeight + curWeight, i + 1);
        let option2 = helper(prevWeight, i + 1);

        // assign memo[key] to which ever option is bigger
        memo[key] = Math.max(option1, option2);
        return memo[key];

    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const weightsCount = parseInt(readLine().trim(), 10);

    let weights = [];

    for (let i = 0; i < weightsCount; i++) {
        const weightsItem = parseInt(readLine().trim(), 10);
        weights.push(weightsItem);
    }

    const maxCapacity = parseInt(readLine().trim(), 10);

    const result = weightCapacity(weights, maxCapacity);

    ws.write(result + '\n');

    ws.end();
}
