// https://leetcode.com/problems/search-insert-position/

class Solution {
    public int searchInsert(int[] nums, int target) {
        //Iterative for loop solution
        for (int i = 0; i < nums.length; i++){
            //when target is found, return that position
            //or once the value becomes larger than the target
            if (nums[i] == target || nums[i] > target)
                return i;
        }
        return nums.length; //return the last index of array + 1
                            //happens when target is larger than any
                            //value in the array
        
        
        // //binary search solution
        // int i = 0; //first element
        // int j = nums.length - 1; // last element
        // while (i < j) {
        //     int middle = (i + j) / 2;//calculate middle index of array
        //     if (target == nums[middle]) { //if target found, return position
        //         return middle;
        //     } else if (nums[middle] < target) { 
        //         i = middle + 1;
        //     } else {
        //         j = middle - 1;
        //     }       
        // }
        // return nums[i] < target ? i + 1 : i;

        
    }
}