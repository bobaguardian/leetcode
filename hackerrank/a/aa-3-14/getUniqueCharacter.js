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
 * Complete the 'getUniqueCharacter' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 *
 *
 * Approach
 * - use an object to keep track of unique characters
 *   - {
 *      'a': [count, index],
 *      'c': [count, index],
 *      }
 * - iterate through s
 *   - if the char is in the object, delete it from the object
 *   - else add the key=char, value=index + 1 to the object
 * - end of iteration:
 *   - return the minimum value of Object.values(obj)
 *
 * // Time complexity = O(n) - iterating through string of size n
 * // Space complexity = O(n) - keeping a map of counts and indices
 */

function getUniqueCharacter(s) {
    // Write your code here
    const indexMap = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] in indexMap) indexMap[s[i]] = [indexMap[s[i]][0] + 1, i + 1];
        else indexMap[s[i]] = [1, i + 1];
    }

    const uniqueChars = Object.values(indexMap).filter(arr => arr[0] === 1)

    if (uniqueChars.length === 0) return - 1;
    return uniqueChars[0][1];

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getUniqueCharacter(s);

    ws.write(result + '\n');

    ws.end();
}
