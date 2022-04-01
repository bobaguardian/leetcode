/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 *
 * prompt: Given an array nums of n integers where n > 1,
 * return an array output such that output[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * input = [1, 2, 3, 4]
 * output = [24, 12, 8, 6]
 */
 var productExceptSelf = function (nums) {
    // Your code here
    const leftProducts = [];
    const rightProducts = [];
    const result = [];

    // calculate left products at each index (starting at start of nums)
    leftProducts.push(1);

    for (let i = 1; i < nums.length; i++) {
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }


    // calculate right products at each index (starting at end of nums)
    rightProducts[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
      rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }


    // generate result array of products except self
    for (let i = 0; i < nums.length; i++) {
      result[i] = leftProducts[i] * rightProducts[i];
    }

    console.log("nums", nums);
    console.log("left", leftProducts);
    console.log("right", rightProducts);

    return result;

  };

  module.exports = productExceptSelf;
