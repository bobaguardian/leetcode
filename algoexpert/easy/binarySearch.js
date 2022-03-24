
// Solution 1 - use helper function - recursion passing in a low and high range
// Time Complexity - O(log(n)) - searching half the input each step
// Space Complexity - O(log(n)) - recursive call stack
function binarySearch(array, target) {
  // binary search - get midpoint, see if target is < or > than midpoint and
	// search that half of the array repeat.
	return binarySearchHelper(array, target, 0, array.length - 1);
}


function binarySearchHelper(array, target, low, high) {
	// base case
	if (low > high) return -1;

	const midpoint = Math.floor((high + low)/ 2);
	if (array[midpoint] === target) return midpoint;

	if (target > array[midpoint]) {
		return binarySearchHelper(array, target, midpoint + 1, high);
	} else {
		return binarySearchHelper(array, target, low, midpoint - 1);
	}
}
