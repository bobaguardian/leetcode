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


/* ********* SOLVED **********
 * Complete the 'deleteProducts' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ids
 *  2. INTEGER m
 *
 * ids = [1, 1, 5, 5]
 * m = 2
 * => 1 id (either remove 2 1's or 2 5's)
 *
 * ids = [1, 1, 1, 2, 2, 3]
 * {
 *  1: 3,
 *  2: 2,
 *  3: 1
 * }
 * m = 3
 * => 1 id (remove 2 2's and 1 3)
 *
 * Approach
 * - use an object to keep track
 * {
 *  id: count,
 *  1: 3,
 *  2: 3,
 *  3: 1
 * } if m = 3, find the id with the smallest amount and add the next smallest amount, as long as the total is <= m
 *
 * Pseudocode
 * countMap = {}
 * create object count map using for loop
 *
 * total = 0
 *
 *  while (total < m)
 *      get value of smallest amount
 *      if (total + value <= m)
 *        total += value
 *        remove key of that value from object
 *
 * end of while loop, we get an object with the smallest unique ids
 * return Object.keys().length
 *
 * countMap = {
 *      1: 2,
 * } m = 2
 * total = 2
 *
 *
 * Time Complexity = O(n^2) - while loop, helper function for loop to get smallest key
 * Space Complexity = O(n) - count map
 */

function deleteProducts(ids, m) {
    // Write your code here
    const countMap = {};
    for (let i = 0; i < ids.length; i++) {
        if (countMap[ids[i]]) countMap[ids[i]] += 1;
        else countMap[ids[i]] = 1;
    }

    let total = 0;
    let index = 0;
    let length = Object.keys(countMap).length
    while (total <= m && index < length) {
        const smallestKey = getSmallestKey(countMap);
        if (total + countMap[smallestKey] <= m) {
            total += countMap[smallestKey];
            delete countMap[smallestKey];
        }

        index++;
    }

    return Object.keys(countMap).length;

}

function getSmallestKey(map) {
    // get the smallest value
    const entries = Object.entries(map)
    let min = entries[0][1];
    let key = entries[0][0];

    for (let i = 1; i < entries.length; i++){
        if (entries[i][1] < min){
            min = entries[i][1];
            key = entries[i][0];
        }
    }
    return key
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const idsCount = parseInt(readLine().trim(), 10);

    let ids = [];

    for (let i = 0; i < idsCount; i++) {
        const idsItem = parseInt(readLine().trim(), 10);
        ids.push(idsItem);
    }

    const m = parseInt(readLine().trim(), 10);

    const result = deleteProducts(ids, m);

    ws.write(result + '\n');

    ws.end();
}
