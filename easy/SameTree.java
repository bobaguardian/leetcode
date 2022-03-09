// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        //Base cases
        if (p == null && q == null)
            return true;
        //if one is null and the other isn't
        if (q == null || p == null)
            return false;
        if (p.val != q.val)
            return false;
            
        //Recursion
        return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
        
    }
}