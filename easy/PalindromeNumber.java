import java.lang.*; 
import java.io.*; 
import java.util.*;

class Solution {
    public boolean isPalindrome(int x) {
        StringBuilder input = new StringBuilder();
        input.append(Integer.toString(x));
        input = input.reverse();
        System.out.println("x: " + Integer.toString(x));
        System.out.println("Reverse: " + input);
        return (Integer.toString(x)).equals(input.toString());
    }
}