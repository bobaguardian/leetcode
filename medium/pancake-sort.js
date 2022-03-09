/**
 * @param {number[]} arr
 * @return {number[]}
 */
 const pancakeSort = function(arr) {
  // choose a integer k at random between 1 and arr.length
  // reverse the sub-array from 0 to k - 1
  // concatenate the sub-array and the original array
  // check if the array is sorted (helper function)
  // if its not, repeat steps above (while loop)
  let divider = arr.length;
  let kArr = [];
  let k;

  while (!isSorted(arr)) {
    // if element is the max, decrement divider
    // so that it will not flip past the sorted
    if (Math.max(...arr) === arr[divider - 1]) divider--;

    // make sure it gets a different k than the last one
    do {
      k = Math.floor(Math.random() * (divider) + 1);
    } while (k === kArr[kArr.length - 1])

    arr = [...arr.slice(0, k).reverse(), ...arr.slice(k)];
    kArr.push(k);
    // console.log(k, arr);

  }
  return kArr;
};

// O(n) time complexity where n is the size of the array
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

console.log(pancakeSort([3, 2, 4, 1]));
