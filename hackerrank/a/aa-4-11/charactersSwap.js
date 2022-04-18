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
 * Complete the 'getString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 *
 * test input 1:
 * bdea c1 = b (0 pos), c2 = a, start c1 at beg, go select c2 to be letter before c1 in alphabet
 * swap: adeb
 * now move c1 up one pos(1) or num positions until reach a diff char = d, c2 = b
 * swap: abed
 * now move c1 up one pos(2) = e, c2 = d
 * swap: abde
 * if we get to the end and havent asigned c2 (no letters come before it) than c1 is in the correct position, => increment c1 pos
 * repeat this until c1 = s.length - 2, and c2 = s.length - 1
 *
 * test input 2:
 * abbbe
 * => abbbe already smallest
 * is there a way we can check without repeating our operations above?
 *
 * test input 3:
 * bbcacad c1 = b, c2 = a
 * swap: aacbcbd
 * c1 = c, c2 = b
 * swap: aabcbcd
 * c1
 *
 * after each swap add the [c1, c2] pair into alreadySwapped set
 *
 *
 */

function getString(s) {
    // Write your code here
    let c1Index;
    let c2Index;
    let alreadySwapped = new Set();

    // console.log(s);

    for (c1Index = 0, c2Index = 1; c1Index < s.length - 1 && c2Index < s.length; c1Index++, c2Index++) {
        let c1 = s[c1Index]

        /** Didn't have time to implement this approach
         * use helper method to find the smallest char and index after c1
         * use that char to call swap
        // let c2 = findSmallestAfter(s, c1Index)[1];

        // if (c2 && !alreadySwapped.has([c1, c2])) {
        //     s = swap(s, c1, c2);
        //     alreadySwapped.add([c1, c2]);
        // }

        */

        while (c2Index < s.length) {
            if (s[c2Index] < c1 && !alreadySwapped.has([c1, s[c2Index]])) {// need to swap
                // console.log(s[c1Index], s[c2Index]);

                let c2 = s[c2Index];
                s = swap(s, c1, c2);
                // console.log("AFTER SWAP", s);
                // add to set
                alreadySwapped.add([c1, c2]);
                // console.log(alreadySwapped);
                // update c1 and c2 pointers
                c2Index = c1Index + 1;
                break;
            }
            c2Index++;
        }

    }

    return s;

}

const findSmallestAfter = (s, c1) => {
    let c2;
    let char;
    for (let i = c1 + 1 + 1; i < s.length; i++) {
        if (!char) {
            c2 = i;
            char = s[i];
        } else if (s[i] < char) {
            c2 = i;
            char = s[i];
        }
    }
    console.log(char);
    return [c2, char];
}

const swap = (s, c1, c2) => {
    const stringArr = s.split("");
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === c1) {
            stringArr[i] = c2;
        } else if (stringArr[i] === c2) {
            stringArr[i] = c1;
        }
    }

    return stringArr.join("");
}


/**
 *
 * create an array of 26 (alphabet) filled with zeroes - each position is a letter
 * if we come across, set the 0 to 1
 *
 */
const getStringSolution = s => {


    const foundLetters = new Array(26).fill(0);
    for (let i = 0; i < s.lenght; i++) {
        let currCharIdx = (s[i]).charCodeAt() - 'a'.charCodeAt();
        foundLetters[currCharIdx] = 1;
    }

    const charMap = {};
    let posCharIdx = 0;

    let lexString = '';

    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!charMap[char]) { // if we dont have this character in our string, find the smallest letter
            while (foundLetters[posCharIdx] === 0) posCharIdx += 1;

            charMap[char] = String.fromCharCode(posCharIdx + 'a'.charCodeAt());
            posCharIdx += 1;

        }

        lexString += charMap[char];
    }

    return lexString;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getString(s);

    ws.write(result + '\n');

    ws.end();
}
