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

// STDIN     Function
// -----     -----
// 2      →  size of grid[] rows = 2
// ..     →  grid = ['..', '..']
// ..
// 3      →  maxTime = 3
// => Yes


// STDIN     Function
// -----     -----
// 2      →  grid[] size rows = 2
// .#     →  grid = ['.#', '#.']
// #.
// 2      →  maxTime = 2
// => No


/* ********* NOT SOLVED **********
 * passed 6/8 test cases
 * Complete the 'reachTheEnd' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER maxTime
 *
 * Approach
 * - keep track of time = 0
 * - start at [0, 0] where 1st index = grid[i], 2nd index = grid[i][i] (position in string)
 * - check adjacents and add nonvisited ones to stack
 * - pop off stack, increment time,  add nonvisited adjacents to stack
 * - if at any point an adjacent = bottom right = grid[grid.lenghth - 1][rows], return time
 *
 *
 * Pseudocode
 * time = 0
 * let position
 * visited = Set()
 * stack = [[0, 0]]
 * goalPos = [grid[grid.length-1][rows]]
 *
 * while stack.length > 0 && time - 1 <= maxTime
 *      position = stack.pop()
 *      increment time
 *      check if  top [position[0] - 1, position[1]],
 *      left [position[0], position[1] - 1], bottom [position[0] + 1, position[1]],
 *      right[position[0], position[1]+ 1] is goal position
 *          if true, return "Yes"
 *      add top, left, bottom, right to stack if not visited
 *
 *
 * if time <= maxTime return "Yes"
 * else return "No"
 *
 */

function reachTheEnd(grid, maxTime) {
    // Write your code here
    let time = 0;
    let position;
    const visited = new Set();
    const stack = [[0,0]];
    const goalPos = [grid.length-1, grid[0].length-1]

    while (stack.length > 0 && time - 1 <= maxTime) {
        position = stack.pop();
        if (position[0] === goalPos[0] && position[1] === goalPos[1]) {
            return "Yes";
        }

        time++;
        visited.add(position);

        // top
        let top = [position[0] - 1, position[1]];

        //left
        let left = [position[0], position[1] - 1];

        //bottom
        let bottom = [position[0] + 1, position[1]];

        //right
        let right = [position[0], position[1] + 1];
        let adjacents = [top, left, bottom, right];

        for (let i = 0; i < adjacents.length; i++){
            let adj = adjacents[i]
            if (grid[adj[0]] && grid[adj[0]][adj[1]] === "." && !visited.has(adj)) {
                stack.push(adj);
            }
        }



    }

    if (time <= maxTime && position[0] === goalPos[0] && position[1] === goalPos[1]) return "Yes";
    else return "No";

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gridCount = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < gridCount; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const maxTime = parseInt(readLine().trim(), 10);

    const result = reachTheEnd(grid, maxTime);

    ws.write(result + '\n');

    ws.end();
}
