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
 * Complete the 'getMergedIntervals' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY intervals as parameter.
 *
 * input:
 * [[6, 9], [2, 3], [9, 11], [1, 5], [14, 18]]
 *
 * output:
 * [[14, 18], [1, 5], [6, 11]]
 *
 * pop, for each range in result, check start and ends
 *   if og start > res start and og start < res end, check if og end is > res end
 *     if it is, update res end to equal og end
 *   else if og start < res start, check if og end >= res start and og end <= res end
 *     if it is, update res start to equal og start
 *   else if og start is >= res start && ogend <= res end, continue
 *   else push og range into res
 *
 * Cases of overlapping intervals
 * 1) a and b don't overlap
 * 2) a and b overlap, b ends after
 * 3) a completely overlaps b
 * 4) a and b overlap, a ends after b
 * 5) b completely overlaps a
 *
 */

function getMergedIntervals(intervals) {
    // Write your code here
    const result = [];
    let checkedInterval = false;

    while(intervals.length) {
        const curRange = intervals.pop();
        const [ogStart, ogEnd] = curRange;


        for (let i = 0; i < result.length; i++) {
            const [resStart, resEnd] = result[i];

            if (checkedInterval) break;

            if (ogStart >= resStart && ogEnd <= resEnd) {
                checkedInterval = true
            } else if (ogStart > resStart && ogStart <= resEnd) {
                if (ogEnd > resEnd) {
                    result[i][1] = ogEnd;
                    checkedInterval = true;
                }
            } else if (ogStart < resStart) {
                if (ogEnd >= resStart && ogEnd <= resEnd) {
                    result[i][0] = ogStart;
                    checkedInterval = true;

                }
            }
        }

        if (!checkedInterval) {
            result.push(curRange);
        }
        checkedInterval = false;
    }

    // return result;
    return result.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        else return 1;
    });

}

//[7, 7], [2, 3], [6, 11], [1, 2]
// Solution - first sort intervals by start time
// Use a stack - looking at the end
// comparing last value of stack with the next interval
// change/update end time of the stack if necessary, else
// just push the new interval into the stack
const getMergedIntervalsSolution = (intervals) => {
    // sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]); // => [1, 2], [2, 3], [6, 11], [7, 7]

    let stack = [intervals[0]]; // [ [1, 2] ]

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];

        if (curr[0] <= stack[stack.length - 1][1]) {
            if (curr[1] > stack[stack.length - 1][1]) {
                stack[stack.length - 1][1] = curr[1]; // replace end time with curr end time
            }
        } else {
            stack.push(curr);
        }
    }

    return stack;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const intervalsRows = parseInt(readLine().trim(), 10);

    const intervalsColumns = parseInt(readLine().trim(), 10);

    let intervals = Array(intervalsRows);

    for (let i = 0; i < intervalsRows; i++) {
        intervals[i] = readLine().replace(/\s+$/g, '').split(' ').map(intervalsTemp => parseInt(intervalsTemp, 10));
    }

    const result = getMergedIntervals(intervals);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
