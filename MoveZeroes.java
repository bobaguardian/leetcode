// https://leetcode.com/problems/move-zeroes

class Solution {
    
    //Initial Solution - O(n^2) Time
    
//     public void moveZeroes(int[] nums) {
//         int numZeros = 0;
//         int temp = 0;
//         for (int i = 0; i < nums.length; i++){
//             if (nums[i] == 0){
//                 numZeros++;
//                 temp = i;
//                 for (int j = i+1; j < nums.length; j++){
//                     nums[temp] = nums[j];
//                     temp++;
//                 }
//                 nums[nums.length-1] = 0;
               
//                 if ((nums[i] == 0) && (i < nums.length-numZeros)){
//                     i--;
//                 }
//             }
             
//         }
//     }
    
    //Rvised Solution - with swap O(n)
    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    public void moveZeroes(int[] nums) {
        int i=0, j=0;
        //while both indices i and j don't exceed the array length
        while (i < nums.length && j < nums.length){
            if (nums[i] == 0 && nums[j] == 0){
                j++;
            }
            else if (nums[i] == 0){
                swap(nums, i, j);
                i++;
            }
            else if (nums[j] == 0){
                j++;
            }
            else {
                i++;
                j++;
            }
        }
    }
}