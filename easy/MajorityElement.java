// https://leetcode.com/problems/majority-element/

import java.util.*; 

class Solution {
    public int majorityElement(int[] nums) {
        //map that contains the elmenet and its count
        Map <Integer, Integer> count = new HashMap<Integer, Integer>();
        
        //current max counts and the elemen to that count
        int maxCount = 0;
        int maxElement = 0;
        
        //loop to generate the count map
        for (int n: nums){
            if (!count.containsKey(n))
                count.put(n, 1);
            else
                count.put(n, count.get(n) + 1);
        }
        
        //Iterates through the elements and compares their counts
        //updating maxCount and maxElement to be the higher count
        for (int k : count.keySet()){
            if (maxCount < count.get(k)){
                maxCount = count.get(k);
                if (maxCount > Math.floor(count.size()/2))
                    maxElement = k;
            }
        }
        return maxElement;
            
    }
}