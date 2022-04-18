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
 * Complete the 'playlist' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY songs as parameter.
 *
 * multiple of 60 means duration % 60 === 0
 *
 * [10, 50, 90. 30]
 * 10 and 50 => yep
 * 10 and 90 => nope
 * 10 and 30 => nope
 * 50 and  90 => nope
 * 50 and 30 => nope
 * 90 and 30 => yep
 *
 * [30, 20, 150, 100, 40]
 * => [30, 150], [20, 100], [20, 40]
 *
 * double for loop
 *
 *
 * solution works but needs to be optimized
 * rn time = O(n^2)
 *
 * try sorting it?
 * [10, 30, 50, 90]
 * 10, 90
 */

function playlist(songs) {
    // Write your code here
    let pairCount = 0;
    for (let i = 0; i < songs.length - 1; i++) {
        for (let j = i + 1; j < songs.length; j++) {
            if ((songs[i] + songs[j]) % 60 === 0) {
                pairCount++;
            }
        }
    }
    return pairCount;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const songsCount = parseInt(readLine().trim(), 10);

    let songs = [];

    for (let i = 0; i < songsCount; i++) {
        const songsItem = parseInt(readLine().trim(), 10);
        songs.push(songsItem);
    }

    const result = playlist(songs);

    ws.write(result + '\n');

    ws.end();
}
