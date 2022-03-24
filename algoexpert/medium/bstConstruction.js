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
