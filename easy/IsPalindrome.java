//https://leetcode.com/problems/valid-palindrome/

class Solution {
    public boolean isPalindrome(String s) {
        return isPalindrome(s, 0, s.length() - 1);        
    }
    
    //recursive method to determine if string is palindrome given
    //start and end indices
    public boolean isPalindrome(String s, int start, int end)
    {
        //the start index has exceeded the end index
        if(start >= end) 
            return true;
        
        //if start character is not a letter or digit, move on with recursion
        //ex: skips commas
        if(!Character.isLetterOrDigit(s.charAt(start)))
            return isPalindrome(s, start + 1, end);
        
        //if end character is not a letter or digit, move on with recursion
        if(!Character.isLetterOrDigit(s.charAt(end)))
            return isPalindrome(s, start, end - 1);
        
        //return if the comparison of the start and end characters are equal
        //and the recursive call to compare the next characters down the line
        return Character.toLowerCase(s.charAt(start)) == Character.toLowerCase(s.charAt(end)) 
            && isPalindrome(s, start + 1, end - 1);       
            
    }
}