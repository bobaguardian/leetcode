//https://leetcode.com/problems/container-with-most-water/submissions/

class Solution {
    public int maxArea(int[] height) {
        int p1 = 0, p2 = height.length - 1, maxA = 0;
        
        // While p1 and p2 pointers remain within range of the array and
        // p1 is less than p2
        while ((p1 < height.length - 1) && (p2 > 0) && (p1 < p2)){
            //calculate the current area between the two pointers
            int area = Math.min(height[p1], height[p2]) * Math.abs(p1 - p2);
            
            if (maxA < area) //update the maximum area
                maxA = area;
            
            //update pointers based on the larger pointer's value
            if (height[p1] > height[p2])
                p2--;
            else
                p1++;
        }
        
        return maxA;
    }
    
    
 
}