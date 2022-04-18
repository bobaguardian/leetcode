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
 * Complete the 'compressWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING word
 *  2. INTEGER k
 *
 * repeat:
 * create a set of the word so we can get unique characters of that word
 * for each character in that unique set, check to see if there is an
 * index of k * char in the word
 *   - if there is, slice it and replace the word, break and repeat the
 *     creation of the set
 *
 *
 * abbcccb, k = 3
 * set = (abc) => a no => b no => c yes => word = abbb => break and repeat creation of set
 * set = (ab) => a no => b yes => word = a repeat creation of set
 * set = (a) => a no => end
 *
 * end while loop if we go through all the characters of the set and didnt replace any
 */

function compressWord(word, k) {
    let wordChanged = true;
    word = word.toLowerCase();

    while (wordChanged || word.length > k) {
        let uniqueChars = new Set(word);
        wordChanged = false;

        for (let char of uniqueChars) {
            let pattern = char.repeat(k);
            let index = word.indexOf(pattern);
            if (index !== -1) {
                // slice!
                if (index === 0) {
                    word = word.slice(index + k);
                } else {

                    word = word.slice(0, index) + word.slice(index + k);
                }
                wordChanged = true;
                continue;
            }
        }
        if (!wordChanged) break;
    }

    return word;

}


// using a stack
function compressWordSolution(word, k) {
    const stack = [[word[0], 1]]; // the word and how many has repeated thus far
    for (let i = 1; i < word.length; i++) {
        let char = word[i];

        // get the top of the stack
        let top = stack[stack.length - 1] || [];
        if (top[0] === char && top[1] === k - 1) {
            // if top of our stack have the same character and the count is k - 1 this means
            // its repeated k times
            stack.pop();
        } else if (top[0] === char && top[1] !== k - 1) { // if same character but not yet k, increment
            top[1]++;
        } else { // if not same character push onto stack new array of that character and count of 1
            stack.push([char, 1]);
        }
    }

    let res = '';
    for (let ele of stack) {
        res += ele[0].repeat(ele[1]);
    }
    return res;
}



//helper function to create pattern
function generatePattern(char, k) {
    let pattern = "";
    for(let i = 0; i < k; i++) {
        pattern += char;
    }
    return pattern;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const word = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = compressWord(word, k);

    ws.write(result + '\n');

    ws.end();
}
