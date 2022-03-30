
// Solution 1 - recursive
// use divide and conquer approach - get midpoint, left = recursive
// call on the left half of array, right = recursive call on the
// right half of array
function minHeightBst(array, start = 0, end = array.length - 1) {
  // Write your code here.
	if (start > end) return null;
	const mid = Math.floor((end + start) / 2);
	const newBst = new BST(array[mid]);
	newBst.left = minHeightBst(array, start, mid - 1);
	newBst.right = minHeightBst(array, mid + 1, end);
	return newBst;
}



class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
