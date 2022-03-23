/**
 * Binary Search Tree Traversals
 *
 * In-order - traverse the BST in order like if you were to sort the values
 * in ascending order. Look at left node, then current, then right node.
 *
 * Pre-order - Current node, then left, then right.
 *
 * Post-order - Left node, then right node, then current.
 */


 function inOrderTraverse(tree, array) {
  // Write your code here. left, current, right
	if (!tree) return;
	inOrderTraverse(tree.left, array)
  array.push(tree.value); // alternatively can console log here
  inOrderTraverse(tree.right, array);
	return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
	if (!tree) return;
	array.push(tree.value);
	preOrderTraverse(tree.left, array);
	preOrderTraverse(tree.right, array);
	return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
	if (!tree) return;
	postOrderTraverse(tree.left, array);
	postOrderTraverse(tree.right, array);
	array.push(tree.value);
	return array;
}
