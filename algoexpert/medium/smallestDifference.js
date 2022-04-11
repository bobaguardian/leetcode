/**
 *
 * @param int[] arrayOne
 * @param int[] arrayTwo
 * @returns [int, int]
 *
 * Solution 1: sort both arrays ascending, have a pointer at the start
 * of each array, compare the diffs between the two pointers and update
 * the minDiff and minPair when necessary, increment the pointer of the
 * smaller value, continue until either pointer reaches the end
 *
 * Time - O(nlog(n) + O(mlog(n))) where n = size of 1st arr, m = size of 2nd arr
 * Space - O(1) - pointers, minDiff, minPair - constant
 */
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      // an object => key = abs diff, value = [value1, value2]
      // sort both arrays
      // start with pointers at the beginning of the arrays
      // inc pointer of smaller of the 2

      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);

      let i = 0;
      let j = 0;
      let minDiff  = Number.MAX_SAFE_INTEGER;
      let minPair = [];

      while (i < arrayOne.length && j < arrayTwo.length) {
          let one = arrayOne[i];
          let two = arrayTwo[j];

          // if just one of the values is negative
          // diff = abs(one) + abs(two)
          if ((one < 0 && two > 0) || (two < 0 && one > 0)) {
              if (Math.abs(one) + Math.abs(two) < minDiff) {
                  minDiff = Math.abs(one) + Math.abs(two);
                  minPair = [one, two];

              }
          } else { // both are positive, or both are negative - take abs(diff)
              if (Math.abs(one - two) < minDiff) {
                  minDiff = Math.abs(one - two);
                  minPair = [one, two];
              }
          }

          // increment the pointer of the smaller value
          if (arrayOne[i] < arrayTwo[j]) i++;
          else j++;

      }

      return minPair;
  }

  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;
