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
	// O(v + e) time complexity, v is number of nodes/vertices, e is number of edges
	// O(v) space complexity - stack
  depthFirstSearch(array) {
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


  // Solution 2 - call depthFirstSearch method of all children passing in array
	// Time Complexity - O(v + e) where v = number of vertices, and e = number of edges
	// Space Complexity - O(v) - uses call stack
  depthFirstSearch2(array) {
		array.push(this.name);
		for (const child of this.children) {
			child.depthFirstSearch2(array);
		}
		return array;
  }
}
