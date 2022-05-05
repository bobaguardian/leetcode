function firstNonRepeatingCharacter(string) {
  // Write your code here.
	/**
	first non repeating character is the first character that occurs only once
	abcdcaf => b (not d or f)
	approach:
	keep an hash map to keep track of frequency count {}
	iterate through string
	- if char is not in map, add it, value = 1
	- if char is in array increment value
	{ a: 2, b: 1, c: 2, d: 1, f: 1}
	remove all key value pairs that have value > 1
	{b: 1, d: 1, f: 1}
	find the key with the smallest index in the string and return it

	O(n) time, O(1) space since largest size of hash table wwill be 26 - alphabet
	*/

	const frequencyCount = getFrequencyMap(string);
	removeRepeatingChars(frequencyCount);


	let smallestIdx = string.length;
	for (const key of Object.keys(frequencyCount)) {
		if (string.indexOf(key) < smallestIdx) smallestIdx = string.indexOf(key);
	}

	return smallestIdx === string.length ? -1 : smallestIdx;
}

const getFrequencyMap = (string) => {
		const frequencyCount = {};
		for (const char of string) {
			if (!frequencyCount[char]) frequencyCount[char] = 1;
			else frequencyCount[char]++;
		}
	return frequencyCount;
}

const removeRepeatingChars = (frequencyCount) => {
	for(const key of Object.keys(frequencyCount)) {
		if (frequencyCount[key] > 1) delete frequencyCount[key];
	}
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
