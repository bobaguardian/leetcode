
/**
 *
 * Solution 1 - using map, or for loop to square numbers,
 * then sorting it after
 * O(nlogn) time complexity - .sort
 * O(n) space - result array
 */
function sortedSquaredArray(array) {
    // Write your code here.
      // use a array's map function
    // return array.map(num => num * num).sort((a, b) => a - b);

      const result = [];
      for (const num of array) {
          result.push(num * num);
      }

      return result.sort((a, b) => a - b); // O(nlogn)
  }

  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
