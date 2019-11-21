//https://leetcode.com/problems/balanced-binary-tree/

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
    public boolean isBalanced(TreeNode root) {
        //base case
        if (root == null)
            return true;
        
        //Gets the height of the left and right trees of the root
        int leftHeight = treeHeight(root.left);
        int rightHeight = treeHeight(root.right);
        
        //return false if difference between heights is more than 1
        if (Math.abs(leftHeight-rightHeight) > 1){
            return false;
        }
        
        //recursive call to each side of the node
        return isBalanced(root.left) && isBalanced(root.right);
    }
    
    // Helper function to return the height of the tree given the node
    private int treeHeight(TreeNode node){
        if (node == null)
            return 0;
        return 1 + (Math.max(treeHeight(node.left), treeHeight(node.right)));
        
    }
}