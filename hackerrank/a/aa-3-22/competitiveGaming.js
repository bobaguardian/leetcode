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
 * Complete the 'numPlayers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY scores
 *
 *
 * [100, 50, 50, 25] , k = 3 => [1, 2, 2, 4] => 3
 */


function numPlayers(k, scores) {
    // Write your code here
    const map = {};
    const sortedScores = scores.sort((a, b) => b - a);
    console.log(sortedScores);
    let place = 1;
    const result = [];

    for (let i = 0; i < sortedScores.length; i++) {
        if (sortedScores[i] > 0) {
            if (map[sortedScores[i]]) {
                result.push(map[sortedScores[i]])

            } else {
                map[sortedScores[i]] = place;
                result.push(place);

            }
            place++;

        }
    }

    console.log(result);

    let total = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] <= k) total++;
        else break;
    }
    return total;

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const k = parseInt(readLine().trim(), 10);

    const scoresCount = parseInt(readLine().trim(), 10);

    let scores = [];

    for (let i = 0; i < scoresCount; i++) {
        const scoresItem = parseInt(readLine().trim(), 10);
        scores.push(scoresItem);
    }

    const result = numPlayers(k, scores);

    ws.write(result + '\n');

    ws.end();
}
