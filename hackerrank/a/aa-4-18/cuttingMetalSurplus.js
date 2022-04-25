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
 * Complete the 'maxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER costPerCut
 *  2. INTEGER salePrice
 *  3. INTEGER_ARRAY lengths
 *
 *
 * need a hash to store profits of each length
 * key = length, value = profit
 *
 * [26, 103, 59]
 * Honestly I'm stumped on how to start this D:
 *

*/

/**
 *
 *
 */
function maxProfit(costPerCut, salePrice, lengths) {
    // Write your code here
    // initialize maxProfit as -infinity
    let maxProfit = -Infinity;
    const max = Math.max(...lengths);

    // go from 1 up to max length and calculate the maxProfit for every single
    // one of those cutLengths
    for (let i = 1; i <= max; i++) {
        maxProfit = calculate(i, salePrice, costPerCut, lengths, maxProfit);
    }

    return maxProfit;

}


/**
 *
 * Helper function to calculate the max between the current max profit and the profit using
 * a specified cutLength (using given formula)
 */
const calculate = (cutLength, costPerCut, lengths, maxProfits) => {
    let profit = 0;

    for (let length of lengths) {
        let totalUniformRods = Math.floor(length / cutLength);
        let totalCuts =  Math.ceil(length / cutLength) - 1;
        let currProfit = totalUniformRods * cutLength * salePrice - (costPerCut + totalCuts);
        if (currProfit > 0) profit += currProfit;
    }

    return Math.max(maxProfit, profit);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const costPerCut = parseInt(readLine().trim(), 10);

    const salePrice = parseInt(readLine().trim(), 10);

    const lengthsCount = parseInt(readLine().trim(), 10);

    let lengths = [];

    for (let i = 0; i < lengthsCount; i++) {
        const lengthsItem = parseInt(readLine().trim(), 10);
        lengths.push(lengthsItem);
    }

    const result = maxProfit(costPerCut, salePrice, lengths);

    ws.write(result + '\n');

    ws.end();
}
