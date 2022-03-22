// Solution 1 - Keep track of minDiff and closest value, while loop through
// respective subtrees according to BST conditions, update minDiff if necessary
// After while loop, return the closest value
// Time complexity = O(log(n)) - splitting tree in half at each step
// Space complexity = O(1)

function findClosestValueInBst(tree, target) {
    // Write your code here.
      // keep track of minDiff = Math.abs(tree.val - target)
      // keep track of closestVal = tree.val
      // current = tree
      // while current:
          // if minDiff > diff b/w current.val and target, update minDiff, and closestVal
        // if current > target, current = current.left
        // if current < target, current = current.right
      // return closestVal

      let minDiff = Number.MAX_SAFE_INTEGER;
      let closestVal = null;
      let current = tree;
      while(current) {
          if (minDiff > Math.abs(current.value - target)) {
              minDiff = Math.abs(current.value - target);
              closestVal = current.value;
          }

          if (current.value > target) current = current.left;
          else current = current.right;
      }

      return closestVal;
  }

  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
