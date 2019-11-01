// https://leetcode.com/problems/reverse-string

class Solution {
    public void reverseString(char[] s) {
        char temp; //holds temporary value to switch
        for (int start = 0, end = s.length-1; start < end; start++, end--){
            temp = s[start];
            s[start] = s[end];
            s[end] = temp;
        }
    }
}