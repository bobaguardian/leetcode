
/**
 *
 * Solution 1 - using map, or for loop to square numbers,
 * then sorting it after
 * O(nlogn) time complexity - .sort
 * O(n) space - result array
 */
function sortedSquaredArray(array) {
    // Write your code here.
    // use a array's map function
    // return array.map(num => num * num).sort((a, b) => a - b);

    const result = [];
    for (const num of array) {
        result.push(num * num);
    }

    return result.sort((a, b) => a - b); // O(nlogn)
}


/**
 *
 * Solution 2 - use pointers to keep track of smallest and largest values
 * compare absolute vaue of two and add larger to the end of array, and
 * update the relating pointer accordingly
 * - fill up array from right to left (largest to smallest)
 *
 * This solution involves putting the values in their correct sorted position
 * as we square them. - takes advantage of the already sorted input array
 * O(n) TS
 */
function sortedSquaredArray2(array) {
    // Write your code here.
    const result = [];
    let smallIndex = 0;
    let largeIndex = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smaller = array[smallIndex];
        const larger = array[largeIndex];

        if (Math.abs(smaller) > Math.abs(larger)) {
            result[i] = smaller * smaller;
            smallIndex++;
        } else {
            result[i] = larger * larger;
            largeIndex--;
        }
    }

    return result;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
