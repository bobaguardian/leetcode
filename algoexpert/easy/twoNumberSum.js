// Solution 1 - double for loop
// Time complexity = O(n^2)
// Space complexity = O(1)
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for (let i = 0; i < array.length; i++) {
          for (let j = i + 1; j < array.length; j++) {
              if (array[i] + array[j] === targetSum) {
                  return [array[i], array[j]];
              }
          }
      }
      return [];
  }


// Solution 2 - Hash table to store y for x (current element) + y = targetSum, then
// traversing the array again to check if y exists in the array
// Time complexity = O(n)
// Space complexity = O(n)
function twoNumberSum(array, targetSum) {
// Write your code here.
    const map = {}; // key = targetSum - value, value = value
    for (let i = 0; i < array.length; i++) {
        map[targetSum-array[i]] = array[i];
    }

    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] && array[i] !== map[array[i]]) {
            return [map[array[i]], array[i]];
        }
    }
    return [];
}
