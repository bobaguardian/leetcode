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
 * Complete the 'counts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY teamA
 *  2. INTEGER_ARRAY teamB
 *
 * for each match (score) in teamB, count how many scores in teamA
 * are <= that score
 *
 * rn time complexity = O(n^2) space = O(n) need to optimize
 *
 * approach:
 * - sort teamA scores ascending
 *   - teamA = [2, 4, 5, 8, 10]
 *   - teamB = [1, 3, 7, 8]
 *
 * 2 pointers:
 * 1 < 2, push count = 0;
 * 3 > 2, count = 1, 3 < 4, push count = 1;
 * 7 > 4, count = 2, 7 > 5, count = 3 7 < 8, push count = 3;
 * 8 >= 8, count = 4, 8 < 10, push count = 4
 * also push index it should be in array?
 * => [0: 1, 1: 0, 3: 2, 4: 3]
 * we want => [1, 0, 3, 4]
 *
 * keep orderedArr [3, 1, 7, 8]
 * - orderedArr
 *

 *
 *
 */

function counts(teamA, teamB) {
    // Write your code here
    // const result = [];
    // for (let i = 0; i < teamB.length; i++) {
    //     const bScore = teamB[i];
    //     let scoreCount = 0;
    //     for (let j = 0; j < teamA.length; j++) {
    //         if (teamA[j] <= bScore) scoreCount++;
    //     }

    //     result.push(scoreCount);
    // }

    // return result;

    const ogOrder = teamB.slice(0);

    // sort
    teamA.sort((a, b) => a - b);
    teamB.sort((a, b) => a - b);

    let pointA = 0;
    let pointB = 0;
    let count = 0;
    let result = [];

    while (pointB < teamB.length && pointA < teamA.length) {
        if (teamB[pointB] >= teamA[pointA]) {
            count++;
            pointA++;
            if (pointA === teamA.length) {
                result[ogOrder.indexOf(teamB[pointB])] = count;

                pointB++;
            }
        } else {
            result[ogOrder.indexOf(teamB[pointB])] = count;
            pointB++;
        }
    }


    return result;

}


/**
 *
 * Strategy - binary search
 *
 */
const countsSolution = (teamA, teamB) => {
    // teamA = [1, 2, 3]
    // teamB = [2, 4]
    // result = [2, 3]

    let result = [];
    teamA = teamA.sort((a, b) => a - b);
    for (let score of teamB) {
        let min = 0;
        let max = teamA.length - 1;
        while (min <= max) {
            let mid = Math.floor((min + max) / 2);
            if (teamA[mid] > score) max = mid - 1;
            else min = mid + 1;
        }

        result.push(min);
    }

    return result;


}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const teamACount = parseInt(readLine().trim(), 10);

    let teamA = [];

    for (let i = 0; i < teamACount; i++) {
        const teamAItem = parseInt(readLine().trim(), 10);
        teamA.push(teamAItem);
    }

    const teamBCount = parseInt(readLine().trim(), 10);

    let teamB = [];

    for (let i = 0; i < teamBCount; i++) {
        const teamBItem = parseInt(readLine().trim(), 10);
        teamB.push(teamBItem);
    }

    const result = counts(teamA, teamB);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
