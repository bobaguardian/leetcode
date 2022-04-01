
const longestNonRepeatingSubstring = function (string) {
    // Your code here
    let maxLength = 0;
    let longestSubstring = "";
    let current = "";

    for (let i = 0; i < string.length; i++) {
      if (current.includes(string[i])) {
        if (current.length > maxLength) {
          longestSubstring = current;
          maxLength = current.length;
          current = string[i];
        }
      } else {
        current += string[i];
      }
    }

    return maxLength;

  };

  module.exports = longestNonRepeatingSubstring;
