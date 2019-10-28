// https://leetcode.com/problems/bulls-and-cows/

class Solution {
    public String getHint(String secret, String guess) {
        int[] counts = new int[10]; //array to hold counts of each digit (0-9)
        int bulls = 0; // number of bulls (same digit and position)
        int cows = 0; // number of cows (digit exists in secret but wrong pos)
        
        //loop through each number
        for (int i = 0; i < secret.length(); i++){
            //if the numbers are equal at the same position
            if (secret.charAt(i) == guess.charAt(i)){
                bulls++;
            }
            else{
                // if counts[guess] is positive, that number exists in the secret
                if (counts[guess.charAt(i) - '0'] > 0)
                    cows++;
                counts[guess.charAt(i) - '0']--; //decrement

                // if counts[secret] is negative, that number exists in the guess
                if (counts[secret.charAt(i) - '0'] < 0)
                    cows++;
                counts[secret.charAt(i) - '0']++; //increment
            } 
        }
        return bulls + "A" + cows + "B";
        
    }
}