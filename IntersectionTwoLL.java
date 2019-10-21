// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int lengthA = 0;
        int lengthB = 0;
        int lengthDiff;
        ListNode a = headA;
        ListNode b = headB;
        
        //calculate lengths and then length differences between two linked lists
        while(a != null){//calculates length for list A
            a = a.next;
            lengthA++;
        }
        
        while(b != null){//calculates length for list B
            b = b.next;
            lengthB++;
        }
        
        lengthDiff = Math.abs(lengthB-lengthA);
        
        //reset temp heads
        a = headA;
        b = headB;
        
        
        //set a and b nodes so that they are equal in length
        while (lengthDiff != 0){
            if (lengthB > lengthA)
                b = b.next;
            else
                a = a.next;
            lengthDiff--;
        }
        
        //now that both lists lengths are equal, we can check them in pairs
        //if there is an intersection node between them
        while(a != null || b != null){
            if(a==b)
                return a;
            a = a.next;
            b = b.next;
        }
        //when there is no intersection node
        return null;
            
        
    }
}