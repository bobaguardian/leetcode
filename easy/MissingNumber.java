// https://leetcode.com/problems/missing-number

class Solution {
    public int missingNumber(int[] nums) {
        
        //Sorting Solution
        Arrays.sort(nums);
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != i){
                return i;
            }
        }
        return (nums.length);
    
        
        
        //HashSet Solution
//         Set<Integer> HS = new HashSet<Integer>();
//         //loops through all numbers in nums and adds them to the hashset
//         for(int n: nums)
//             HS.add(n);
    
//         for (int i = 0; i < nums.length+1; i++){// plus one to include miss no.
//             if (!HS.contains(i)) //If the hash set does not contain the
//                 return i;        //number i, return it
//         }
        
//         return -1; //if there is no missing number
    }
}