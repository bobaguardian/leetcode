class Solution {
    public String reverseWords(String s) {
        String[] stringArray = s.split(" ");
        StringBuilder res=new StringBuilder();
        
        for (String word: stringArray)
            res.append(new StringBuffer(word).reverse().toString() + " ");
        return res.toString().trim();
    }
}