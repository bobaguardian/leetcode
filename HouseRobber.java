// https://leetcode.com/problems/house-robber/

class Solution {
    private int max = 0;
    
    public int rob(int[] nums) {
        int[] memo = new int[nums.length]; //memoization array: store cached maxSums
        dp(nums, memo, 0, 0); //calls dp recursive function
        return max; //after all recursive calls, returns the max sum generated
        
    }
    
    //Dynamic Programming recursive helper method
    //memoizes the sums if each combination
    private void dp(int[] nums, int[] memo, int sum, int index){
        if (index >= nums.length){ //base case, once the index given
            if (sum > max)         //has exceeded the number of houses
                max = sum;         //update max to be sum if needed
        }
        else{ //recursive calls, for each house combo (starting with index house)
              //set that house in memo to its updated sum
              //recursive call using dp - increments index by 2 (so no 2 adjacent
              //houses are checked)
            for (int i = index; i < nums.length; i++){
                if (sum + nums[i] > memo[i]){ // if new max sum is found for house combo
                    memo[i] = sum + nums[i];
                    dp(nums, memo, sum + nums[i], i + 2);
                }
            }
        }
    }
}