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
 * Complete the 'fetchItemsToDisplay' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY items
 *  2. INTEGER sortParameter
 *  3. INTEGER sortOrder
 *  4. INTEGER itemsPerPage
 *  5. INTEGER pageNumber
 *
 * Approach
 * - based on the sortParameter and sortOrder, sort the items array
 * - determine the start index from the pageNumber and itemsPerPage
 *   - ex: pageNumber = 2, itemsPerPage = 2 => starting index is 5
 *   - startIdx = itemsPerPage * pageNumber + 1
 *
 * - create a result array = []
 * - iterate through the sorted items array starting at the startIdx and stop at startIdx + itemsPerPage
 *   - push to result the item string
 * - return result array
 *
 *
 * time O(nlog(n)) - sort items
 * space O(m) where m is the number of items per page - result array size
 */

function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    // Write your code here

    // sort items array
    items.sort((a, b) => {
        if (sortOrder === 0) { // ascending
            if (sortParameter === 0) {
                if (a > b) return 1;
                else return -1;
            }
            return a[sortParameter] - b[sortParameter];
        } else { // descending
            if (sortParameter === 0) {
                    if (b > a) return 1;
                    else return -1;
                }
            return b[sortParameter] - a[sortParameter];
        }
    });
    // console.log("sort", sortParameter, sortOrder);
    // console.log(itemsPerPage, pageNumber);
    // console.log("sorted items", items);
    const startIdx = itemsPerPage * pageNumber;
    const result = [];

    for (let i = startIdx; i < startIdx + itemsPerPage; i++) {
        const item = items[i];
        if (item) result.push(item[0]);
    }

    return result;

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const itemsRows = parseInt(readLine().trim(), 10);

    const itemsColumns = parseInt(readLine().trim(), 10);

    let items = Array(itemsRows);

    for (let i = 0; i < itemsRows; i++) {
        items[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    const sortParameter = parseInt(readLine().trim(), 10);

    const sortOrder = parseInt(readLine().trim(), 10);

    const itemsPerPage = parseInt(readLine().trim(), 10);

    const pageNumber = parseInt(readLine().trim(), 10);

    const result = fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
