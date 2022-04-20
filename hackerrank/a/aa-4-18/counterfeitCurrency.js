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
 * Complete the 'countCounterfeit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY serialNumber as parameter.
 *
 *
 * Multiple helper functions
 * 1. isWithinLength - returns boolean if serialNumber is within 10 and 12 characters
 * 2. endsWithOneUppercaseLetterOnly (beautiful naming i know) - returns boolean if the serialNumber ends with one uppercase letter ONLY
 * 3. areUniqueLetters - returns boolean if string is all distinct UPPERCASE letters
 * 4. isValidYear - returns boolean if given string is a valid year 1900 - 2019
 * 5. extractDenomination - given the rest of serial number, extract denomination
 *    - once we call this, check to make sure its a valid denomination currency
 *    - have an array of set denominations - see if its in there
 *
 *
 * Time O(n) where n is the number of serial numbers
 * Space O(1)?
 */

function countCounterfeit(serialNumbers) {
    // Write your code here

    const denominations = [10, 20, 50, 100, 200, 500, 1000];
    let totalCurrencyCount = 0;
    for(let num of serialNumbers) {
        if(!isWithinLength(num)) continue;
        if (!endsWithOneUpperLetterOnly(num)) continue;
        if (!arefirstThreeUniqueLetters(num)) continue;
        if (!isValidYear(num.slice(3, 7))) continue;

        // extract the denomination
        let denomination = parseInt(num.slice(7, num.length - 1));
        if (!isNaN(denomination) && denominations.includes(denomination)) {
            totalCurrencyCount += denomination;
        }
    }

    return totalCurrencyCount;
}

const isWithinLength = (s) => {
    return (s.length >= 10) && (s.length <= 12);
}

const endsWithOneUpperLetterOnly = (s) => {
    // let re = /[A-Za-Z]/;
    // check if second to last is a letter
    if (/^[A-Za-z]+$/.test(s[s.length - 2])) return false;
    else return /^[A-Z]+$/.test(s[s.length - 1]);
}

const arefirstThreeUniqueLetters = (s) => {
    let three = s.slice(0, 3);
    three = Array.from(new Set(three));
    if (three.length < 3) return false;
    else return /^[A-Z]+$/.test(three.join(""));
}

const isValidYear = (year) => {
    year = parseInt(year);
    if (isNaN(year)) return false;
    return year >= 1900 && year <= 2019;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const serialNumberCount = parseInt(readLine().trim(), 10);

    let serialNumber = [];

    for (let i = 0; i < serialNumberCount; i++) {
        const serialNumberItem = readLine();
        serialNumber.push(serialNumberItem);
    }

    const result = countCounterfeit(serialNumber);

    ws.write(result + '\n');

    ws.end();
}
