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
 * Complete the 'minMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER startRow
 *  3. INTEGER startCol
 *  4. INTEGER endRow
 *  5. INTEGER endCol
 *
 * helper functions
 * - isWithinBounds(pos) => returns boolean check to see if the position is on the game board
 * - generateNextValidPositions(position) => returns an array of valid next positions
 *   - uses the isWithinBounds helper function to check validity
 *
 * - use breadth (level) first search approach
 * - a knight can have 8 moves per iteration
 * - generate those 8 positions, run them through a within bounds check and add valid ones to the queue if they have not been visited
 *
 * Approach:
 * - create visited Set with starting position inside
 * - add [starting position, moveCt = 0] to queue
 * keep repeating until the queue is empty or we have reached the destination:
 *   - currPos = dequeue [0], currMoveCt = dequeue[1]
 *   - if currPos = endPos return currmoveCt
 *   - call generateNextValidPositions and add the nonvisited ones to the queue w/ currMoveCt + 1
 *
 *
 */

function minMoves(n, startRow, startCol, endRow, endCol) {
    // Write your code here

    const visited = new Set();
    visited.add(startRow.toString() + startCol.toString());

    const queue = [[startRow, startCol, 0]];

    while (queue.length) {
        const [currPosRow, currPosCol, moveCt] = queue.shift();
        // update visited set with current dequeued position
        visited.add(currPosRow.toString() + "," + currPosCol.toString());

        // console.log(currPosRow, currPosCol, moveCt);

        // end check
        if (currPosRow === endRow && currPosCol === endCol) {
            return moveCt;
        }

        // generate next valid positions
        const nextMoves = generateNextValidPositions(currPosRow, currPosCol, n, visited);

        // add next valid positions that havent been visited into the queue
        for (const move of nextMoves) {
            if (!visited.has(move[0].toString() + "," + move[1].toString())) {
                queue.push([move[0], move[1], moveCt + 1]);
            }
        }
    }

    // not possible
    return -1;

}

const generateNextValidPositions = (row, col, n, visited) => {
    const result = [];
    if (isWithinBounds(row + 2, col + 1, n) && !visited.has((row + 2).toString() + "," + (col + 1).toString()))
        result.push([row + 2, col + 1]);
    if (isWithinBounds(row + 2, col - 1, n) && !visited.has((row + 2).toString() + "," + (col - 1).toString()))
        result.push([row + 2, col - 1]);
    if (isWithinBounds(row - 2, col + 1, n) && !visited.has((row - 2).toString() + "," + (col + 1).toString()))
        result.push([row - 2, col + 1]);
    if (isWithinBounds(row - 2, col - 1, n) && !visited.has((row - 2).toString() + "," + (col - 1).toString()))
        result.push([row - 2, col - 1]);

    if (isWithinBounds(row + 1, col + 2, n) && !visited.has((row + 1).toString() + "," + (col + 2).toString()))
        result.push([row + 1, col + 2]);
    if (isWithinBounds(row + 1, col - 2, n) && !visited.has((row + 1).toString() + "," + (col - 2).toString()))
        result.push([row + 1, col - 2]);
    if (isWithinBounds(row - 1, col + 2, n) && !visited.has((row - 1).toString() + "," + (col + 2).toString()))
        result.push([row - 1, col + 2]);
    if (isWithinBounds(row - 1, col - 2, n) && !visited.has((row - 1).toString() + "," + (col - 2).toString()))
        result.push([row - 1, col - 2]);

    return result;
}

const isWithinBounds = (row, col, n) => {
    return (row >= 0 && col >= 0 && row < n && col < n);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const startRow = parseInt(readLine().trim(), 10);

    const startCol = parseInt(readLine().trim(), 10);

    const endRow = parseInt(readLine().trim(), 10);

    const endCol = parseInt(readLine().trim(), 10);

    const result = minMoves(n, startRow, startCol, endRow, endCol);

    ws.write(result + '\n');

    ws.end();
}
