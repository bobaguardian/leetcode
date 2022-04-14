
/**
 *
 * Solution 1
 * Time - O(n), n = length of string
 * Space - O(n)
 */
function runLengthEncoding(string) {
    // Write your code here.
      // create a result array
      // first count the number of the character until it reaches a different char
      // if count / 9 >= 1 repeat
        // push 9char to array, make count = count / 9 repeat until <= 9

      // return result array joined

      const result = [];
      let count = 1;
      let char = string[0];
      for (let i = 1; i <= string.length; i++) {
          if (string[i] === char) {
              count++;
          } else { // push to result
              if (count >= 10) {
                  while (count >= 10) {
                      count -= 9;
                      result.push("9" + char);
                  }
              }
              result.push(count.toString() + char);

              char = string[i];
              count = 1;
          }
      }

      return result.join("");
  }

  // Do not edit the line below.
  exports.runLengthEncoding = runLengthEncoding;
