
// Solution 1 - Recursion
// Keep track of depth at each level by passing in d
// Time Complexity - O(n) where n = number of nodes
// Space Complexity - O(h) where h = height of tree
function nodeDepths(root, d = 0) {
  // Write your code here.
	if (!root) return 0;
	return d + nodeDepths(root.left, d + 1) + nodeDepths(root.right, d + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
