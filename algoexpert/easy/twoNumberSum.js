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

// similar solution to # 2 - involves just one for loop
function twoNumberSum(array, targetSum) {
    // Write your code here.
    const map = {}; // key = x, value = y = targetSum - x
    for (const x of array) {
        const y = targetSum - x;
        if (y in map) {
            return [x, y]
        } else {
            map[x] = y;
        }
    }
    return [];
}


// Solution 3 - Sort array first ascending, keep left and right pointers from start
// and end of array and compare adding two to the sum
// At each step, we're eliminating half input => while loop => O(log(n)) but
// we're using array.sort() => O(nlog(n))
// Time complexity = O(nlog(n))
// Space complexity = O(n)
function twoNumberSum(array, targetSum) {
    // Write your code here.
      // array.sort => O(nlog(n))
      array.sort((a, b) => a - b); // sort ascending
      let left = 0;
      let right = array.length - 1;
      while (left < right) {
          const currSum = array[left] + array[right];
          if (currSum === targetSum) {
              return [array[left], array[right]];
          } else if (currSum < targetSum) {
              left++;
          } else if (currSum > targetSum) {
              right--;
          }
      }
      return [];
  }
