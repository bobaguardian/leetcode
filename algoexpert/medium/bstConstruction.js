// Solution 1 - Recursive solutions
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  // Average O(log(n)) Time, O(log(n)) Space
  // Worst O(n) Time, O(n) Space
  insert(value) {
    // BST traversal to find spot to put value
		// check if value < this.value
		  // go left subtree if exists
			// if .left doesnt exist, insert new node as this.left
		// else
		  // go right subtree if exists
		  // if .right doesnt exist, insert new node as this.right
		// if (this.contains(value)) return null;

		if (value < this.value) {
			if (this.left) {
				this.left.insert(value);
			} else {
				this.left = new BST(value);
			}
		} else {
			if (this.right) {
				this.right.insert(value);
			} else {
				this.right = new BST(value);
			}
		}

    // Do not edit the return statement of this method.
    return this;
  }

  // Average O(log(n)) Time, O(log(n)) Space
  // Worst O(n) Time, O(n) Space
  contains(value) {
    // BST traversal to find a target value
		// check if this value is the value return true if it is
		// else if value < this.value and this.left is not null
		  // return this.left.contains(value)
		// else if value > this.value and this.right is not null
		  // return this.right.contains(value)
		// return false

		if (this.value === value) return true;

		else if (value < this.value && this.left) {
			return this.left.contains(value);
		} else if (value > this.value && this.right) {
			return this.right.contains(value);
		}
		return false;
  }

  // Average O(log(n)) Time, O(log(n)) Space
  // Worst O(n) Time, O(n) Space
	// recursively call remove, keeping track of the parent
  remove(value, parent = null) {
		if (value < this.value) { // call this.left.remove
			if (this.left) {
				this.left.remove(value, this);
			}
		} else if (value > this.value) { // call this.right.remove
			if (this.right) {
				this.right.remove(value, this);
			}
		} else { // reached the target node to remove
			if (this.left && this.right) { // case where theres 2 child nodes
				// get the min value of the right subtree
				this.value = this.right.getMinValue();
				this.right.remove(this.value, this);
			} else if (parent === null) { // case where node to remove is the root node
				if (this.left) {
					this.value = this.left.value;
					this.right = this.left.right;
					this.left = this.left.left;
				} else if (this.right) {
					this.value = this.right.value;
					this.right = this.right.right;
					this.left = this.right.left;
				} else {
					// case where this is a single node tree so do nothing.
				}

			} else if (parent.left === this) {  // case where node to remove is a single child from the left of parent
				// sets the parent's left to be the left of this node if it exists, else the right
				parent.left = this.left ? this.left : this.right;
			} else if (parent.right === this) { // case where node to remove is a single child from the right of parent
				parent.right = this.left ? this.left : this.right;
			}

		}

    // Do not edit the return statement of this method.
    return this;
  }

	getMinValue() {
		if (this.left === null) return this.value;
		else return this.left.getMinValue();
	}
}



// Solution 2 - Iterative Solutions
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
// Solve all iteratively
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average O(log(n)) Time, O(1) Space
  // Worst O(n) Time, O(1) Space
  insert(value) {
    let current = this;

		while (current) {
			if (value < current.value) { // left
				if (!current.left) {
					current.left = new BST(value);
					break;
				} else {
					current = current.left;
				}
			} else { // right
				if (!current.right) {
					current.right = new BST(value);
					break;
				} else {
					current = current.right;
				}
			}
		}

		current = new BST(value);

    // Do not edit the return statement of this method.
    return this;
  }

  // Average: O(log(n)) Time, O(1) Space
  // Worst: O(n) Time, O(1) Space
  contains(value) {
    // Write your code here.
		let current = this;
		while (current) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}

		return false;

  }

  remove(value, parent = null) {
    // first need to find the node to remove, when removing the node, need to replace it with its respective values
		// see cases
		// case 1: node to remove has 2 children nodes
		  // replace with the the minimum value of the left subtree
		// case 2: node to remove is a root node (need to keep track of parent, its a root node if parent = null)
		  // if it has no children, that means its a single node tree  => do nothing

		// case 3: node to remove has just one node (right or left)
		  // if node.left, get the max value of node.left and replace it, replace parent.(right or left) = null
		  // if node.right, get the min value of node.right and replace it, replace parent.(right or left) = null


		let current = this;

		// find node to remove
		while (current) {
			if (value < current.value) {
				parent = current;
				current = current.left;
			} else if (value > current.value){
				parent = current;
				current = current.right;
			} else { // found target node to remove
				// case 1: node to remove has 2 children and is not a root node
				if (current.right && current.left) {
					current.value = current.right.getMinValue();
					current.right.remove(current.value, current);
				} else if (!parent) {
					// case 2: node to remove is a root node
					if (current.left) {
						current.value = current.left.value;
						current.right = current.left.right;
						current.left = current.left.left;
					} else if (current.right){
						current.value = current.right.value;
						current.right = current.right.right;
						current.left = current.right.left;
					} else {
						// single node tree - do nothing
					}
				} else if (parent.left === current) {
					parent.left = current.left ? current.left : current.right;
				} else if (parent.right === current) {
					parent.right = current.left ? current.left : current.right;
				}
				break;
			}

		}

    // Do not edit the return statement of this method.
    return this;
  }


	getMinValue() {
		let current = this;
		while (current.left) {
			if (current.left) {
				current = current.left;
			}
		}
		return current.value;
	}
}

// Do not edit the line below.
exports.BST = BST;
