//https://leetcode.com/problems/can-place-flowers/

class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int count = n; // remaining flowers to place
        boolean skip = true; //whether we can put a flower there
        int next; 
        int current;
        
        //Iterate through the flowerbed once
        for (int i = 0; i < flowerbed.length; i++){
            current = flowerbed[i];
            if (i <= flowerbed.length-2)
                next = flowerbed[i+1];
            else
                next = 0;
                
            if (skip && current == 0 && next == 0){ //if a flower can be placed there and 
                count--;                            //its current is 0 and next is 0
                skip = false;                       // decrement count and set skip to false
            }
            else if (current == 0)// if its a 0, a flower could be placed in the next spot
                skip = true;
            else if (current == 1)// if its a 1, a flower cannot be placed in the next spot
                skip = false;
            
        }
        if (count <= 0)// if we've placed all the flowers, return true
            return true;
        
        return false;
        
    }
}