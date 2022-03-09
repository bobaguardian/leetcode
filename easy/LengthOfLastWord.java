// https://leetcode.com/problems/length-of-last-word

class Solution {
    public int lengthOfLastWord(String s) {
        if (s.isEmpty())
            return 0;
        String[] arrayOfStrings = s.split(" ");
       
        if(arrayOfStrings.length == 0)
            return 0;
        
        return arrayOfStrings[arrayOfStrings.length-1].length();
    }
}