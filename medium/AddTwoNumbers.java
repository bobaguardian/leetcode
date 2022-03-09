// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
import java.lang.*; 
import java.io.*; 
import java.util.*; 

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0; 
        ListNode result = new ListNode(0);
        ListNode current = result;
        while (l1 != null || l2 != null){
            int x, y, sum;
            
            if (l1 == null) //check if l1's value is null, set to 0
                x = 0;
            else x = l1.val;
            if (l2 == null) // check if l2's value is null, set to 0
                y = 0;
            else y = l2.val;
            
            sum = x + y + carry;
            carry = sum/10; // recalculate the new carryover value
            current.next = new ListNode(sum % 10); //set result's next value to be the 
                                                   //sums least significant
            current = current.next;
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
            
        }
        //if there is stilla  carry over value, put that value at the end of the result LL
        if (carry > 0){
            current.next = new ListNode(carry);
        }
        
        return result.next;
    }
}