class Solution {
    public boolean isUgly(int num) {
        if (num <= 0){
            return false;
        }
        int rem = num;
        while (rem != 1){
            if (rem % 2 == 0){
                rem = rem/2;
            }
            else if (rem % 3 == 0){
                rem = rem/3;
            }
            else if (rem % 5 == 0){
                rem = rem/5;
            }
            else{
                return false;
            }
        }
        return true;
    }
}