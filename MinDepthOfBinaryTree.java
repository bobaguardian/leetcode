// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
    public int minDepth(TreeNode root) {
        //Base case
        if (root == null)
            return 0;
        
        
        //Recursion
        int left = minDepth(root.left); //min depth of left subtree
        int right = minDepth(root.right);// min depth of the right subtree
        
        if (left == 0)
            return right+1;
        
        if(right == 0)
            return left+1;
        
        else return Math.min(left+1, right+1);
        
       
    }
}