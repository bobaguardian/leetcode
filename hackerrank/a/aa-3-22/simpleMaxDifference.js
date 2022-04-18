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
 * Complete the 'maxDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY px as parameter.
 *
 *
 *
 */

function maxDifference(px) {
    // Write your code here
    let max = -1;
    for (let i = 1; i < px.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (px[i] > px[j]) {
                if (px[i] - px[j] > max) max = px[i] - px[j];
            } else {
                break;
            }
        }

    }

    return max;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pxCount = parseInt(readLine().trim(), 10);

    let px = [];

    for (let i = 0; i < pxCount; i++) {
        const pxItem = parseInt(readLine().trim(), 10);
        px.push(pxItem);
    }

    const result = maxDifference(px);

    ws.write(result + '\n');

    ws.end();
}
