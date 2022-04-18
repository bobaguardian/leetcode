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
 * Complete the 'findMinimumLengthSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 *
 * set minLength = arr.length - for each yeps, compare and update minLength accordingly
 *
 * find all subarrays with length >= k
 */

function findMinimumLengthSubarray(arr, k) {
    // Write your code here

    // first see if there are enough distinct integers
    if (!hasKDistinctIntegers(arr, k)) return -1;

}

// helper function to generate all subarrays >= k and <= arr.length
const generateSubarrays = (arr, k, result = []) => {
    if (arr.length === 1) return result.push(arr);
    const subArr = generateSubarrays(arr.slice(1));
    return result.push(subArr.concat(subArr.map(e => e.concat(arr[0])), [[arr[0]]]));

}

// helper function to determine if an array has k distinct integers
const hasKDistinctIntegers = (arr, k) => {
    const uniques = new Set(arr);
    if (uniques.size < k) return false;
    else return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = findMinimumLengthSubarray(arr, k);

    ws.write(result + '\n');

    ws.end();
}
