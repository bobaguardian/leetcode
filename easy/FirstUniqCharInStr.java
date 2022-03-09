class Solution {
    public int firstUniqChar(String s) {
        LinkedHashMap<String,Integer> map=new LinkedHashMap<String,Integer>();  
        for(int i = 0; i < s.length(); i++){
            if (map.get(String.valueOf(s.charAt(i))) == null)
                map.put(String.valueOf(s.charAt(i)), 1);
            else
                map.put(String.valueOf(s.charAt(i)), map.get(String.valueOf(s.charAt(i))) + 1);
        }
        
        
        for(String c: map.keySet()){  
            if (map.get(c) == 1)
                return s.indexOf(c);
       
        }  
        return -1;
        
    }
}