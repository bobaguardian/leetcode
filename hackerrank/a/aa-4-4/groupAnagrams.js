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
 * Complete the 'getGroupedAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY words as parameter.
 *
 * [inch, cat, chin, kit, act]
 * [inch, cat, kit] - array of groups - groupings
 * for each word, sort it
 *   check if its in the groupings array, if not, add it
 * return array's length
 *
 *
 */

function getGroupedAnagrams(words) {
    const groupings = [];
    // Write your code here
    for (let word of words) {
        // sort the word
        word = word.split("").sort().join("");
        if (!groupings.includes(word)) {
            groupings.push(word);
        }
    }
    return groupings.length;

}

const getGroupedAnagramsSolution = words => {
    // initialize a hash = {}
    // iterate through each of the words, common key = sorted version of the word
    // if the hash doesn't have the key, add it set = []
    // else, just push it
    // end of loop, return the length of hash.keys()

    // m = size of words
    // n = size of word
    // time O(n + nlogn)
    // space = O(n)

    const hash = {};
    for (const word of words) {
        const sorted = word.split("") // n
            .sort() // n log n
            .join("");// n
        if (!hash[sorted]) {
            hash[sorted] = [word];
        } else {
            hash[sorted].push(word)
        }
    }

    return Object.keys(hash).length;

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordsCount = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < wordsCount; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    const result = getGroupedAnagrams(words);

    ws.write(result + '\n');

    ws.end();
}
