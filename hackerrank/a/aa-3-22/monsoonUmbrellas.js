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



/* ********* NOT SOLVED **********
 * Complete the 'getUmbrellas' function below.
 *
 * Determine minimum number of umbrellas necessary to cover EXACTLY the number of
 * people given and no more.  If there is no combo of the same or different
 * sizes that covers exactly that number of people, return -1
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER requirement
 *  2. INTEGER_ARRAY sizes
 *
 * [2, 3, 4] req = 7
 *
 *
 */



// STDIN      Function
// -----      --------
// 4      →   requirement = 4
// 2      →   sizes[] size n = 2
// 2      →   sizes = [2, 4]
// 4
// => 1

// STDIN      Function
// -----      --------
// 1      →   requirement = 1
// 1      →   sizes[] size n = 1
// 2      →   sizes = [2]
// => -1

function getUmbrellas(req, sizes) {
    // Write your code here
    // start from last size and iterate to 0
        // if req % size === 0 => return req / size;
        //
    let minTotal = Number.MAX_SAFE_INTEGER;
    let total = 0;
    let remainder = req;
    const sortedSizes = Array.from(new Set(sizes)).sort((a, b) => a - b);
    for (let i = sortedSizes.length - 1; i >= 0; i--) {
        total = 0;
        let size = sortedSizes[i];

        if (remainder % size === 0) {
            total += req / size;
            if (total < minTotal) minTotal = total;
        }
        remainder = remainder % size;
        if (remainder >= size) {
            total++;
        }

        let j = i - 1;
        while (j >= 0 && remainder != 0) {
            if (sortedSizes.includes(remainder)) {
                return total + 1;
            }
            size = sizes[j];
            if (remainder % size === 0) {
                total += req / size;
                if (total < minTotal) minTotal = total;
            }

            if (remainder >= size) {
                total++;
            }
            remainder = req % size;
            j--;
        }
    }
    if (remainder != 0 || minTotal <= 0 || minTotal === Number.MAX_SAFE_INTEGER) return -1;

    return minTotal;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const requirement = parseInt(readLine().trim(), 10);

    const sizesCount = parseInt(readLine().trim(), 10);

    let sizes = [];

    for (let i = 0; i < sizesCount; i++) {
        const sizesItem = parseInt(readLine().trim(), 10);
        sizes.push(sizesItem);
    }

    const result = getUmbrellas(requirement, sizes);

    ws.write(result + '\n');

    ws.end();
}
