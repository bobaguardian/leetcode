class Solution {
    public int[] sortArrayByParityII(int[] A) {
        int[] result = new int[A.length];
        int evenIndex = 0;
        int oddIndex = 1;
        for(int num : A){
            if(num % 2 == 0){ // if number is even
                result[evenIndex]= num;
                evenIndex += 2;
            }
            else{
                result[oddIndex]= num;
                oddIndex += 2;
            }
        }
        return result;
    }
}