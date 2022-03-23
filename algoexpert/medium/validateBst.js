// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1 - Recursion using min and max helper parameters
// Time Complexity - O(n), where n = number of nodes (visiting each node)
// Space Complexity O(d) where d = depth of tree (recursion, call stack)
function validateBst(tree, min = -Infinity, max = Infinity) {
  // Write your code here.
	if (!tree) return true;

	if (tree.value < min || tree.value >= max) return false;
	return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max);
}
