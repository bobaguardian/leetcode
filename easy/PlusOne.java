// https://leetcode.com/problems/plus-one

class Solution {
    public int[] plusOne(int[] digits) {
        //index position is set to the last digit initially
        int index = digits.length-1;
        //newResult to return if length of array must change
        int[] newResult;
        
        //normal case: if no carry over at all
        if (digits[index] != 9){
            digits[index]++;
            return digits;
        }
        
        //While loop to generate the index the carry over ends at
        while (digits[index] == 9){
            if(index == 0)
                break;
            index--;
        }
        
        //if the carry over index ends beyond index 0
        //or if the carry over ends at index 0 but is not 9
        if (index != 0 || (index == 0 && digits[index] != 9)){
            digits[index]++;
            for(int i = index+1; i < digits.length; i++){
                digits[i] = 0;
            }
            return digits;
        }
        
        //requires a new array => change array length
        else{
            newResult = new int[digits.length+1];
            newResult[0] = 1;
            for (int i = 1; i < digits.length; i++){
                newResult[i] = 0;
            }
            return newResult;
        }
    }
}