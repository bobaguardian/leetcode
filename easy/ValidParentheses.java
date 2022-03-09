// https://leetcode.com/problems/valid-parentheses/

import java.io.*; 
import java.util.*; 


class Solution {
    public boolean isValid(String s) {
        //Holds mappings of left and right parentheses
        HashMap<String, String> leftRight = new HashMap<String, String>();
        leftRight.put(")", "(");
        leftRight.put("]", "[");
        leftRight.put("}", "{");

        //stack to keep track of left parentheses
        Stack<String> tracker = new Stack<String>();
        
        //loop through each character in string
        for (int i = 0; i < s.length(); i++){
            // if contains value left push to tracker stack
            if (leftRight.containsValue(s.charAt(i)+"")){ 
                tracker.push(s.charAt(i)+"");
            }
            
            //if contains key Right, pop stack and check if
            //parentheses are the same type () [] {}
            else if (leftRight.containsKey(s.charAt(i)+"")) { 
                if (tracker.empty()) return false;
                
                String current = tracker.pop();

                if (!current.equals(leftRight.get(s.charAt(i)+""))){
                    return false;
                } 
            }
        }
        
        if (tracker.size() == 0)
            return true;
        return false; //if tracker still has values, invalid

    }
}