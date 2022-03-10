/** https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}


 I/O
 - list1 = [], list2 = [] => []
 - list1 = [1, 2, 4], list2 = [1, 3, 4] => [1, 1, 2, 3, 4, 4]

approach
- create a dummy node
- keep track of the tail
- while list1 and list2 have values
  - compare the values aof list1 and list2, add the smaller one to the tail.next and update the smaller list's to its next
  - update the tail => tail.next
- by the end of the loop we could have one empty but one still with values, add the one with values still to the tail

 */
var mergeTwoLists = function(list1, list2) {
    let dummy = {val: 0, next: null};
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1){
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }

    return dummy.next;

};
