// https://leetcode.com/problems/regular-expression-matching/submissions/

import java.util.regex.Pattern; 

class Solution {
    public boolean isMatch(String s, String p) {
        if(p.isEmpty())
            return s.isEmpty();
        return s.matches(p);
        
    }
}