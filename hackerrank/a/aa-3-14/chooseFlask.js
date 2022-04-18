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

// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 4    →   requirements = [4, 6]
// 6
// 2    →   flaskTypes = 2
// 5    →   markings[] size total_marks = 5
// 2    →   markings[][] size columns = 2 (always)
// 0 5  →   markings = [[0, 5], [0, 7], [0, 10], [1, 4], [1, 10]]
// 0 7
// 0 10
// 1 4
// 1 10
// => 0


// STDIN    Function
// -----    --------
// 2    →   requirements[] size n = 2
// 10   →   requirements = [10, 15]
// 15
// 3    →   flaskTypes = 3
// 6    →   markings[] size totalMarks = 6
// 2    →   markings[][] size columns = 2
// 0 11 →   markings = [[0, 11], [0, 20], [1, 11], [1, 17], [2, 12], [2, 16]]
// 0 20
// 1 11
// 1 17
// 2 12
// 2 16
// => 1

/*  ********* NOT SOLVED **********
 * Complete the 'chooseFlask' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY requirements
 *  2. INTEGER flaskTypes
 *  3. 2D_INTEGER_ARRAY markings
 *
 *
 * Approach
 * - keep track of min units wasted for each flask
 *   - can be an object {key=flaskNum : value=minUnitsWasted}
 * - for each flask type, check if it is within maximum capacity of order
 *   - each flask type index = markings.length / 3
 *   - get the last marking section's arrray[1] and compare this with the requirements last element
 *     - if requirement greater, skip this flask check
 *     else check starting from the marking sections first array and comparying the value with      requirements first element,keep track of minUnits
 *      - if element > marking, add minUnits to the object at that flaskNum continue to next requirement
 *      -
 */

function chooseFlask(requirements, flaskTypes, markings) {
    // Write your code here
    const obj = {};

    let reqI = 0;
    let flaskNum = 0
    for (let i = 0; i < markings.length; i++) {
        if (markings[i][0] === flaskNum) {
            if (requirements[reqI] < markings[i][1]) continue;
            else {
                if (obj[flaskNum]) obj[flaskNum] += markings[i][1];
                else obj[flaskNum] = markings[i][1];
            }

        } else if (markings[i][0] !== flaskNum && reqI === requirements.length-1) {
            flaskNum++;
            // i = 0?
        }

        if (flaskNum > flaskTypes) break;
    }

    return Math.min(...Object.values(obj))

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const requirementsCount = parseInt(readLine().trim(), 10);

    let requirements = [];

    for (let i = 0; i < requirementsCount; i++) {
        const requirementsItem = parseInt(readLine().trim(), 10);
        requirements.push(requirementsItem);
    }

    const flaskTypes = parseInt(readLine().trim(), 10);

    const markingsRows = parseInt(readLine().trim(), 10);

    const markingsColumns = parseInt(readLine().trim(), 10);

    let markings = Array(markingsRows);

    for (let i = 0; i < markingsRows; i++) {
        markings[i] = readLine().replace(/\s+$/g, '').split(' ').map(markingsTemp => parseInt(markingsTemp, 10));
    }

    const result = chooseFlask(requirements, flaskTypes, markings);

    ws.write(result + '\n');

    ws.end();
}
