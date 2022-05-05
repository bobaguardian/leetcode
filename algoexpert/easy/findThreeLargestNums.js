function findThreeLargestNumbers(array) {
  // Write your code here.
	// edge case: array length === 3 => just return the array
	// create result arr
	// repeat 3 times:
	// - get the largest, add it to result arr, remove it from og array
	// return result arr
	// O(nlog(n)) time - sort, O (1) space
	if (array.length === 3) return array.sort((a, b) => a - b);

	let result = [];
	for (let i = 0; i < 3; i++) {
		const largest = Math.max(...array);
		result.push(largest);
		const largestIdx = array.indexOf(largest);
		array.splice(largestIdx, 1);
	}

	result = result.sort((a, b) => a - b);
	return result;
}

function findThreeLargestNumbers2(array) {
  // Write your code here.
	// create result arr = [null, null, null]
	// traverse through arr
	// compare the num with each number in result arr and shift if necessary
	// ex: compare 141 with null => replace arr[0] = 141
	// compare 1 with arr[2] replace arr[2] 1 and shift if necessary

	const result = [null, null, null]
	for (const num of array) {
		updateLargest(result, num);
	}

	return result;
}
// [18, 141, 541]
const updateLargest = (result, num) => {
	if (!result[2] || num > result[2]) {
		shiftSort(result, num, 2);
	} else if (!result[1] || num > result[1]) {
		shiftSort(result, num, 1);
	} else if (!result[0] || num > result[0]) {
		shiftSort(result, num, 0);
	}

}

const shiftSort = (array, num, idx) => {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) { // if at the index, update num
			array[i] = num;
		} else { // else shift over to left
			array[i] = array[i + 1]
		}
	}
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
