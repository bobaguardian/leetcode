/**
 * @param {string} s
 * @return {number}

 - special patterns occur when a character that comes after is larger
 approaches
 - keep a object of keys = character, values = value
 - iterate through each character of the string
 - check the character's value and the next value if it exists
   - if the next value is greater, than we would add the special case number
   - else we just add the current character's value

 I/O
 s = III => 3
 s = MCM => 1900

 pseudocode
 - create an object ex: {"I": 1, "V": 5, ...}
 - create a total variable
 - for loop and iterate through the input string s
   - Using the object, check if the next character's value (if it is within range) is > current character's value
     - if it is, add to the total the next character's value - current character's value
     - if not, just add to the total the current character's value
- return the total

Analysis
- O(n) - time complexity - for loop iterating through string s of length n
- O(1) - space complexity - constant space for mapping object and total variable

 */
var romanToInt = function(s) {
    const romanMapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i+1] && romanMapping[s[i+1]] > romanMapping[s[i]]) {
            total += romanMapping[s[i+1]] - romanMapping[s[i]];
            i++;
        } else {
            total += romanMapping[s[i]];
        }
    }
    return total;
};
