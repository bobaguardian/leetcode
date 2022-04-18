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
 * Complete the 'strokesRequired' function below.
 *
 *  picture = ["aabba", "aabba", "aaacb"] => 5
 *  Given picture as 2d array of letters representing colors
 *  find the min number of fills to completely repaint the picture
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY picture as parameter.
 *
 *  create array of all positions
 *  create stack of neighbors
 *  while (array of all positions is not empty):
 *  pop from array => current pos, keep current character
 *  from current pos, add all neighbors to stack of neighbors
 *
 *      while neighbors is not empty:
 *          check neighbors (top, left, bottom, right) if they're same character
 *          if they are remove them form array of all positions
 *      increment stroke count
 *
 *  return stroke count
 */




function strokesRequired(picture) {
    // Write your code here
    const allPos = [];
    let rows = picture.length - 1;
    let cols = picture[0].length - 1;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            allPos.push([r, c]);
        }
    }

    let neighbors;

    while (allPos.length) {
        let currentPos = allPos.pop();
        let currChar = picture[currentPos[0]][currentPos[1]];
        neighbors = [currentPos];


        while (neighbors.length) {
            let curr = neighbors.pop();
            let row = curr[0];
            let col = curr[1];

            if (picture[row][col] !== currChar) {
                continue;
            } else {
                // top
                if (row + 1 <= rows && picture[row + 1][col]) neighbors.push(picture[row + 1][col])
                // left
                if (col - 1 >= 0 && picture[row][col - 1]) neighbors.push(picture[row][col - 1])
                // bottom
                if (row - 1 >= 0 && picture[row - 1][col]) neighbors.push(picture[row - 1][col])
                // right
                if (col + 1 <= cols && picture[row][col + 1]) neighbors.push(picture[row][col + 1])

            }

        }


        neighbors = [];

    }

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pictureCount = parseInt(readLine().trim(), 10);

    let picture = [];

    for (let i = 0; i < pictureCount; i++) {
        const pictureItem = readLine();
        picture.push(pictureItem);
    }

    const result = strokesRequired(picture);

    ws.write(result + '\n');

    ws.end();
}
