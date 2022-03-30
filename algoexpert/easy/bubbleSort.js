
// Avg and worst: O(n^2) time, O(1) space
// Best - if its already sorted => O(n) time, O(1) space
function bubbleSort(array) {
  // Write your code here.
	// traverse from start to end, if any point the current number
	// is larger than the number that comes after it, swap them
	// if we go through an iteration and there hasn't been a swap, then
	// the array is sorted
	let didSwap = true;

	while (didSwap) {
		didSwap = false;
		for (let i = 0; i <= array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				didSwap = true;
			}
		}
	}
	return array;
}


function swap (array, i, j) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;
