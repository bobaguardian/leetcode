// https://leetcode.com/problems/integer-to-roman/

class Solution {
    public String intToRoman(int num) {
        int index = 0; //represents the position of the digit
        StringBuilder result = new StringBuilder();
        char[] one = {'I', 'X', 'C', 'M'}; //holds all the ones value symbols
        char[] five = {'V', 'L', 'D'}; //holds all the fives value symbols
        
        while(num > 0) { // each iteration is a digit
            int mod = num % 10;
            num = num / 10;
            
            // appends to result string reversed starting with ones digit
            if(mod == 4) {
                result.append(five[index]);
                result.append(one[index]);
                mod = 0;
            } else if(mod == 9) {
                result.append(one[index + 1]);
                result.append(one[index]);
                mod = 0;
            } else if(mod >= 5) {
                for(int i = 0; i < mod - 5; i++) {
                    result.append(one[index]);
                }
                result.append(five[index]);
            } else {
                for(int i = 0; i < mod; i++) {
                    result.append(one[index]);
                }
            }
            index++; //increment position to the next digit
        }
        return result.reverse().toString(); //return reversed of the result
    }
}