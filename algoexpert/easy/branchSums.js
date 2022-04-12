// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


  /**
   *
   * Solution 1 - recursion - pass in result array and sum at each node
   * if the node is a leaf node (base case), add sum + val to array else
   * call recursively on left and right if they're not null
   *
   * Time = O(n), n = number of nodes
   * Space = O(n), n = number of nodes => recursive call stack
   */
  function branchSums(root) {
    // Write your code here.
	// go through and sum each branch from left to right and add
	// the sum to an array
	// use helper method - recursively, pass in sum at the given point, pass in the result array
	// base case - if the node is a leaf, push the node.value + sum to the result array
	// recursive case: call recursive function on the left and on the right
	// return result array
	return branchSumsHelper(root, [], 0);
  }


  const branchSumsHelper = (node, result = [], sum = 0) => {
	// base
	if (!node.left && !node.right) {
		result.push(node.value + sum);
	}

	// recursive call on left
	if (node.left) {
		branchSumsHelper(node.left, result, sum + node.value)
	}

	// recursive call on right
	if (node.right) {
		branchSumsHelper(node.right, result, sum + node.value)
	}

	return result;

}
