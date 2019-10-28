// https://leetcode.com/problems/binary-tree-paths

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
    
    public List<String> binaryTreePaths(TreeNode root) {
        List<String>  result = new ArrayList<>();

        if (root == null)
            return result;
        
        getPaths(root, result, root.val + "");
        
        return result;
    }
    
    //Recursive method to get all paths
    private void getPaths(TreeNode root, List<String> result, String path){
        if (root == null)
            return;
        
        if (root.left == null && root.right == null){ //leaf reached, add to paths
            result.add(path);
        }
        
        if (root.left != null){ // as long as left child is not null, keep going
            getPaths(root.left, result, path + "->" + root.left.val);
        }
        
        if (root.right != null){ // as long as right child is not null, keep going
            getPaths(root.right, result, path + "->" + root.right.val);
        }
    }
}