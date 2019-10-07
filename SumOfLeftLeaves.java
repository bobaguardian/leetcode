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
    public int sumOfLeftLeaves(TreeNode root) {
        int add = 0;
        if (root == null){
            return 0;
        }
      
        if (root.left != null){
            if (root.left.left == null && root.left.right == null)
                add += root.left.val;
            else
                add += sumOfLeftLeaves(root.left);
        }
        
        add += sumOfLeftLeaves(root.right);
        return add;
    }
}