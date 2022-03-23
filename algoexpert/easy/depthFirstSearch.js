// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // Solution 1 - keep a stack, push current.name to result array, add all
  // children nodes to the stack from right to left (so they will be popped
  // from left to right)
	// O(n^2) time complexity
	// O(n^2) space complexity
  depthFirstSearch(array) {
    // Write your code here.
		const stack = [this];

		while (stack.length) {
			let currentNode = stack.pop();
			array.push(currentNode.name);

			for (let i = currentNode.children.length - 1; i >= 0; i--) {
				stack.push(currentNode.children[i])
			}
		}

		return array;

  }
}
