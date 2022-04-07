/**
 *
 * Solution 1 - optimal - have two pointers one start, one end and compare
 *
 * O(n) time - going through half of the string
 * O(1) space
 */
function isPalindrome(string) {
	// have pointers start and end compare each and inc/dec each until pointers are equal
	// if at any point chars are not equal, return false

	let start = 0;
	let end = string.length - 1;
	while (start < end) {
		if (string[start] !== string[end]) {
			return false;
		}
		start++;
		end--;
	}

	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
