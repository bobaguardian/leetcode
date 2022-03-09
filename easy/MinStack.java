// https://leetcode.com/problems/min-stack/

import java.io.*; 
import java.util.*;

class Node { //for linked list
    int val, min;
    Node next;

    Node(int v) {
        this.val = v;
        next = null;
    }
}

class MinStack { //implemented with a linked list
    Node head; //the head of the linked list AKA top of the stack
    int currentMin;// keeps track of the current minimum after elements are pushed
    /** initialize your data structure here. */
    public MinStack() {
        head = null;
        currentMin = Integer.MAX_VALUE;
    }
    
    public void push(int x) {
       if (head == null) //if stack is empty, make the current min x
           currentMin = x;
        Node n = new Node(x);//creates a new node
        n.min = Math.min(x, currentMin);//sets that node's min to be the currentMin at the                                          // time
        currentMin = Math.min(x, currentMin);//sets currentMin to be the minimum of the two
        n.next = head; //n.next is null
        head = n;//the top of the stack is the newly added element
    }
    
    public void pop() {
        if (head == null)
            return;
        head = head.next;
        if (head != null) //sets the current min to be the min when the node was added
            currentMin = head.min;
    }
    
    public int top() {
       if (head == null)
           return -1;
        else
            return head.val;//return the top of the stack's value
    }
    
    public int getMin() {
        return head.min;//return the most current min (after most recent element is added)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */