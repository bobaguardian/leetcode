class Solution {
    public void rotate(int[] nums, int k) {
        //Initial solution: brute force, rotate each element
        // O(n * k) Time, O(1) Space
        
        // int p1, p2;
        // for (int i = 0; i < k; i++){
        //     p1 = nums[nums.length-1];
        //     for (int j = 0; j < nums.length; j++){
        //         p2 = nums[j];
        //         nums[j] = p1;
        //         p1 = p2;
        //     }
        // }
        
        //Cyclic replacements approach
        k = k % nums.length; // wraps k around if exceepds nums' length
        int count = 0;
        
        for (int i = 0; count < nums.length; i++){
            //increments i to be the next cycle after the do-while loop
            int current = i;
            int prev = nums[i];
            do { //loop through one cycle of skips
                int next = (i+k) % nums.length;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                
                i = next; //sets up for next skip
                count++;
            } while (i != current);   
        }
    }
}