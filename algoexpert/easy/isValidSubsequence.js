// Solution 1 - for loop array and keep track of sequence's index
// each time we see the sequence's element in array, increment
// the sequence index
// at the end of the loop, return whether sequence index > sequence's length
// Time complexity = O(n)
// Space complexity = O(1)

function isValidSubsequence(array, sequence) {
    // Write your code here.
      // for loop through array, with an index for sequence
      // if the num at sequence index is present, increment that index
      // return if sequence index >= sequence.length
      let seqIndex = 0;
      for (let i = 0; i < array.length; i++) {
          if (sequence[seqIndex] === array[i]) seqIndex++;
      }

      return seqIndex >= sequence.length;
  }
