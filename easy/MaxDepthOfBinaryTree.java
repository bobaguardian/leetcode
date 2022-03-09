// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
    public int maxDepth(TreeNode root) {
        //base case
        if (root == null)
            return 0;
        
        //recursion
        //go through the left and right subtrees of the root, adding 1
        //to the depth at each level
        //return the larger number of the 2 depths.
        return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1);
    }
}