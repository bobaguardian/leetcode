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

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
