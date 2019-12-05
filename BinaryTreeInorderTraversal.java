// https://leetcode.com/problems/binary-tree-inorder-traversal
//Inorder traversal: left, root, right

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
    List<Integer> result = new ArrayList<Integer>();
    public List<Integer> inorderTraversal(TreeNode root) {
        //Iterative solution
        
        //Stack to store nodes while traversing 
        Stack<TreeNode> stack = new Stack<TreeNode>();
        
        TreeNode curr = root;
        while (curr != null || !stack.isEmpty()){
            while(curr != null){ //goes to the leftmost
                stack.push(curr);
                curr =  curr.left;
            }
            //once we reach a null, get the most recently added node
            //and add it to the result, then traverse the right side
            //of curr's tree
            curr = stack.pop();
            result.add(curr.val);
            curr = curr.right;
            
        }
        
        return result;
        
        //Recursive Solution
        
        //Base case
        // if (root == null)
        //     return result;
        
        //Recursive call to the left side of the tree
        // inorderTraversal(root.left);
        
        // result.add(root.val);
        
        //Recursive call to the right side of the tree
        // inorderTraversal(root.right);
        // return result;
        
    }
}