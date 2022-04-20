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
 * Complete the 'breakPalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING palindromeStr as parameter.
 *
 * I/Os:
 * bab
 * ['aab', 'baa'] => aab
 *
 * aaa => [] => IMPOSSIBLE
 *
 * acca
 * ['abca', 'aaca', 'acba', 'acaa']
 * sort => ['aaca', 'abca', 'acaa', 'acba']
 * iterate through sorted: check if the current string is not palindrome and is < og string => return it;  if we go through entire iteration without returning, then return IMPOSSIBLE (meaning array is empty or none of the strings are lower alphabetically than the og string)
 *
 *
 * helper functions:
 *   - isPalindrome(s) returns boolean if it is a palindrome
 *   - Might not need! lowestString(arrOfStrings) returns the lowest of the strings from the input array
 *
 *
 * create an array to store possible strings of changing one character
 *
 * iterate through the og string
 *   - if character is not a:
 *     - substitute it with an a(for now we'll leave this out - b/c a would always be larger than any other character and changing one character should break the palindrome)to the character (if character is d, substitute with a - d) and add them to the array of strings
 *
 * iterate through array of strings:
 *   - if string is not palindrome and < ogString, return it
 * outside of loop if didnt return anything, return IMPOSSIBLE
 *
 * return impossible if there are no possible strings lower alphabetically than the original
 *
 *
 *
 * Time complexity - O(n) - iterate through size of string and iterate through possible strings which would by max have a length of n
 * Space complexity - O(n)
 */

function breakPalindrome(palindromeStr) {
    // Write your code here
    const possibleStrs = [];

    for (let i = 0; i < palindromeStr.length; i++) {
        let char = palindromeStr[i];
        if (char !== 'a') {
            possibleStrs.push(palindromeStr.slice(0, i) + 'a' + palindromeStr.slice(i + 1));
        }
    }

    for (const str of possibleStrs) {
        if (!isPalindrome(str) && str < palindromeStr) {
            return str;
        }
    }

    return "IMPOSSIBLE";
}


// helper function to check if string is a palindrome
// time complexity - O(n) linear
// space complexity of O(1) constant
const isPalindrome = (s) => {
    const midpoint = Math.floor((s.length - 1) / 2);
    return s.startsWith(s.slice(midpoint + 1).split("").reverse().join(""));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const palindromeStr = readLine();

    const result = breakPalindrome(palindromeStr);

    ws.write(result + '\n');

    ws.end();
}
